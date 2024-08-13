import PriceCard from "./PriceCard.tsx";

interface CartTotalCardProps {
    cart: Product[] | undefined;
    total: number;
}

const CartTotalCard = ({ cart, total }: CartTotalCardProps) => {

    return (
        <section className='md:col-span-1 py-7 px-7 rounded-md shadow-sm flex flex-col gap-6 w-full h-min'>
            <h1 className='text-xl'>Price Details</h1>
            { cart?.map((item, index) => (
                <PriceCard key={index} data={item} />
            ))}

            <div className='flex justify-between items-center'>
                <div className='text-2xl'>Total</div>
                <div className='text-2xl'>Rs. {total}</div>
            </div>

            <div className='w-full py-2 flex gap-4 items-center'>
                <div className='btn btn-primary'>Proceed to Checkout</div>
            </div>
        </section>
    )
}

export default CartTotalCard;
