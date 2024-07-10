import React, { useRef, useState } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { HiOutlinePlusCircle, HiOutlinePencil, HiOutlineTrash, HiOutlineUpload } from 'react-icons/hi';
import { FiImage } from 'react-icons/fi';

interface InvoiceFormProps {
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  handleAddItem: () => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ methods, onSubmit, onCancel, handleAddItem }) => {
  const [companyLogo, setCompanyLogo] = useState<string | null>(null);
  const [companySignature, setCompanySignature] = useState<string | null>(null);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const signatureInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent, setImage: React.Dispatch<React.SetStateAction<string | null>>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<string | null>>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Mon entreprise</h2>
            <FormField
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="California Gym" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="companyLogo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <div
                      {...field}
                      className="mb-4 p-4 border border-dashed border-gray-300 rounded-md flex justify-center items-center cursor-pointer"
                      onDrop={(e) => handleDrop(e, setCompanyLogo)}
                      onDragOver={handleDragOver}
                      onClick={() => logoInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setCompanyLogo)}
                        ref={logoInputRef}
                        className="hidden"
                      />
                      {companyLogo ? (
                        <img src={companyLogo} alt="Company Logo" className="max-h-32" />
                      ) : (
                        <div className="text-center">
                          <FiImage className="mx-auto h-12 w-12 text-muted-foreground" />
                          <p className="text-muted-foreground mt-2">Drag & drop or click to upload</p>
                          <p className="text-xs text-muted-foreground">File Types: JPG and PNG. Size: 720px or above and a minimum of 1080px</p>
                        </div>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="companySignature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tampon et signature</FormLabel>
                  <FormControl>
                    <div
                      {...field}
                      className="mb-4 p-4 border border-dashed border-gray-300 rounded-md flex justify-center items-center cursor-pointer"
                      onDrop={(e) => handleDrop(e, setCompanySignature)}
                      onDragOver={handleDragOver}
                      onClick={() => signatureInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setCompanySignature)}
                        ref={signatureInputRef}
                        className="hidden"
                      />
                      {companySignature ? (
                        <img src={companySignature} alt="Company Signature" className="max-h-32" />
                      ) : (
                        <div className="text-center">
                          <FiImage className="mx-auto h-12 w-12 text-muted-foreground" />
                          <p className="text-muted-foreground mt-2">Drag & drop or click to upload</p>
                          <p className="text-xs text-muted-foreground">File Types: JPG and PNG. Size: 720px or above and a minimum of 1080px</p>
                        </div>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <h2 className="text-lg font-medium mb-4 mt-4">Information supplémentaires</h2>
            <FormField
              name="companyTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taxe</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="19%" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="companyStamp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timbre</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="1 DT" />
                  </FormControl>
                </FormItem>
              )}
            />
            <h2 className="text-lg font-medium mb-4 mt-4">Contact</h2>
            <FormField
              name="companyEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="contact@california-gym.com" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="companyAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="California Gym Lac" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="companyPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="+216 78 967 890" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4">Client</h2>
            <FormField
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Ben foulen" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="clientTaxId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matricule fiscale</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="012345" />
                  </FormControl>
                </FormItem>
              )}
            />
            <h2 className="text-lg font-medium mb-4 mt-4">Information supplémentaires</h2>
            <FormField
              name="invoiceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de facture</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="TG-2023/0001" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="invoiceDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date échéance</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="clientEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="contact@california-gym.com" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="clientAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="California Gym Lac" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="clientPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="+216 78 967 890" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <h2 className="text-lg font-medium mb-4">Les montants</h2>
        <div className="bg-card rounded-lg shadow mb-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Référence</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Quantité</TableHeaderCell>
                <TableHeaderCell>Montant</TableHeaderCell>
                <TableHeaderCell>Total TTC</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {methods.watch("invoiceItems").map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{item.reference}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.quantity * item.amount}</TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="ghost" className="text-primary p-2 m-0">
                      <HiOutlinePencil />
                    </Button>
                    <Button variant="ghost" className="text-destructive p-2 m-0">
                      <HiOutlineTrash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Button variant="default" className="flex items-center w-full md:w-auto mt-4 md:mt-0" onClick={handleAddItem}>
  <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
  Ajouter une ligne
</Button>
<div className="w-full border-t border-gray-300 mt-4"></div>

        <div className="flex justify-start mt-6">

  <div className="flex flex-col text-right space-y-2">
    <div className="flex justify-between w-full ">
      <p className="text-primary">Taxes</p>
      <p className="text-lg font-medium text-destructive ml-20">4,750 DT</p>
    </div>
    <div className="flex justify-between w-full">
      <p className="text-primary">Total</p>
      <p className="text-lg font-medium text-destructive ml-20">99,750 DT</p>
    </div>
  </div>
</div>




<div className="flex flex-col md:flex-row justify-end mt-6 space-y-4 md:space-y-0 md:space-x-4">
  <Button variant="outline" type="button" onClick={onCancel} className="w-full md:w-auto">Annuler</Button>
  <Button variant="default" type="submit" className="w-full md:w-auto">Enregistrer</Button>
</div>
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
