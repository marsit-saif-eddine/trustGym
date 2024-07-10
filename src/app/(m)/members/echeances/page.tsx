"use client";
import React, { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { FiChevronDown } from 'react-icons/fi';
import { BiFilter } from 'react-icons/bi';
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from '@/components/ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DeleteEcheanceModal, EditEcheanceModal } from './Modals';

type FilterFormInputs = {
    salle: string;
    convention: string;
    dateDebut: string;
    typeAbonnement: string;
    nomAbonne: string;
    dateFin: string;
};

const echeanceData = [
    { id: '0', abonne: 'John Doe', montant: 25000, dateEcheance: '2023-07-25', etatPaiement: 'Non payé', etatAbonnement: 'Bloqué' },
    { id: '1', abonne: 'Jane Smith', montant: 6000, dateEcheance: '2023-05-10', etatPaiement: 'Payé', etatAbonnement: 'Actif' },
];

const GestionDesEcheances: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isActif, setIsActif] = useState(true);
    const [isPaid, setIsPaid] = useState(true);
    const [isEcheanceEditFormOpen, setIsEcheanceEditFormOpen] = useState(false);
    const [isEcheanceDeleteFormOpen, setIsEcheanceDeleteFormOpen] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const echeancesPerPage = 3;
    const indexOfLastEcheance = currentPage * echeancesPerPage;
    const indexOfFirstEcheance = indexOfLastEcheance - echeancesPerPage;
    const currentEcheances = echeanceData.slice(indexOfFirstEcheance, indexOfLastEcheance);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const methods = useForm<FilterFormInputs>({
        defaultValues: {
            salle: '',
            convention: '',
            dateDebut: '',
            typeAbonnement: '',
            nomAbonne: '',
            dateFin: '',
        }
    });

    const onSubmit: SubmitHandler<FilterFormInputs> = data => {
        console.log(data);
    };


    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-medium text-foreground">Gestion des échéances</h1>
                    <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
                </div>
            </div>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">Montant total</CardTitle>
                        <CardDescription>5670 DT</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-custom-orange">Échéance</CardTitle>
                        <CardDescription>670 DT</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-destructive">Reste à payer</CardTitle>
                        <CardDescription>545 DT</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
  <Button 
    variant="outline" 
    className="flex items-center text-default border border-gray-300 rounded-md"
    onClick={() => setFilterVisible(!filterVisible)}
  >
    <BiFilter className="mr-2" />
    Filtre
    <FiChevronDown className="ml-2" />
  </Button>
  <div className="relative w-full md:w-1/3">
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
                                    <FormField name="convention" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Convention</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Normale</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="Standard">Standard</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="dateDebut" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date début</FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="typeAbonnement" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Type d'abonnement</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Type</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="Standard">Standard</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="nomAbonne" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nom d'abonné</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Nom</option>
                                                    <option value="John Doe">John Doe</option>
                                                    <option value="Jane Smith">Jane Smith</option>
                                                    <option value="Bob Johnson">Bob Johnson</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="dateFin" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date fin</FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                </div>
                                <div className="flex justify-end space-x-2 mb-4">
                                    <Button variant="default" className="flex items-center text-[hsl(var(--primary))] bg-primary/10">Annuler</Button>
                                    <Button type="submit" variant="default" >Enregistrer</Button>
                                </div>
                            </form>
                        </Form>
                    </div>

                )}
                
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Abonné</TableHeaderCell>
                            <TableHeaderCell>Montant</TableHeaderCell>
                            <TableHeaderCell>Date échéance</TableHeaderCell>
                            <TableHeaderCell>Etat paiement</TableHeaderCell>
                            <TableHeaderCell>Etat abonnement</TableHeaderCell>
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentEcheances.map((echeance, index) => (
                            <TableRow key={index}>
                                <TableCell>{echeance.abonne}</TableCell>
                                <TableCell>{echeance.montant}</TableCell>
                                <TableCell>{echeance.dateEcheance}</TableCell>
                                <TableCell>
                                    <Switch
                                        checkedText="Payé"
                                        uncheckedText="Non payé"
                                        checked={isPaid}
                                        onChange={() => setIsPaid(!isPaid)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Switch
                                        checkedText="Actif"
                                        uncheckedText="Bloqué"
                                        checked={isActif}
                                        onChange={() => setIsActif(!isActif)}
                                    />
                                </TableCell>
                                <TableCell className="flex">
                                    <Button  variant="ghost" onClick={() => setIsEcheanceEditFormOpen(true)} className="flex items-center text-[hsl(var(--primary))] p-2 m-0">
                                        <HiOutlinePencil />
                                    </Button>
                                    <Button variant="ghost"  onClick={() => setIsEcheanceDeleteFormOpen(true)} className="flex items-center text-[hsl(var(--destructive))] p-2 m-0">
                                        <HiOutlineTrash />
                                    </Button>
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
                        {Array.from({ length: Math.ceil(echeanceData.length / echeancesPerPage) }, (_, i) => i + 1).map(number => (
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
                        disabled={currentPage === Math.ceil(echeanceData.length / echeancesPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(echeanceData.length / echeancesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            <EditEcheanceModal isOpen={isEcheanceEditFormOpen} onClose={() => setIsEcheanceEditFormOpen(false)} />
            <DeleteEcheanceModal isOpen={isEcheanceDeleteFormOpen} onClose={() => setIsEcheanceDeleteFormOpen(false)} />

        </div>
    );
};

export default GestionDesEcheances;
