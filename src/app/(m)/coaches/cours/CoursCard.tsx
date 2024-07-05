import React from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface CoursCardProps {
  image: string;
  name: string;
}

const CoursCard: React.FC<CoursCardProps> = ({ image, name }) => {
  return (
    <div className="relative p-2 bg-card border border-[hsl(var(--border))] rounded-[12px] shadow-custom-card items-center space-x-4 hover:border-[hsl(var(--primary))] cursor-pointer">
      <Image src={image} alt={name} width={300} height={300} className="w-full h-32 object-cover rounded-lg" />
      <div className="mt-4 mb-2 flex justify-between items-center">
        <p className="text-base font-medium">{name}</p>
        <div className="flex space-x-2">
          <Button variant="destructive" size="icon" className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full">
            <HiOutlineTrash className="text-[hsl(var(--destructive))] w-4 h-4" />
          </Button>
          <Button variant="default" size="icon" className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full">
            <HiOutlinePencil className="text-[hsl(var(--primary))] w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursCard;
