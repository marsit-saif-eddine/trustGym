"use client";

import React, { useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { Label } from '@/components/ui/label';
import { AjouterArticleModal } from '../components/Modals';

interface Article {
  id: number;
  name: string;
  price: string;
  image: string;
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

const ArticlesPage: React.FC = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [isAjouterArticleModalOpen, setIsAjouterArticleModalOpen] = useState(false);

  const router = useRouter();

  const handleReturnClick = () => {
    router.push(`/boutique`);
  };


  const handleAddArticleClick = () => {
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
          <h1 className="text-2xl font-medium text-foreground">Liste des articles</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <Button variant="default" className="flex items-center" onClick={handleAddArticleClick}>
          <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
          Ajouter un article
        </Button>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg">
          <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
  <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-4 sm:mb-0 gap-2 sm:gap-4">
    <Button
      variant="outline"
      className="flex items-center text-default border border-gray-300 rounded-md"
      onClick={() => setFilterVisible(!filterVisible)}
    >
      <BiFilter className="mr-2" />
      Filtre
      <FiChevronDown className="ml-2" />
    </Button>
    
  </div>
  <div className="relative w-full sm:w-1/2 lg:w-1/3 mt-4 sm:mt-0">
    <Input
      type="text"
      placeholder="Recherche"
      className="pl-10"
    />
    <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
</div>

            {filterVisible && (
              <div className="bg-[hsl(var(--primary-foreground))] p-4 rounded-[12px] border mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">Etat</Label>
                    <Select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      <option>Payé</option>
                      <option>Non payé</option>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {articles.map((article) => (
                <div key={article.id} className="relative p-2 bg-card border border-gray-200 rounded-md shadow-sm flex flex-col items-center text-center hover:border-primary">
                  <Image src={article.image} alt={article.name} width={300} height={300} className="w-full h-32 object-cover rounded-lg" />
                  <div className="flex items-center justify-between mb-2 mt-2 w-full">
                    <h3 className="text-sm font-medium text-foreground">{article.name}</h3>
                    <p className="text-sm text-primary">{article.price}</p>
                  </div>
                </div>
              ))}
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

export default ArticlesPage;
