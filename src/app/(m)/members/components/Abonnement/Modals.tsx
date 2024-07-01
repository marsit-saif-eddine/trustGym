import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import CreateAbonnementForm from './AbonnementForm';
import PaymentForm from './PaymentForm';
import { Payment } from '@/app/(m)/types';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  confirmText?: string;
  onConfirm?: () => void;
  modalClassName?: string;
}
interface ConfirmPaymentModalProps extends ModalProps {
  paymentDetails: Payment;
}
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  confirmText = 'Confirmer',
  onConfirm,
  modalClassName = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <Card className={`w-full max-h-[90vh] overflow-y-auto ${modalClassName}`}>
        <div className="flex justify-end items-center mt-4 mr-4">
          <button onClick={onClose} className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <CardHeader className="-mt-7">
          <CardTitle className="text-2xl font-medium">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button onClick={onClose} variant="default" className="flex items-center text-[hsl(var(--primary))] bg-primary/10">
            Annuler
          </Button>
          {onConfirm && <Button onClick={onConfirm} variant="default">{confirmText}</Button>}
        </CardFooter>
      </Card>
    </div>
  );
};

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