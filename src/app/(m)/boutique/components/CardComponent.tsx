"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

interface CardComponentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col border border-[hsl(var(--border))] items-center justify-center p-4 bg-card rounded-[12px] shadow-md hover:bg-primary hover:text-white cursor-pointer group h-60 w-60 m-auto"
    >
      <div className="text-3xl text-primary mb-4 group-hover:text-white ">{icon}</div>
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-sm text-muted-foreground text-center group-hover:text-white">{description}</p>
    </div>
  );
};

export default CardComponent;
