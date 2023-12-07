'use client';
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react"
import Header from '../../components/header';
import Image from 'next/image';
import { Model } from "../../components/3dModel";
import { AnimatePresence, motion } from 'framer-motion';


export default function ProjectDetails({ searchParams }: {
    searchParams: {
        name: string,
        image: string,
        codeSource: string,
        description: string,
        image2: string,
        image3: string,
        model: string,
    }
}) {

    console.log(searchParams.image2);


    return (
        <>
            <main>
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition = {{duration: 2}}
                    exit={{ opacity: 0 }}
                   >

                    <Header/>
                    {searchParams.image && (
                    <section className='w-auto lg:grid-cols-2 m-10 grid gap-10 sm:grid-cols-1'>
                        {searchParams.image && (
                            <div id='project' className='!bg-black relative'>
                                <div className='w-auto'>
                                    <Image alt={searchParams.name + 'artwork'} src={searchParams.image} width={600} height={600} />
                                </div>
                            </div>
                        )}
                        <div id='project' className='!bg-opacity-50'>
                            <p className='p-10 text-justify'>{searchParams.description}</p>
                        </div>
                        <div id='project' className='!bg-opacity-50'>
                            <p className='p-10 text-justify'>{searchParams.description}</p>
                        </div>

                        {searchParams.image2 && (
                            <div id='project' className='!bg-black relative'>
                                <div className='w-auto'>
                                    <Image alt={searchParams.name + 'artwork'} src={searchParams.image2} width={600} height={600} />
                                </div>
                            </div>
                        )}

                        {searchParams.image3 && (
                            <div id='project' className='!bg-black relative'>
                                <div className='w-auto'>
                                    <Image alt={searchParams.name + 'artwork'} src={searchParams.image3} width={600} height={600} />
                                </div>
                            </div>
                        )}

                        {searchParams.model && (
                            <div id='project' className='!bg-black relative'>
                                <div className='w-auto'>
                                    <Model />
                                </div>
                            </div>
                        )}
                    </section>
                )}

                {searchParams.codeSource && (
                    <section className= 'lg:grid-cols-1 m-10 w-full grid gap-10 sm:grid-cols-1'>
                        {searchParams.codeSource && (
                            <div id='project' className='relative'>
                                <div className='bg-white w-full h-full'>
                                    <iframe src={searchParams.codeSource} className='scale-[40%] ' style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                                </div>
                            </div>
                        )}
                    </section>
                )}

                    </motion.div>
                </AnimatePresence>
                <Header />


                











            </main>
        </>
    )
}
