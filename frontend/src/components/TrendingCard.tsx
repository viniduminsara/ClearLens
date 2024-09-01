import {Link} from "react-router-dom";

interface TrendingCardProps {
    data: Product;
}

const TrendingCard = ({ data }: TrendingCardProps) => {

    return (
        <Link to={`/product/${data.name.toLowerCase().replace(/\s+/g, '-')}&${data._id}`} className="card w-full lg:w-72 bg-base-100 m-4 shadow-xl">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className="card-title">{data.name}</h2>
                        <h5 className='text-sm text-gray-600'>{data.category}</h5>
                    </div>
                    <h4>Rs. {data.newPrice}</h4>
                </div>
            </div>
            <div
                className='flex items-center justify-center p-8 xs:p-5 sm:p-10 xs:w-1/2 w-full sm:w-full'>
                <figure>
                    <img
                        src={data.image}
                        className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                        alt="Shoes"/>
                </figure>
            </div>
        </Link>
    )
}

export default TrendingCard;
