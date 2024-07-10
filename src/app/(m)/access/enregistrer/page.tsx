"use client";
import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlineArrowSmRight } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScheduleXCalendar, useNextCalendarApp } from '@schedule-x/react';
import { viewWeek } from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/index.css';
import './calendar.css';
import {EnregistrerPlageHoraireModal} from '../components/Modals';
import { useRouter } from 'next/navigation';

const HoraireAccess: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleHoraireClick = () => {
    router.push(`/access/horaire`);
  };
  const calendar = useNextCalendarApp({
    locale: 'fr-FR',
    defaultView: viewWeek.name,
    views: [viewWeek],
    events: [
      { id: '1', title: 'Cours de boxe', day: 'Lundi', start: '05:00', end: '06:00' },
      { id: '2', title: 'Cours de boxe', day: 'Tuesday', start: '05:00', end: '06:00' },
      { id: '3', title: 'Cours de boxe', day: 'Wednesday', start: '05:00', end: '06:00' },
      { id: '4', title: 'Cours de boxe', day: 'Thursday', start: '05:00', end: '06:00' },
      { id: '5', title: 'Cours de boxe', day: 'Friday', start: '05:00', end: '06:00' },
      { id: '6', title: 'Cours de boxe', day: 'Saturday', start: '05:00', end: '06:00' },
      { id: '7', title: 'Cours de boxe', day: 'Sunday', start: '05:00', end: '06:00' },
    ],
  });

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-foreground">Enregistrer horaire d’accès</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="default" onClick={handleHoraireClick} className="flex items-center">
            Consulter les horaires
            <HiOutlineArrowSmRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
  <div className="relative w-full md:w-1/3">
    <Input type="text" placeholder="Recherche" className="pl-10" />
    <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <Button variant="default" className="bg-primary text-white" onClick={() => setModalOpen(true)}>
    Enregistrer cette plage
  </Button>
</div>

        <ScheduleXCalendar calendarApp={calendar} />
      </div>
      {modalOpen && <EnregistrerPlageHoraireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default HoraireAccess;
