"use client";

import React from 'react';
import { HiOutlineSortAscending, HiOutlineTrendingUp, HiOutlineCube, HiOutlineDuplicate, HiOutlineSortDescending, HiOutlineSwitchHorizontal, HiOutlineShoppingCart, HiOutlineClipboardList } from 'react-icons/hi';
import CardComponent from './components/CardComponent';
import { useRouter } from 'next/navigation';

const BoutiquePage: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-medium text-foreground">Boutique</h1>
        <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CardComponent
            title="Entrée"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineSortAscending />}
            onClick={() => handleCardClick('/boutique/entree')}
          />
          <CardComponent
            title="Mouvement de stock"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineTrendingUp />}
            onClick={() => handleCardClick('/boutique/mouvement-de-stock')}
          />
          <CardComponent
            title="Articles"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineCube />}
            onClick={() => handleCardClick('/boutique/articles')}
          />
          <CardComponent
            title="Catégories d'articles"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineDuplicate />}
          />
          <CardComponent
            title="Sortie"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineSortDescending />}
            onClick={() => handleCardClick('/boutique/sortie')}
          />
          <CardComponent
            title="Transfer"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineSwitchHorizontal />}
            onClick={() => handleCardClick('/boutique/transfer')}
          />
          <CardComponent
            title="Vente"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineShoppingCart />}
            onClick={() => handleCardClick('/boutique/vente')}
          />
          <CardComponent
            title="Etat du stock"
            description="Bienvenue dans votre tableau de bord et plus de texte ici !"
            icon={<HiOutlineClipboardList />}
            onClick={() => handleCardClick('/boutique/etat-du-stock')}
          />
        </div>
      </div>
    </div>
  );
};

export default BoutiquePage;
