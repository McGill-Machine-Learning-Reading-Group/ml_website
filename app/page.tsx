'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from "react"
import { useRandomReveal } from 'react-random-reveal'
import Link from 'next/link';
import {Button} from "@nextui-org/react"
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiMailLine } from "react-icons/ri";
import { RiDiscordFill } from "react-icons/ri";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <div className='flex flex-col items-center justify-center w-full h-screen bg-stone-900 text-center'>
          <h1 className="font-bold text-white text-5xl">
            McGill Machine Learning Reading Group
          </h1>
          <p className="text-lg text-white m-5">
            Weekly meetings to discuss recent research papers in machine learning.
          </p>
        
          <Link href="https://discord.gg/cgWxx94WTg" rel="noopener noreferrer" target="_blank">
          <Button color="primary" variant="shadow" className="flex items-center">
            <RiDiscordFill className="text-2xl" /> 
            <h5 className="text-bold">Join our Discord</h5>
          </Button>
</Link>

      </div>

        <div className='flex flex-col items-center mt-5 mb-5'>

          <div className='flex flex-col items-left justify-left w-1/2'>

          <div className='mt-10 mb-5'>
            <h2 className="flex font-bold text-3xl">
              <HiOutlineInformationCircle className="mr-2 text-green-500"/>
              About
            </h2> 
            <p className="text-lg mt-4">
              The McGill Machine Learning Reading Group is a student-run reading group for machine learning at McGill University. 
            </p>
            <p className="text-lg mt-2">
              We meet weekly to discuss recent research papers in machine learning, and to learn about the latest developments in the field. 
              We welcome students from all backgrounds and levels of experience.
            </p>
          </div>

            <div className='mt-10 mb-5'>
              <h2 className="flex font-bold text-3xl">
                <RiTeamLine className="mr-2 text-violet-500"/>
                Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-lg mt-4">
                <p className="col-span-1">Tommy</p>
                <p className="col-span-1">Elian</p>
                <p className="col-span-1">Edmund</p>
                <p className="col-span-1">Elliot</p>
                <p className="col-span-1">Roko</p>
                <p className="col-span-1">Gabrielle</p>
                <p className="col-span-1">Tianyi</p>
                <p className="col-span-1">Louis</p>
                <p className="col-span-1">Anthony</p>
                <p className="col-span-1">Santosh</p>
              </div>


            </div>

            <div className='mt-10 mb-5'>
            <h2 className="flex font-bold text-3xl">
              <RiMailLine className="mr-2 text-orange-500"/>
              Contact
            </h2> 
            <p className="text-lg mt-4">
            We're a small, bootstrapped, student-run organization. 
            If you'd like to get involved, please &#8239;
            <Link href="https://discord.gg/cgWxx94WTg" target="_blank" className='text-blue-500 underline'>join our Discord</Link> and stay tuned for updates.
            </p>
          </div>
            
          </div>
        </div>

    </main>
  )
}