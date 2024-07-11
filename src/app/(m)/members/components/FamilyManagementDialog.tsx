import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineTrash, HiOutlinePencil, HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { AddFamilyModal, EditFamilyModal, DeleteFamilyModal, DeleteMemberModal } from './Modals';

interface FamilyManagementDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const FamilyManagementDialog: React.FC<FamilyManagementDialogProps> = ({ isOpen, onClose }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentFamily, setCurrentFamily] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  
  const handleClickOutside = (event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const families = ['Ben Foulenn', 'Ben Foulen', 'Ben Foulen', 'Ben Foulen'];

  const handleAddFamily = () => {
    setAddModalOpen(true);
  };

  const handleEditFamily = (family: string) => {
    setCurrentFamily(family);
    setEditModalOpen(true);
  };

  const handleDeleteFamily = (family: string) => {
    setCurrentFamily(family);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-card rounded-lg p-6 w-full max-w-lg">
          <div className="flex justify-end items-center mb-4">
            <button onClick={onClose} className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-medium">Gestion familles</h2>
            <Button variant="default" size="default" className="flex items-center bg-blue-600 text-white" onClick={handleAddFamily}>
              <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
              Ajouter famille
            </Button>
          </div>
          <div className="overflow-hidden rounded-[10px] border border-gray-300">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 px-4 text-left font-medium text-[hsl(var(--primary))] w-1/2">Famille</th>
                  <th className="py-2 px-4 text-left font-medium text-[hsl(var(--primary))] w-1/2">Action</th>
                </tr>
              </thead>
              <tbody>
                {families.map((family, index) => (
                  <tr key={index} className="border-b border-gray-300 last:border-none">
                    <td className="py-2 px-4">{family}</td>
                    <td className="py-2 px-4 flex space-x-2">
                      <Button variant="default" size="default" className="flex items-center text-[hsl(var(--primary))] bg-primary/10" onClick={() => handleEditFamily(family)}>
                        <HiOutlinePencil className="w-4 h-4 mr-1" />
                        Modifier
                      </Button>
                      <Button variant="destructive" size="default" className="flex items-center bg-destructive/10 text-[hsl(var(--destructive))]" onClick={() => handleDeleteFamily(family)}>
                        <HiOutlineTrash className="w-4 h-4 mr-1" />
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddFamilyModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onConfirm={() => {
          setAddModalOpen(false);
        }}
      />

      <EditFamilyModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onConfirm={() => {
          setEditModalOpen(false);
        }}
        defaultValue={currentFamily || ''}
      />

      <DeleteFamilyModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={() => {
          setDeleteModalOpen(false);
        }}
      />
    </>
  );
};

export default FamilyManagementDialog;
