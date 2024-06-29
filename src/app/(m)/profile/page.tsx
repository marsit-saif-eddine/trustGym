"use client";
import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import { useForm } from 'react-hook-form';
import { HiOutlinePencil } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { ProfileEditModal } from './components/Modals';

const ProfileDetailsPage: React.FC = () => {
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false); 
  const methods = useForm<any>();

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 mt-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-medium">Mon profile</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">
          <Button variant="default" onClick={() => setIsProfileFormOpen(true)} className="flex items-center">
            <HiOutlinePencil className="w-6 h-6 mr-2" />
            Modifier mon profile
          </Button>
        </div>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <ProfileForm methods={methods} />
      </div>
      <ProfileEditModal isOpen={isProfileFormOpen} onClose={() => setIsProfileFormOpen(false)} />
    </div>
  );
};

export default ProfileDetailsPage;
