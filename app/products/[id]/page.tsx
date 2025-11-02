import ProductDetail from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import type {ProductDetailPageProps} from "@/types/index"

export default async  function ProductDetailPage ({params}:ProductDetailPageProps) {
  const { id } = await params;
    const product = await stripe.products.retrieve(id, {
        expand: ["default_price"]
    })

     const plainProduct = JSON.parse(JSON.stringify(product));

    return <ProductDetail product={plainProduct}/>
}