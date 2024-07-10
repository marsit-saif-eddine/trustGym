"use client";

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import InvoiceForm from './InvoiceForm'; 
import { Button } from '@/components/ui/button';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const CreateInvoicePage: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      invoiceItems: [
        { reference: '4567', description: 'Lorem ipsum dolor sit amet', quantity: 1, amount: 25 },
        { reference: '3457', description: 'Lorem ipsum dolor sit amet', quantity: 2, amount: 25 },
      ],
    },
  });

  const handleAddItem = () => {
    methods.setValue("invoiceItems", [...methods.getValues("invoiceItems"), { reference: '', description: '', quantity: 1, amount: 0 }]);
  };

  const handleSubmit = (data: any) => {
    console.log("Invoice data:", data);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-medium text-foreground">Crée une facture</h1>
        <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
      </header>
      <div className="bg-card p-6 rounded-[12px] shadow-custom-lg">
        <FormProvider {...methods}>
          <InvoiceForm
            methods={methods}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            handleAddItem={handleAddItem}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateInvoicePage;