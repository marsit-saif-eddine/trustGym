import Image from "next/image";
import bg from "@/../public/images/bg-admin.png";
import logo from "@/../public/images/trustgym-logo.png";
import { Card } from "@/components/ui/card";
import FormSection from "./form.section";
const LoginSection = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Image
        src={bg}
        alt='bg'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='z-0'
      />
      <Card className='z-10 max-w-1/3 flex flex-col justify-center items-center h-full md:h-fit md:w-fit p-10'>
        <Image
          src={logo}
          alt='logo'
          objectPosition='center'
          objectFit='cover'
          className='w-44'
        />
        <div className='py-3 flex justify-center items-left flex-col gap-2'>
          <h2 className='text-xl font-medium '>Bienvenue sur votre espace</h2>
          <p className='text-sm text-gray-500'>
            Connectez-vous pour accéder à votre espace personnel
          </p>
        </div>
        <FormSection />
      </Card>
    </div>
  );
};

export default LoginSection;
