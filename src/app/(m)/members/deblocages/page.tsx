"use client";
import React, { useState } from 'react';
import { HiOutlineFilter, HiReply } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form';
import { useForm, SubmitHandler } from "react-hook-form";
import { BlockSubscriberModal, UnblockSubscriberModal } from './Modals';
import userImage from "@/../public/images/profile-icon-png.png";
import Image from 'next/image';

type FilterFormInputs = {
  abonne: string;
  salle: string;
  typeAbonnement: string;
  etat: string;
};

const deblocageData = [
  { id: '0', abonne: 'Nom et prénom', salle: 'Lac', typeAbonnement: 'Zumba', etat: 'Bloqué' },
  { id: '1', abonne: 'Nom et prénom', salle: 'Centre ville', typeAbonnement: '3 mois', etat: 'Actif' },
  { id: '2', abonne: 'Nom et prénom', salle: 'Gammarth', typeAbonnement: '2 mois', etat: 'Actif' },
];

const GestionDesDeblocages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterVisible, setFilterVisible] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isUnblockModalOpen, setIsUnblockModalOpen] = useState(false);
  const [selectedAbonne, setSelectedAbonne] = useState(null);

  const abonnementsPerPage = 3;
  const indexOfLastAbonnement = currentPage * abonnementsPerPage;
  const indexOfFirstAbonnement = indexOfLastAbonnement - abonnementsPerPage;
  const currentAbonnements = deblocageData.slice(indexOfFirstAbonnement, indexOfLastAbonnement);

  const methods = useForm<FilterFormInputs>({
    defaultValues: {
      abonne: '',
      salle: '',
      typeAbonnement: '',
      etat: '',
    }
  });

  const onSubmit: SubmitHandler<FilterFormInputs> = data => {
    console.log(data);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSwitchChange = (abonne: any, isActive: boolean) => {
    setSelectedAbonne(abonne);
    if (isActive) {
      setIsUnblockModalOpen(true);
    } else {
      setIsBlockModalOpen(true);
    }
  };

  const confirmBlockUnblock = () => {
    // Handle the block/unblock logic here
    setIsBlockModalOpen(false);
    setIsUnblockModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-medium text-foreground">Déblocage</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Nbr d'abonnés actif</CardTitle>
            <CardDescription>42</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Nbr d'abonnés bloqué</CardTitle>
            <CardDescription>4</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            className="flex items-center text-default border border-gray-300 rounded-md"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <BiFilter className="mr-2" />
            Filtre
            <FiChevronDown className="ml-2" />
          </Button>
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
        {filterVisible && (
          <div className="bg-[hsl(var(--primary-foreground))] p-4 rounded-[12px] border mb-6">
            <Form {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <FormField name="abonne" control={methods.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Abonné</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )} />
                  <FormField name="salle" control={methods.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Salle</FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <option value="">Toutes nos salles</option>
                          <option value="Lac">Lac</option>
                          <option value="Centre ville">Centre ville</option>
                          <option value="Gammarth">Gammarth</option>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                  <FormField name="typeAbonnement" control={methods.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type d'abonnement</FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <option value="">Tous</option>
                          <option value="Zumba">Zumba</option>
                          <option value="3 mois">3 mois</option>
                          <option value="2 mois">2 mois</option>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                  <FormField name="etat" control={methods.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Etat</FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <option value="">Tous</option>
                          <option value="Actif">Actif</option>
                          <option value="Bloqué">Bloqué</option>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} />
                </div>
                <div className="flex justify-end space-x-2 mb-4">
                  <Button variant="default" onClick={() => setFilterVisible(false)} className="flex items-center text-[hsl(var(--primary))] bg-primary/10">Annuler</Button>
                  <Button type="submit" variant="default">Enregistrer</Button>
                </div>
              </form>
            </Form>
          </div>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Abonné</TableHeaderCell>
              <TableHeaderCell>Salle</TableHeaderCell>
              <TableHeaderCell>Type d'abonnement</TableHeaderCell>
              <TableHeaderCell>Etat</TableHeaderCell>
              <TableHeaderCell>Détail</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentAbonnements.map((abonnement, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Image src={userImage} alt="User" className="w-9 h-9 rounded-full" />
                    <span>{abonnement.abonne}</span>
                  </div>
                </TableCell>
                <TableCell>{abonnement.salle}</TableCell>
                <TableCell>{abonnement.typeAbonnement}</TableCell>
                <TableCell>
                  <Switch 
                    checked={abonnement.etat === 'Actif'} 
                    uncheckedText="Bloqué" 
                    checkedText="Actif" 
                    onChange={() => handleSwitchChange(abonnement, abonnement.etat !== 'Actif')} 
                  />
                </TableCell>
                <TableCell className="text-center align-middle">
                  <HiReply className="w-6 h-6 text-[hsl(var(--primary))] cursor-pointer transform scale-x-[-1]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
            {Array.from({ length: Math.ceil(deblocageData.length / abonnementsPerPage) }, (_, i) => i + 1).map(number => (
              <Button
                key={number}
                onClick={() => paginate(number)}
                variant={currentPage === number ? "default" : "ghost"}
                className={`rounded-[6px] px-3 py-1 ${currentPage === number ? 'bg-primary text-primary-foreground' : ''}`}
              >
                {number}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(deblocageData.length / abonnementsPerPage)}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === Math.ceil(deblocageData.length / abonnementsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      <BlockSubscriberModal
        isOpen={isBlockModalOpen}
        onClose={() => setIsBlockModalOpen(false)}
        onDelete={confirmBlockUnblock}
      />
      <UnblockSubscriberModal
        isOpen={isUnblockModalOpen}
        onClose={() => setIsUnblockModalOpen(false)}
        onConfirm={confirmBlockUnblock}
      />
    </div>
  );
};

export default GestionDesDeblocages;
