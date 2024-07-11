import React from 'react';

import MemberForm from './MemberForm';
import { useForm } from 'react-hook-form';
import RegisterAccessForm from './RegisterAccessForm';
import { Modal, ModalProps } from '@/components/ui/Modal';

interface EditFamilyModalProps extends ModalProps {
  defaultValue: string;
}

export const AddFamilyModal: React.FC<ModalProps> = (props) => (
  <Modal title="Ajouter une nouvelle famille" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Confirmer" modalClassName="max-w-md" {...props}>
    <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Entrez le nom ici" />
  </Modal>
);

export const EditFamilyModal: React.FC<EditFamilyModalProps> = ({ defaultValue, ...props }) => (
  <Modal title="Modifier famille" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Confirmer" modalClassName="max-w-md" {...props}>
    <input type="text" className="w-full p-2 border border-gray-300 rounded" defaultValue={defaultValue} />
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
