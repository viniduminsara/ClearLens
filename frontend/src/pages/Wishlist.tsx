import ProductCard from "../components/ProductCard.tsx";
import {useApp} from "../context/AppContext.tsx";

const Wishlist = () => {
    const {user} = useApp();

    return (
        <section className='px-6 pt-20 md:px-24'>
            {user?.wishlist.length > 0 ?
                <>
                    <h2 className='text-2xl font-bold mt-8'>Wishlist</h2>
                    <div className='flex flex-wrap my-8'>
                        {user?.wishlist.map((item, index) => (
                            <ProductCard key={index} data={item}/>
                        ))}
                    </div>
                </>

                :

                <>
                    <div className='flex justify-center items-center min-h-screen'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='/empty-wishlist.png' className='w-64 h-64 mb-4' alt='cart image'/>
                            <h3 className='text-xl font-bold mb-2'>Nothing to Show!</h3>
                            <p className='font-thin'>Unlock Your Shopping Desires: Fill Your Empty Wishlist</p>
                        </div>
                    </div>
                </>
            }

        </section>
    )
}

export default Wishlist;
