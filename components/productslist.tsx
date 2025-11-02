"use client"
import type {ProductslistProps} from "@/types"
import ProductCard from "./productcard"
import { useState } from "react";
 
export default function ProductsList ({products}: ProductslistProps) {
      const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });
    return(
        <div>
            <div className="mb-6 flex justify-center">
                <input 
                  type="text" 
                  className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Search Products..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    filteredProduct.map((product) => {
                        return(
                            <li key={product.id}>
                             <ProductCard  product={product}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}