import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import FournisseurForm from './FournisseurForm';



export const AjouterFournisseurModal: React.FC<ModalProps> = (props) => {
    const methods = useForm();
  
    return (
      <Modal title="Ajouter fournisseur" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Ajouter" modalClassName="max-w-md" {...props}>
        <FournisseurForm methods={methods} />
      </Modal>
    );
  };