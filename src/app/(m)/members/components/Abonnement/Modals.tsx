import React from 'react';

import { useForm } from 'react-hook-form';
import CreateAbonnementForm from './AbonnementForm';
import PaymentForm from './PaymentForm';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { Payment } from '@/app/(m)/types';

interface ConfirmPaymentModalProps extends ModalProps {
  paymentDetails: Payment;
}

export const CreateAbonnementModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Crée un nouveau abonnement" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Ajouter" modalClassName="max-w-4xl" {...props}>
      <CreateAbonnementForm methods={methods} />
    </Modal>
  );
};

export const AddPaymentModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter paiement" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <PaymentForm methods={methods} />
    </Modal>
  );
};


export const EditPaymentModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier paiement" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <PaymentForm methods={methods} />
    </Modal>
  );
};


export const ConfirmPaymentModal: React.FC<ConfirmPaymentModalProps> = (props) => {
  const { paymentDetails, ...modalProps } = props;
  
  return (
    <Modal
      title="Êtes-vous sûr de valider le paiement?"
      description="Veuillez confirmer les détails du paiement ci-dessous"
      confirmText="Valider"
      modalClassName="max-w-md"
      {...modalProps}
    >
      <div>
        <div className="flex mb-1">
          <span className="font-medium text-[hsl(var(--primary))] text-base">Montant:</span>
          <span className="ml-2 text-base">{paymentDetails.amount}</span>
        </div>
        <div className="flex mb-1">
          <span className="font-medium text-[hsl(var(--primary))] text-base">Type:</span>
          <span className="ml-2 text-base">{paymentDetails.paymentType}</span>
        </div>
        <div className="flex mb-1">
          <span className="font-medium text-[hsl(var(--primary))] text-base">N° chèque:</span>
          <span className="ml-2 text-base">{paymentDetails.checkNumber}</span>
        </div>
        <div className="flex mb-1">
          <span className="font-medium text-[hsl(var(--primary))] text-base">Banque:</span>
          <span className="ml-2 text-base">{paymentDetails.bank}</span>
        </div>
      </div>
    </Modal>
  );
};