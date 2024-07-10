"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CoursCard from './CoursCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { AddCoursModal, EditCoursModal, DeleteCoursModal } from '../components/Modals';

const coursData = [
  { id: '1', name: 'Boxing', image: '/images/lappart-fitness-salle-de-sport-cours-de-gym-senior.png' },
  { id: '2', name: 'Danse', image: '/images/salle-de-sport-cours-collectifs.jpg' },
  { id: '3', name: 'Zumba', image: '/images/lappart-fitness-salle-de-sport-cours-de-gym-senior.png' },
  { id: '4', name: 'Nom cours', image: '/images/salle-de-sport-cours-collectifs.jpg' },
  { id: '5', name: 'Nom cours', image: '/images/lappart-fitness-salle-de-sport-cours-de-gym-senior.png' },
  { id: '6', name: 'Nom cours', image: '/images/salle-de-sport-cours-collectifs.jpg' },
];

const GestionDesCours: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = coursData.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleAddCourse = () => setShowAddModal(true);
  const handleEditCourse = (course: any) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };
  const handleDeleteCourse = (course: any) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
  <div>
    <h1 className="text-2xl font-medium text-foreground">Gestion des cours</h1>
    <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
  </div>
  <Button onClick={handleAddCourse} variant="default" className="flex items-center">
    <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
    Ajouter un cours
  </Button>
</header>

      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="relative w-full mb-6">
          <Input type="text" placeholder="Recherche" className="pl-10 w-full md:w-1/3" />
          <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {currentCourses.map((course) => (
            <CoursCard key={course.id} image={course.image} name={course.name} onEdit={() => handleEditCourse(course)} onDelete={() => handleDeleteCourse(course)} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <FaArrowLeft className="mr-2" />
            Précédent
          </Button>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            {Array.from({ length: Math.ceil(coursData.length / coursesPerPage) }, (_, i) => i + 1).map((number) => (
              <Button
                key={number}
                onClick={() => paginate(number)}
                variant={currentPage === number ? 'default' : 'ghost'}
                className={`rounded-[6px] px-3 py-1 ${currentPage === number ? 'bg-primary text-primary-foreground' : ''}`}
              >
                {number}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(coursData.length / coursesPerPage)}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === Math.ceil(coursData.length / coursesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      {showAddModal && <AddCoursModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />}
      {showEditModal && (
        <EditCoursModal isOpen={showEditModal} onClose={() => setShowEditModal(false)} initialImage={selectedCourse?.image} />
      )}
      {showDeleteModal && <DeleteCoursModal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} />}
    </div>
  );
};

export default GestionDesCours;
