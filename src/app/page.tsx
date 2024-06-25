import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen  flex-col items-center justify-between p-24'>
      <ModeToggle />
      <h1 className='text-4xl font-bold text-center text-card-foreground'>
        Welcome
      </h1>
      <p className='text-lg text-center '>
        This is a Next.js starter with Tailwind CSS and TypeScript.
      </p>

      <Button className='mt-8' variant={"default"}>
        Default
      </Button>
      <Button className='mt-8' variant={"secondary"}>
        Secondary
      </Button>
      <Button className='mt-8' variant={"outline"}>
        Outline
      </Button>
      <Button className='mt-8' variant={"annulation"}>
        Annulation
      </Button>
      <Button className='mt-8' variant={"ghost"}>
        Ghost
      </Button>
      <Button className='mt-8' variant={"link"}>
        Link
      </Button>
    </main>
  );
}
