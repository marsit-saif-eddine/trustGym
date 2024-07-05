import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const achatData = [
    { date: '27-09-2023', salle: 'Lac', produit: 'Eau minérale', quantite: 2, prix: 3.000, total: 6.000, etat: 'Non payé' },
    { date: '26-09-2023', salle: 'Centre ville', produit: 'Jus frais', quantite: 1, prix: 9.000, total: 9.000, etat: 'Payé' },
    { date: '25-09-2023', salle: 'Gammarth', produit: 'Protéine', quantite: 4, prix: 15.000, total: 60.000, etat: 'Payé' },
];

const AchatTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const achatsPerPage = 3;
    const indexOfLastAchat = currentPage * achatsPerPage;
    const indexOfFirstAchat = indexOfLastAchat - achatsPerPage;
    const currentAchats = achatData.slice(indexOfFirstAchat, indexOfLastAchat);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleSwitchChange = (index: number, checked: boolean) => {
        const updatedAchats = [...achatData];
        updatedAchats[index].etat = checked ? 'Payé' : 'Non payé';
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[hsl(var(--primary))]">Total d'achat</CardTitle>
                        <CardDescription>75 DT</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[hsl(var(--destructive))]">Achats non payé</CardTitle>
                        <CardDescription>6 DT</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            
            <div className="bg-card rounded-lg shadow">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Salle</TableHeaderCell>
                            <TableHeaderCell>Produit</TableHeaderCell>
                            <TableHeaderCell>Quantité</TableHeaderCell>
                            <TableHeaderCell>Prix unitaire</TableHeaderCell>
                            <TableHeaderCell>Total</TableHeaderCell>
                            <TableHeaderCell>Etat</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentAchats.map((achat, index) => (
                            <TableRow key={index}>
                                <TableCell>{achat.date}</TableCell>
                                <TableCell>{achat.salle}</TableCell>
                                <TableCell>{achat.produit}</TableCell>
                                <TableCell>{achat.quantite}</TableCell>
                                <TableCell>{achat.prix.toFixed(3)}</TableCell>
                                <TableCell>{achat.total.toFixed(3)}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={achat.etat === 'Payé'}
                                        onChange={(e) => handleSwitchChange(index, e.target.checked)}
                                        className="w-full"
                                        checkedText="Payé"
                                        uncheckedText="Non payé"
                                    />
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
                        {Array.from({ length: Math.ceil(achatData.length / achatsPerPage) }, (_, i) => i + 1).map(number => (
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
                        disabled={currentPage === Math.ceil(achatData.length / achatsPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(achatData.length / achatsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AchatTable;
