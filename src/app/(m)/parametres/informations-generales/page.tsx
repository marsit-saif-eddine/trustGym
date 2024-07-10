"use client";
import React, { useState } from 'react';
import ParametresForm from '../components/ParametresForm';
import { useForm } from 'react-hook-form';
import { HiOutlinePencil, HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const ParametresPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const methods = useForm<any>();

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-foreground">Informations générales</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">

        <Button variant="default" onClick={() => setIsFormOpen(true)} className="flex items-center">
          <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
          Ajouter une salle
        </Button>
        <Button variant="default"  className="flex items-center text-[hsl(var(--primary))] bg-primary/10">
            <HiOutlinePencil className="w-4 h-4" />
        </Button>
        </div>

      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <ParametresForm methods={methods} />
      </div>
    </div>
  );
};

export default ParametresPage;
