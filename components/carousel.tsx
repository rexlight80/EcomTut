"use client"
import { Card, CardContent, CardTitle } from "./ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"
import type {CarouselProps} from "@/types"
import Stripe from "stripe"


export default function Carousel ({products}: CarouselProps) {
    const [current, setCurrent] = useState<number>(0);
    
    useEffect(() => {
     const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % products.length)
        }, 3000)

     return () => clearInterval(interval);

    }, [products.length]);

    const currentProduct = products[current];
    const price = currentProduct.default_price as Stripe.Price

     return(
         <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
           {
            currentProduct.images && currentProduct.images[0] && (
             <div className="relative h-72 w-full">
                <Image 
                   alt={currentProduct.name} 
                   src={currentProduct.images[0]} 
                   layout="fill" 
                   objectFit="cover"
                   className="transition-opacity duration-500 ease-in-out w-full"
                />
             </div>
            )}
            <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <CardTitle className="text-3xl font-bold text-white mb-2">
                    {currentProduct.name}
                </CardTitle>
                {price  
                &&
                <p className="text-xl text-black bg-white rounded-full py-1 px-2  border border-black">SAR {price && price.unit_amount && (price.unit_amount / 100).toFixed(2)}</p>
                }
            </CardContent>
         </Card>
     )
}