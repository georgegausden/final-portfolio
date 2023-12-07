import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import ProjectDetails from '../projects/[projectId]/page';
import { motion } from "framer-motion"

export default function Projects({params}:{
    params:{name:string, image:string, codeSource:string, description:string, image2:string, image3:string, model:string}
}){

    console.log(params.codeSource);
    return(
        <>
            {params.image && (
            <motion.div id='project' className='relative'
            initial={{ opacity: 0, scale: 1 }}
            
            transition={{ duration: 1 }}
            
            whileInView={{ opacity: 1 }}
            
            viewport={{ once: true }}
            
            >
              <Link href={{
                 pathname: './projects/'+params.name,
                 query:{
                    name: params.name,
                    image: params.image,
                    codeSource: params.codeSource,
                    description: params.description,
                    image2: params.image2,
                    image3: params.image3,
                    model: params.model
                 }
              }}>
                
                  <div>
                    <Image alt = {params.name + 'artwork'} src={params.image} layout="fill" objectFit="cover"/>
                  </div>
                  {/* <div id ="projectName">
                    <p>{params.name}</p>
                  </div> */}
                
                </Link>
            </motion.div>
            )}

            {params.codeSource && (
                <div id='project' className='relative'>
                    <Link href={{
                        pathname: './projects/'+params.name,
                        query:{
                            name: params.name,
                            image: params.image,
                            codeSource: params.codeSource,
                            description: params.description
                        }
                    }}>
                        <div className='bg-white w-full h-full'>
                            <div id = "blurchecker" className='h-full rounded-md w-full'>
                                <iframe src={params.codeSource}></iframe>
                            </div>
                            {/* <div id ="projectName">
                                <p className='text-black'>{params.name}</p>
                            </div> */}
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}
