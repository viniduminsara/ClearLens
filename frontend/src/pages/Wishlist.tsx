import ProductCard from "../components/ProductCard.tsx";
import {useApp} from "../context/AppContext.tsx";

const Wishlist = () => {
    const {user} = useApp();

    return (
        <section className='px-6 md:px-24'>
            <h2 className='text-2xl font-bold mt-8'>Wishlist</h2>
            <div className='flex flex-wrap my-8'>
                {user?.wishlist.map((item, index) => (
                    <ProductCard key={index} data={item}/>
                ))}
            </div>
        </section>
    )
}

export default Wishlist;
