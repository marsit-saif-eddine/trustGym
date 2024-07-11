"use client";

import React, { useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlinePlusCircle } from 'react-icons/hi';
import { FiMinusCircle, FiShoppingCart, FiPlusCircle, FiUser, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { BiCreditCardFront } from 'react-icons/bi';
import { AjouterArticleModal } from '../components/Modals';

interface Article {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CartItem extends Article {
  quantity: number;
}

const articles: Article[] = [
  { id: 1, name: 'Expresso', price: '2.000 DT', image: '/images/expresso.jpg' },
  { id: 2, name: 'Eau', price: '2.000 DT', image: '/images/eau.jpg' },
  { id: 3, name: 'Jus d\'orange', price: '2.000 DT', image: '/images/jus-orange.jpg' },
  { id: 4, name: 'Protéine', price: '2.000 DT', image: '/images/proteine.jpg' },
  { id: 5, name: 'Jus vert', price: '2.000 DT', image: '/images/jus-vert.jpg' },
  { id: 6, name: 'Barre de protéine', price: '2.000 DT', image: '/images/barre-proteine.jpg' },
  { id: 7, name: 'Salade', price: '2.000 DT', image: '/images/salade.jpg' },
  { id: 8, name: 'Banane', price: '2.000 DT', image: '/images/banane.jpg' },
];

const SortiePage: React.FC = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isAjouterArticleModalOpen, setIsAjouterArticleModalOpen] = useState(false);


  const handleReturnClick = () => {
    router.push(`/boutique`);
  };

  const addToCart = (id: number) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(item => item.id === id);
      if (itemExists) {
        return prevCartItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const article = articles.find(article => article.id === id);
        if (article) {
          return [...prevCartItems, { ...article, quantity: 1 }];
        }
      }
      return prevCartItems;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const handleAjouterArticleClick = () => {
    setIsAjouterArticleModalOpen(true);
  };
  
  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <Button variant="ghost" onClick={handleReturnClick} className="text-xs flex items-center mb-9">
            <HiOutlineArrowSmLeft className="w-6 h-6 mr-2" />
            Boutique
          </Button>
          <h1 className="text-2xl font-medium text-foreground">Sortie</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">
          <Button
            variant="default"
            className="flex items-center"
            onClick={handleAjouterArticleClick}
          >
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Ajouter un article
          </Button>
        </div>
      </header>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-card p-4 rounded-[12px] shadow-custom-lg flex-1 self-start">
          <h2 className="text-lg font-medium mb-4">Tous les articles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {articles.map((article) => (
              <div key={article.id} className="relative p-2 bg-card border border-gray-200 rounded-[12px] shadow-sm flex flex-col items-center text-center hover:border-primary">
                <Image src={article.image} alt={article.name} width={300} height={300} className="w-full h-32 object-cover rounded-lg" />
                <div className="flex items-center justify-between mb-2 mt-2 w-full">
                  <h3 className="text-sm font-medium text-foreground">{article.name}</h3>
                  <p className="text-sm text-primary">{article.price}</p>
                </div>
                <Button variant="default" size="sm" className="mt-auto w-full flex justify-between items-center" onClick={() => addToCart(article.id)}>
                  <FiMinusCircle className="w-5 h-5" />
                  Ajouter
                  <HiOutlinePlusCircle className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card p-4 rounded-[12px] shadow-custom-lg w-full lg:w-80 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-lg font-medium mb-4">Panier</h2>
            <Label className="block mb-2">Utilisateurs</Label>
            <div className="relative mb-4">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Select className="w-full pl-10">
                <option value="">Entrer l&apos;utilisateur</option>
                <option value="user1">User1</option>
                <option value="user2">User2</option>
              </Select>
            </div>
            <Label className="block mb-2">Carte</Label>
            <div className="relative mb-4">
              <BiCreditCardFront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input type="text" placeholder="Entrer le numéro de la carte" className="w-full pl-10" />
            </div>
            <ul className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="p-2 m-0" onClick={() => removeFromCart(item.id)}>
                      <FiX className="text-muted-foreground" />
                    </Button>
                    <Image src={item.image} alt={item.name} width={40} height={40} className="w-10 h-10 object-cover rounded" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-primary">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="p-2 m-0" onClick={() => decreaseQuantity(item.id)}>
                        <FiMinusCircle className="text-primary" />
                      </Button>
                      <p className="w-6 text-center text-sm text-primary">{item.quantity}</p>
                      <Button variant="ghost" size="icon" className="p-2 m-0" onClick={() => increaseQuantity(item.id)}>
                        <FiPlusCircle className="text-primary" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium text-foreground text-base">Total</p>
              <p className="font-medium text-foreground text-sm text-primary ml-4">25.000 DT</p>
            </div>
            <Button variant="default" className="w-full flex justify-center items-center">
              <FiShoppingCart className="w-6 h-6 mr-2" />
              Passer la commande
            </Button>
          </div>
        </div>
      </div>
      <AjouterArticleModal
        isOpen={isAjouterArticleModalOpen}
        onClose={() => setIsAjouterArticleModalOpen(false)}
      />
    </div>
  );
  };
  
  export default SortiePage;
  