import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import ProfileEditForm from './ProfileEditForm';
import { useForm } from 'react-hook-form';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onDelete?: () => void;
  children?: React.ReactNode;
  title?: string;
  confirmText?: string;
  deleteText?: string;
  onConfirm?: () => void;
  description?: string;
  modalClassName?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  confirmText = 'Confirmer',
  deleteText = 'Supprimer',
  onConfirm,
  onDelete,
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
        <CardHeader>
          <CardTitle className="text-2xl font-medium">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground" >{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button onClick={onClose} variant="default" className="flex items-center text-[hsl(var(--primary))] bg-primary/10">
            Annuler
          </Button>
          {onConfirm && <Button onClick={onConfirm} variant="default">{confirmText}</Button>}
          {onDelete && <Button onClick={onDelete} variant="destructive">{deleteText}</Button>}
        </CardFooter>
      </Card>
    </div>
  );
};

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
