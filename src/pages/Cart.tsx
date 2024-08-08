import CartTotalCard from "../components/cart/CartTotalCard.tsx";
import CartItemCard from "../components/cart/CartItemCard.tsx";

const Cart = () => {

    return (
        <div className='px-6 md:px-24'>
            <h2 className='text-2xl font-bold my-6'>Cart (2)</h2>
            <div className='md:grid md:grid-cols-3 gap-5'>
                <div className='md:col-span-2'>
                    <CartItemCard/>
                    <CartItemCard/>
                </div>
                <CartTotalCard/>
            </div>
        </div>
    )
}

export default Cart;
