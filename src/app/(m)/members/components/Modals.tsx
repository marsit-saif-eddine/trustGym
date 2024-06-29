import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';

import MemberForm from './MemberForm';
import { useForm } from 'react-hook-form';
import RegisterAccessForm from './RegisterAccessForm';

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

export const AddFamilyModal: React.FC<ModalProps> = (props) => (
  <Modal title="Ajouter une nouvelle famille" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Confirmer" modalClassName="max-w-md" {...props}>
    <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Entrez le nom ici" />
  </Modal>
);

export const EditFamilyModal: React.FC<ModalProps> = (props) => (
  <Modal title="Modifier famille" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Confirmer" modalClassName="max-w-md" {...props}>
    <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue="Ben Foulen" />
  </Modal>
);

export const DeleteFamilyModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);

export const DeleteMemberModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ce membre ?" description="Ce membre va être supprimé définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);

export const AddMemberModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter un nouveau membre" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Ajouter" modalClassName="max-w-4xl mt-9 mb-9" {...props}>
      <MemberForm methods={methods} />
    </Modal>
  );
};

export const EditMemberModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier profile membre" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Ajouter" modalClassName="max-w-4xl mt-9 mb-9" {...props}>
      <MemberForm methods={methods} />
    </Modal>
  );
};

export const RegisterAccessModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Enregistrer accès" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <RegisterAccessForm methods={methods} />
    </Modal>
  );
};
