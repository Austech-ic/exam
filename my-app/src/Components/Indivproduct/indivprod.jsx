import React, {useState,useEffect} from 'react'
import styles from './indivproduct.module.css'
import Image from 'next/image'
import Cup from '../../../public/imgs/cup.jpeg'
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const Indivprod = ({id}) => {
    
    const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch data for the individual product using the provided id
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setProduct(data.product); // Update to use data.product
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  console.log('Product state:', product);

  if (!product) {
    // Handle loading or error state
    return null;
  }
    
    return (
        <div className={styles.main}>
            <div className=' flex flex-col gap-y-4 lg:flex-row gap-x-5' >
                <div className='flex-1'>
                    <Image src={product.thumbnail} alt='pic-img' className='w-[100%] h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[60vh]' />
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <p>Float</p>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <div className='flex items-center gap-2 md:gap-3 lg:gap-2'>
                            <FaStar color='yellow' className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]' />
                            <FaStar color='yellow' className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]' />
                            <FaStar color='yellow' className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]' />
                            <FaStar color='yellow' className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]' />
                            <FaRegStar color='yellow' className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]' />

                        </div>
                        <p>10 reviews</p>
                    </div>
                    <p>$1,139.33</p>
                    <div className='flex items-center gap-2'>
                        <p>Availability  :</p>
                        <p className='text-blue'>In Stock </p>
                    </div>
                    <div className='pt-10 md:pt-40'>
                        <div className={styles.line}></div>
                    </div>
                    <div className='flex items-center gap-4'>
                    <div>
                        <div className='bg-blue rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    <div>
                        <div className='bg-green rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    <div>
                        <div className='bg-orange-400 rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    <div>
                        <div className='bg-black rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    </div>

                    <div className='flex items-center gap-4 pt-10'>
                        <div>
                            <button className='bg-blue text-white py-2 px-2 md:px-4 md:py-4 rounded-lg text-sm md:text-lg lg:text-base'>Select Options</button>
                        </div>

                        <div className='flex items-center gap-2 md:gap-4'>
                            <div className='bg-slate-100 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px] lg:h-[40px] lg:w-[50px] flex items-center justify-center '>
                            <CiHeart className={styles.mobicon} />
                            </div>
                            <div className='bg-slate-100 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px]  lg:h-[40px] lg:w-[40px] flex items-center justify-center '>
                            <FiShoppingCart className={styles.mobicon} />
                            </div>
                            <div className='bg-slate-100 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px]  lg:h-[40px] lg:w-[40px] flex items-center justify-center '>
                            <FaEye className={styles.mobicon}  />
                            </div>

         
          
          
                        </div>
                    </div>



                </div>

            </div>

           
        </div>
    )
}

export default Indivprod