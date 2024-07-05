import React from 'react';
import ProfileEditForm from './ProfileEditForm';
import { useForm } from 'react-hook-form';
import { Modal, ModalProps } from '@/components/ui/Modal';


export const ProfileEditModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal
      title="Modifier mon profile"
      description="Veuillez saisir les informations ci-dessous pour mettre à jour votre profil"
      confirmText="Enregistrer"
      modalClassName="max-w-4xl mt-9 mb-9"
      {...props}
    >
      <ProfileEditForm methods={methods} />
    </Modal>
  );
};
