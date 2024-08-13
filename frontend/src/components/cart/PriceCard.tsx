interface PriceCardProps{
    data: Product;
}

const PriceCard = ({ data }: PriceCardProps) => {

    return (
        <div className='flex justify-between'>
            <div className='text-gray-600 flex-1'>
                {data.name}
            </div>
            <div className='text-gray-600 text-lg'>
                Rs. {data.newPrice}
            </div>
        </div>
    )
}

export default PriceCard;
