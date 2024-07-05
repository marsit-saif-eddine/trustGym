import React, { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { HiOutlineArrowSmLeft, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Abonnement, Payment } from '../../../types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { AddPaymentModal, ConfirmPaymentModal, EditPaymentModal } from './Modals';

interface AbonnementDetailsProps {
  abonnement: Abonnement;
  onBack: () => void;
}

const AbonnementDetails: React.FC<AbonnementDetailsProps> = ({ abonnement, onBack }) => {
  const methods = useForm({
    defaultValues: abonnement,
  });
  const [payments, setPayments] = useState<Payment[]>(abonnement.payments);
  const [isDialogAddPaymentOpen, setIsDialogAddPaymentOpen] = useState(false);
  const [isDialogEditPaymentOpen, setIsDialogEditPaymentOpen] = useState(false);
  const [isDialogConfirmPaymentOpen, setIsDialogConfirmPaymentOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState<Payment | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paymentsPerPage = 3;
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = payments.slice(indexOfFirstPayment, indexOfLastPayment);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleConfirmPayment = (payment: Payment) => {
    setCurrentPayment(payment);
    setIsDialogConfirmPaymentOpen(true);
  };

  const handleSwitchChange = (payment: Payment, checked: boolean) => {
    if (checked) {
      handleConfirmPayment(payment);
    } else {
      updatePaymentStatus(payment.id, 'Non payé');
    }
  };

  const updatePaymentStatus = (paymentId: number, status: string) => {
    setPayments(payments.map(payment =>
      payment.id === paymentId ? { ...payment, status } : payment
    ));
  };

  return (
    <div className="p-6 -mt-4">
      <Button variant="ghost" onClick={onBack} className="text-xs flex items-center mb-9">
        <HiOutlineArrowSmLeft className="w-6 h-6 mr-2" />
        Historique des abonnements
      </Button>
      <FormProvider {...methods}>
        <form className="space-y-4">
          <h3 className="text-lg font-medium">Informations générales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField name="type" control={methods.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Type d'abonnement</FormLabel>
                <FormControl>
                  <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" disabled />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="convention" control={methods.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Convention</FormLabel>
                <FormControl>
                  <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" disabled />
                </FormControl>
              </FormItem>
            )} />
          </div>

          <h3 className="text-lg font-medium">Informations sur l'abonnement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField name="startDate" control={methods.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Date début</FormLabel>
                <FormControl>
                  <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" disabled />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="endDate" control={methods.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Date fin</FormLabel>
                <FormControl>
                  <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" disabled />
                </FormControl>
              </FormItem>
            )} />
            <FormField name="salle" control={methods.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Salle</FormLabel>
                <FormControl>
                  <Select {...field} className="w-full p-2 border border-gray-300 rounded" disabled>
                    <option value="Aucune">Aucune</option>
                  </Select>
                </FormControl>
              </FormItem>
            )} />
          </div>
        </form>
      </FormProvider>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Payements</h3>
        <Button onClick={() => setIsDialogAddPaymentOpen(true)} className="mb-4">Ajouter échéance</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-[hsl(var(--primary))]">Montant total</CardTitle>
            <CardDescription>{abonnement.totalAmount} DT</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-[hsl(var(--destructive))]">Échéance</CardTitle>
            <CardDescription>{abonnement.remainingAmount} DT</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-[hsl(var(--primary))]">Reste à payer</CardTitle>
            <CardDescription>{abonnement.remainingAmount} DT</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="bg-card rounded-lg shadow mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Montant</TableHeaderCell>
              <TableHeaderCell>Type de paiement</TableHeaderCell>
              <TableHeaderCell>Numéro de chèque</TableHeaderCell>
              <TableHeaderCell>Banque</TableHeaderCell>
              <TableHeaderCell>Date échéance</TableHeaderCell>
              <TableHeaderCell>État</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPayments.map((payment: Payment, index: number) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.paymentType}</TableCell>
                <TableCell>{payment.checkNumber || 'Aucune'}</TableCell>
                <TableCell>{payment.bank}</TableCell>
                <TableCell>{payment.dueDate}</TableCell>
                <TableCell>
                  <Controller
                    name={`payments.${index}.status`}
                    control={methods.control}
                    render={({ field }) => (
                      <Switch
                        className="w-full"
                        checkedText="Payé"
                        uncheckedText="Non payé"
                        checked={field.value === 'Payé'}
                        onChange={(e) => handleSwitchChange(payment, e.target.checked)}
                      />
                    )}
                  />
                </TableCell>
                <TableCell className="flex">
                  <Button onClick={() => setIsDialogEditPaymentOpen(true)} variant="ghost" className="flex items-center text-[hsl(var(--primary))] p-2 m-0">
                    <HiOutlinePencil />
                  </Button>
                  <Button variant="ghost" className="flex items-center text-[hsl(var(--destructive))] p-2 m-0">
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
            {Array.from({ length: Math.ceil(payments.length / paymentsPerPage) }, (_, i) => i + 1).map(number => (
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
            disabled={currentPage === Math.ceil(payments.length / paymentsPerPage)}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === Math.ceil(payments.length / paymentsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      <AddPaymentModal isOpen={isDialogAddPaymentOpen} onClose={() => setIsDialogAddPaymentOpen(false)} />
      <EditPaymentModal isOpen={isDialogEditPaymentOpen} onClose={() => setIsDialogEditPaymentOpen(false)} />
      {currentPayment && (
        <ConfirmPaymentModal
          isOpen={isDialogConfirmPaymentOpen}
          onClose={() => setIsDialogConfirmPaymentOpen(false)}
          onConfirm={() => {
            updatePaymentStatus(currentPayment.id, 'Payé');
            setIsDialogConfirmPaymentOpen(false);
          }}
          paymentDetails={currentPayment}
        />
      )}
    </div>
  );
};

export default AbonnementDetails;
