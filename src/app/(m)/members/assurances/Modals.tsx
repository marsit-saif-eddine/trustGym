import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import SoldeForm from './SoldeForm';




export const EditSoldeModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier frais annuel" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <SoldeForm methods={methods} />
    </Modal>
  );
};

export const DeleteSoldeModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);