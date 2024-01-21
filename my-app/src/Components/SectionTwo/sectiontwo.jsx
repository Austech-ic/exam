import React from 'react'
import Sect from '../../../public/imgs/sect.jpeg'
import Image from 'next/image'

const Sectiontwo = () => {
    const details = [
        {
            id:1,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:2,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:3,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:4,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:5,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:6,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:7,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:8,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:9,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        },
        {
            id:10,
            pic:Sect,
            title:"Graphic Design",
            label:"English Department",
            price:"$16.48",
            newPrice:"$6.48"
        }
    ]
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-1 lg:gap-1 py-5'>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl text-slate-500 tracking-wide'>Featured Products</p>
        <p className='font-bold text-lg md:text-lg lg:text-xl xl:text-2xl tracking-wide'>BESTSELLER PRODUCTS</p>
        <p className='text-xs md:text-sm lg:text-base xl:text-lg text-slate-500 tracking-wide'>Problems trying to resolve the conflict between </p>
      </div>

      <div className='grid lg:grid-cols-5 gap-4 px-10 pt-1 pb-5 md:px-20 md:pt-2 md:pb-16 lg:px-20 '>
        {details.map((datum) => (
          <div key={datum.id} className='flex flex-col items-center gap-1'>
            <Image src={datum.pic} alt="pic-img" />
            <p className='text-xs md:text-xl lg:text-sm'>{datum.title}</p>
            <p className='text-slate-500 text-xs md:text-xl  lg:text-sm'>{datum.label}</p>
            <div className='flex flex-row items-center gap-2'>
              <p className='text-slate-500 text-xs md:text-xl lg:text-sm'>{datum.price}</p>
              <p className='text-xs md:text-xl lg:text-sm text-green'>{datum.newPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sectiontwo