import CartTotalCard from "../components/cart/CartTotalCard.tsx";
import CartItemCard from "../components/cart/CartItemCard.tsx";
import {useApp} from "../context/AppContext.tsx";

const Cart = () => {
    const {user, cartTotal} = useApp();

    return (
        <div className='px-6 pt-20 md:px-24'>
            {user?.cart.length > 0 ?
                <>
                    <h2 className='text-2xl font-bold my-6'>Cart ({user?.cart.length})</h2>
                    <div className='md:grid md:grid-cols-3 gap-5 my-8'>
                        <div className='md:col-span-2'>
                            {user?.cart.map((product, index) => (
                                <CartItemCard key={index} data={product}/>
                            ))}
                        </div>
                        <CartTotalCard cart={user?.cart} total={cartTotal}/>
                    </div>
                </>

                :

                <>
                    <div className='flex justify-center items-center min-h-screen'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='/empty-cart.png' className='w-48 h-48 mb-4' alt='cart image'/>
                            <h3 className='text-xl font-bold mb-2'>Hey, it feels so light!</h3>
                            <p className='font-thin'>There's nothing in your cart. Let's add some products.</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;
