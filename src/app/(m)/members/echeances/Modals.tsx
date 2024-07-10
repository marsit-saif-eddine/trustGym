import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import EcheanceForm from './EcheanceForm';




export const EditEcheanceModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier échéance" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <EcheanceForm methods={methods} />
    </Modal>
  );
};

export const DeleteEcheanceModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);