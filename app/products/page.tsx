import ProductList from "@/components/productslist";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage (){
      const products = await stripe.products.list({
        expand: ["data.default_price"]
      });
      

    return(
        <div className="flex flex-col gap-2 py-8">
         <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
            All Products
        </h1>
          <ProductList products={products.data}/>
        </div>
    )
}