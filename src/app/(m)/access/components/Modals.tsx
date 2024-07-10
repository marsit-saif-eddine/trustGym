import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import PlageHoraireForm from './PlageHoraireForm';
import EnregistrerAccesForm from './EnregistrerAccesForm';




export const EnregistrerPlageHoraireModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Enregistrer plage horaire" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <PlageHoraireForm methods={methods} />
    </Modal>
  );
};


export const EnregistrerAccesModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Enregistrer accès" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <EnregistrerAccesForm methods={methods} />
    </Modal>
  );
};