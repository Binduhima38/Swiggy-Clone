
import { RESIMG_URL } from "../utils/constants";
const ResCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
      } = resData;
    return (       
            <div className="w-40 h-80 m-1 p-1 border bg-gray-100 hover:bg-gray-200">
                <img className="w-40 h-40" src={RESIMG_URL + cloudinaryImageId} alt="Indian food" />
                <h4 className="font-bold break-words">{name}</h4>
                <p className="break-words">{cuisines.join(", ")}</p>
                <p>{avgRating} stars</p>
            </div>
    )
};

export const restaurantWithLabel = (ResCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <ResCard {...props}/>
            </div>
        );
    };
};

export default ResCard;