import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';


interface PlageHoraireFormProps {
  methods: UseFormReturn<any>;
}

const PlageHoraireForm: React.FC<PlageHoraireFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <FormField
        name="titre"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Titre</FormLabel>
            <FormControl>
              <Input {...field} type="text" placeholder="Foulen fouleni" />
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  </FormProvider>
);

export default PlageHoraireForm;