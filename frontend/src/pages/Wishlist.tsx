import ProductCard from "../components/ProductCard.tsx";

const Wishlist = () => {

    return (
        <section className='px-6 md:px-24'>
            <h2 className='text-2xl font-bold mt-8'>Wishlist</h2>
            <div className='flex flex-wrap my-8'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

export default Wishlist;
