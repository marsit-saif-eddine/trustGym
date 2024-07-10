import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import AjouterEntreeForm from './AjouterEntreeForm';
import AjouterArticleForm from './AjouterArticleForm';


export const AjouterArticleModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter un article" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Ajouter" modalClassName="max-w-md" {...props}>
      <AjouterArticleForm methods={methods} />
    </Modal>
  );
};

export const AjouterEntreeModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter une entrée" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Ajouter" modalClassName="max-w-md" {...props}>
      <AjouterEntreeForm methods={methods} />
    </Modal>
  );
};