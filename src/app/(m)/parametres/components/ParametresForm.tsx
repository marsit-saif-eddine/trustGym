import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';
import { HiOutlinePencil } from 'react-icons/hi';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import PasswordInput from '@/components/ui/PasswordInput';
import { BiCoin } from 'react-icons/bi';
import { Label } from '@/components/ui/label';

interface ParametresFormProps {
  methods: UseFormReturn<any>;
}

const ParametresForm: React.FC<ParametresFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/4 flex flex-col items-center space-y-4">
          <h3 className="text-lg font-medium">Logo de la salle</h3>
          <div className="relative w-24 h-24">
            <Image src="/images/profile-icon-png.png" alt="Logo" className="rounded-full" width={96} height={96} />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
              <HiOutlinePencil />
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-medium">California Gym</h2>
            <p className="text-sm text-muted-foreground">Admin</p>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div>
            <h3 className="text-lg font-medium">Informations générales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <FormField
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="taxRegistrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax registration number</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ville</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="tva"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>TVA</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="stamp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timbre</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numéro de téléphone</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Siteweb</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Trust Gym</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <FormField
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heure de début</FormLabel>
                    <FormControl>
                      <Input {...field} type="time" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heure de fin</FormLabel>
                    <FormControl>
                      <Input {...field} type="time" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="accessIp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Access IP</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="gymRoom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salle</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-4">
            <Label className="block text-sm font-medium text-gray-700">Annual fees</Label>
            <button
              className={`mt-2 flex items-center px-3 py-2 rounded-md text-sm font-medium ${methods.watch('annualFees') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}
              onClick={() => methods.setValue('annualFees', !methods.watch('annualFees'))}
              type="button"
            >
              <BiCoin className="mr-2" />
              {methods.watch('annualFees') ? 'Activated annual fees' : 'Activer annual fees'}
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium">Mot de passe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <PasswordInput name="oldPassword" label="Ancien mot de passe" />
              <PasswordInput name="newPassword" label="Nouveau mot de passe" />
              <PasswordInput name="confirmNewPassword" label="Récrire nouveau mot de passe" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </FormProvider>
);

export default ParametresForm;
