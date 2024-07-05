import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SoldeForm from './SoldeForm';
import { Modal, ModalProps } from '@/components/ui/Modal';


export const AddSoldeModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter solde" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <SoldeForm methods={methods} />
    </Modal>
  );
};

export const EditSoldeModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier solde" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <SoldeForm methods={methods} />
    </Modal>
  );
};

export const DeleteSoldeModal: React.FC<ModalProps> = (props) => (
  <Modal title="Êtes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props}>
  </Modal>
);
