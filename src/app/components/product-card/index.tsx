'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface ProductCardProps {
    id: number;
    name: string;
    price: number;
}


export default function ProductCard({products,}: {products: ProductCardProps[];}) {
    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        setCurrentIndex(currentIndex + 1);
    }

    function handlePrev() {
        const isFirst = currentIndex === 0;
        setCurrentIndex(isFirst ? products.length - 1 :currentIndex - 1);
    }

    const nextDisabled = currentIndex + 5 === products.length;
    const prevDisabled = currentIndex === 0;
    
    return (
        <div className='relative'>
        <div className="flex flex-wrap gap-4 mt-20">
          {products.slice(currentIndex, currentIndex+5).map((product) => (
            <div 
            key={product.id} 
            className="w-[200px] h-[200px] bg-gray-900 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-all"
                onClick={() => router.push(`/productos/${product.id}`)}
                >
                <h2 
                className="text-2xl text-gray-100">
                {product.name}
                </h2>
                <p className="text-green-600 text-xl">${product.price}</p> 
            </div>
            ))}
        </div>
        <button className='text-4xl font font-semibold absolute top-[56%] -right-14 hover:text-gray-600' 
        onClick={()=>handleNext()}
        disabled={nextDisabled}
        >
            {'>'}
        </button>
        <button className='text-4xl font font-semibold absolute top-[56%] -left-14 hover:text-gray-600'
         onClick={()=>handlePrev()}
         disabled={prevDisabled}
         >
            {'<'}
        </button>
        </div>
    );
}
