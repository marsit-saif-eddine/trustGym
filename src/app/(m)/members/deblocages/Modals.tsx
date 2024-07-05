import React from 'react';
import { Modal, ModalProps } from '@/components/ui/Modal';




export const UnblockSubscriberModal: React.FC<ModalProps> = (props) => (
  <Modal title="Êtes-vous sûr(e) de vouloir débloquer cet abonné ?" description="Cette famille va être supprimée définitivement" confirmText="Débloquer" modalClassName="max-w-md" {...props}>
    
  </Modal>
);

export const BlockSubscriberModal: React.FC<ModalProps> = (props) => (
  <Modal title="Êtes-vous sûr(e) de vouloir bloquer cet abonné ?" description="Cette famille va être supprimée définitivement" deleteText="Bloquer" modalClassName="max-w-md" {...props}>
    
  </Modal>
);