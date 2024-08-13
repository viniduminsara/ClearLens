import CartTotalCard from "../components/cart/CartTotalCard.tsx";
import CartItemCard from "../components/cart/CartItemCard.tsx";
import {useApp} from "../context/AppContext.tsx";

const Cart = () => {
    const {user, cartTotal} = useApp();

    return (
        <div className='px-6 md:px-24'>
            <h2 className='text-2xl font-bold my-6'>Cart ({user?.cart.length})</h2>
            <div className='md:grid md:grid-cols-3 gap-5 my-8'>
                <div className='md:col-span-2'>
                    {user?.cart.map((product, index) => (
                        <CartItemCard key={index} data={product}/>
                    ))}
                </div>
                <CartTotalCard cart={user?.cart} total={cartTotal}/>
            </div>
        </div>
    )
}

export default Cart;
