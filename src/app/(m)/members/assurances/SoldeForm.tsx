import React from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Modal, ModalProps } from '@/components/ui/Modal';
import { Button } from '@/components/ui/button';

interface SoldeFormProps {
  methods: UseFormReturn<any>;
}

const SoldeForm: React.FC<SoldeFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <FormField
        name="abonne"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Abonné</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="montant"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Montant</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="dateEcheance"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date échéance</FormLabel>
            <FormControl>
              <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="etat"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Etat</FormLabel>
            <FormControl>
              <Switch {...field} uncheckedText="Non payé" checkedText="Payé" />
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  </FormProvider>
);

export default SoldeForm;