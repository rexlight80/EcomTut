import Stripe from "stripe"

export type CarouselProps = {
    products: Stripe.Product[]
}

export type ProductslistProps = {
    products: Stripe.Product[]
   
}

export type ProductCardProps = {
    product : Stripe.Product
}

export type ProductDetailPageProps = {
     params: Promise<{
        id: string
    }>
}

 export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string | null;
    quantity: number;
}

export type CartStore = {
    items: CartItem[];
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void;
    clearCart: () => void;
}