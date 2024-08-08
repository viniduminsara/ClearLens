import ProductCard from "../components/ProductCard.tsx";

const Products = () => {

    return (
        <div className='px-6 md:px-24'>
            <img
                src='/products_banner.jpg'
                alt='bannerImg'
                className='rounded-2xl h-full min-h-[10rem] object-cover my-4'
            />
            <section>
                <h2 className='text-3xl mt-8'>Glasses for you!</h2>
                <div className='flex flex-wrap justify-center my-8'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </section>
        </div>
    )
}

export default Products;
