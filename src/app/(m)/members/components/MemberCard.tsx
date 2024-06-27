import React from 'react';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';

interface MemberCardProps {
  name: string;
  expiration: string | null;
  expired: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, expiration, expired }) => {
  return (
    <div className="p-4 bg-card border border-[hsl(var(--border))] rounded-[12px] shadow-custom-card flex items-center space-x-4 hover:border-[hsl(var(--primary))]">
      <div className="bg-gray-300 w-16 h-16 rounded-full"></div>
      <div className="flex-1">
        <h3 className="text-base font-semibold mb-2">{name}</h3>
        {expiration ? (
          expired ? (
            <p className="text-sm text-red-600 mb-2">Expiré depuis {expiration}</p>
          ) : (
            <div >
              <p className="text-sm text-blue-600 mb-1">Date d’expiration: </p>
              <p className="text-sm text-gray-600 mb-2">Expire dans {expiration}</p>
            </div>

          )
        ) : (
          <button className="text-blue-600 border border-blue-600 rounded-[6px] px-3 py-1 text-sm flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Ajouter abonnement
          </button>
        )}
        <div className="flex space-x-2 mt-4">
          <div className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full">
            <HiOutlineTrash className="text-[hsl(var(--destructive))] w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full">
            <HiOutlinePencil className="text-[hsl(var(--primary))] w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
