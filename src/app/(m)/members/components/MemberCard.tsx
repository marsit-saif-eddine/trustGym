import React from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineTrash, HiOutlinePencil, HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

interface MemberCardProps {
  id: string;
  name: string;
  expiration: string | null;
  expired: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ id, name, expiration, expired, onEdit, onDelete }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/members/${id}`);
  };

  return (
    <div
      className="p-4 bg-card border border-[hsl(var(--border))] rounded-[12px] shadow-custom-card flex items-center space-x-4 hover:border-[hsl(var(--primary))] cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="bg-gray-300 w-16 h-16 rounded-full"></div>
      <div className="flex-1">
        <h3 className="text-base font-semibold mb-2">{name}</h3>
        {expiration ? (
          expired ? (
            <p className="text-sm text-red-600 mb-2">Expiré depuis {expiration}</p>
          ) : (
            <div>
              <p className="text-sm text-blue-600 mb-1">Date d’expiration: </p>
              <p className="text-sm text-gray-600 mb-2">Expire dans {expiration}</p>
            </div>
          )
        ) : (
          <Button variant="outline" size="sm" className="flex items-center mb-2">
            <HiOutlinePlusCircle className="w-4 h-4 mr-1" />
            Ajouter abonnement
          </Button>
        )}
        <div className="flex space-x-2 mt-4">
          <Button variant="destructive" size="icon" className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full" onClick={(e) => { e.stopPropagation(); onDelete(id); }}>
            <HiOutlineTrash className="text-[hsl(var(--destructive))] w-4 h-4" />
          </Button>
          <Button variant="default" size="icon" className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full" onClick={(e) => { e.stopPropagation(); onEdit(id); }}>
            <HiOutlinePencil className="text-[hsl(var(--primary))] w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
