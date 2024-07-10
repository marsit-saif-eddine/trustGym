'use client';

import React, { useState } from 'react';
import { ScheduleXCalendar, useNextCalendarApp } from '@schedule-x/react'
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/index.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import './calendar.css'
import { AddSeanceModal } from '../components/Modals'; 

function CalendarApp() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 

  const calendar = useNextCalendarApp({
    locale: 'fr-FR',
    defaultView: viewWeek.name,
    views: [viewDay, viewWeek],
    events: [
      {
        id: '2',
        title: 'Cours de boxe',
        start: '2023-12-16',
        end: '2023-12-16',
      },
      {
        id: '3',
        people: ['Coach Rim Alani'],
        title: 'Cours de boxe',
        start: '2023-12-16 15:00',
        end: '2023-12-16 16:30',
      },
    ],
  });

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-medium text-foreground">Planning</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <Button variant="default" className="bg-primary text-white flex items-center" onClick={() => setIsAddModalOpen(true)}>
          <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
          Ajouter séance
        </Button>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2"></div>
          <div className="relative w-full md:w-1/3 mt-4 md:mt-0">
            <Input
              type="text"
              placeholder="Recherche"
              className="pl-10"
            />
            <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>

      <AddSeanceModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
}

export default CalendarApp;
