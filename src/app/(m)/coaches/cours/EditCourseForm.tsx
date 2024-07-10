import React from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface EditCoursFormProps {
  methods: UseFormReturn<any>;
  initialImage: string;
}

const EditCoursForm: React.FC<EditCoursFormProps> = ({ methods, initialImage }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <FormField
        name="titre"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Titre du cours</FormLabel>
            <FormControl>
              <Input {...field} type="text" placeholder="Zumba" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image</FormLabel>
            <FormControl>
              <div className="mb-4 p-4 rounded-md flex justify-center items-center cursor-pointer">
                <img src={initialImage} alt="Course" className="max-h-48 rounded-md" />
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  </FormProvider>
);

export default EditCoursForm;
