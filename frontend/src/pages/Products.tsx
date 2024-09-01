import ProductCard from "../components/ProductCard.tsx";
import {useEffect, useState} from "react";
import {useToast} from "../context/ToastContext.tsx";
import {productsService} from "../api/apiServices.ts";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {showToast} = useToast();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await productsService();
                if (response.ok){
                    const data = await response.json();
                    setProducts(data);
                }

            } catch (error) {
                if (error.response) {
                    showToast({type: 'error', message: error.response.data.message});
                }
            }
        }
        getProducts();
    }, []);

    return (
        <div className='px-6 md:px-24 pt-28'>
            <img
                src='/products_banner.jpg'
                alt='bannerImg'
                className='rounded-2xl h-full min-h-[10rem] object-cover'
            />
            <section>
                <h2 className='text-3xl mt-8'>Glasses for you!</h2>
                <div className='flex flex-wrap justify-center my-8'>
                    {products.map((product, index) => (
                        <ProductCard key={index} data={product}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Products;
