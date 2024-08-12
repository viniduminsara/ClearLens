interface Product {
    _id: string;
    qty: number;
    name: string;
    description: string;
    brand: string;
    category: string;
    gender: string;
    weight: string;
    quantity: number;
    image: string;
    rating: number;
    price: number;
    newPrice: number;
    trending: boolean;
    __v: number;
}


interface UserObject {
    _id: string;
    username: string;
    email: string;
    cart: Product[];
    wishlist: Product[];
}
