import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import SeanceForm from './SeanceForm';
import CoachForm from './CoachForm';
import AddSeanceForm from './AddSeanceForm';
import ModifySeanceForm from './ModifySeanceForm';
import AddCourseForm from '../cours/AddCourseForm';
import EditCoursForm from '../cours/EditCourseForm';


interface EditCoursModalProps extends ModalProps {
  initialImage: string;
}


export const AddSeanceModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter séances" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <SeanceForm methods={methods} />
    </Modal>
  );
};
export const EditSeanceModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier séances" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <SeanceForm methods={methods} />
    </Modal>
  );
};

export const DeleteSeanceModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);

export const AddCoachModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter un nouveau coach" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-4xl mt-9 mb-9" {...props}>
      <CoachForm methods={methods} />
    </Modal>
  );
};


export const AddSeanceByCoachModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter séances" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <AddSeanceForm methods={methods} />
    </Modal>
  );
};

export const DeleteSeanceByCoachModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);


export const ModifySeanceByCoachModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Modifier séances" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <ModifySeanceForm methods={methods} />
    </Modal>
  );
};

export const AddCoursModal: React.FC<ModalProps> = (props) => {
  const methods = useForm();

  return (
    <Modal title="Ajouter cours" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <AddCourseForm methods={methods} />
    </Modal>
  );
};


export const EditCoursModal: React.FC<EditCoursModalProps> = ({ initialImage, ...props }) => {
  const methods = useForm({
    defaultValues: {
      titre: 'Zumba',
    },
  });

  return (
    <Modal title="Modifier cours" description="Veuillez saisir le nom de la nouvelle famille dans le champ de texte ci-dessous" confirmText="Enregistrer" modalClassName="max-w-md" {...props}>
      <EditCoursForm methods={methods} initialImage={initialImage} />
    </Modal>
  );
};

export const DeleteCoursModal: React.FC<ModalProps> = (props) => (
  <Modal title="Etes-vous sûr(e) de vouloir supprimer ?" description="Cette famille va être supprimée définitivement" confirmText="Supprimer" modalClassName="max-w-md" {...props} />
);