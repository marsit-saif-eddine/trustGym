import React from 'react';
import { FormProvider, UseFormReturn, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';

interface AbonnementFormProps {
  methods: UseFormReturn<any>;
}

const AbonnementForm: React.FC<AbonnementFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <h3 className="text-lg font-medium">Informations générales</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField name="nomComplet" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Nom complet</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
        <FormField name="typeAbonnement" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Type d'abonnement</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
        <FormField name="convention" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Convention</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
      </div>

      <h3 className="text-lg font-medium">Informations sur l'abonnement</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField name="dateDebut" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Date début</FormLabel>
            <FormControl>
              <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
        <FormField name="dateFin" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Date fin</FormLabel>
            <FormControl>
              <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
        <FormField name="salle" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Salle</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )} />
      </div>

      <h3 className="text-lg font-medium">Payments</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField name="typePaiement" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Type paiement</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )} />
        <FormField name="banque" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Banque</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )} />
        <FormField name="numCheque" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Num du chèque</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
        <FormField name="montantTotale" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Montant totale</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )} />
        <FormField name="etat" control={methods.control} render={({ field }) => (
          <FormItem className="">
            <FormLabel>Etat</FormLabel>
            <FormControl>
              <Switch
                {...field}
                className="w-full p-2 "
                checkedText="Payé"
                uncheckedText="Non payé"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              /> 
            </FormControl>
          </FormItem>
        )} />
      </div>
    </form>
  </FormProvider>
);

export default AbonnementForm;
