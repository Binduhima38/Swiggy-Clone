import { useEffect, useState } from "react"
import ResCard, { restaurantWithLabel } from "./ResCard"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"

const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([])
    const [searchText, setsearchText] = useState("")
    const Restaurantavailablility = restaurantWithLabel(ResCard);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3856088&lng=78.4863827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        console.log(response);
        const json = await response.json();
        console.log(json);
        setrestaurantList(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurant(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="m-2 border border-black">
            <div className="filter">
                <input type="text"
                    className="p-2 m-2 border border-black rounded-full"
                    value={searchText}
                    onChange={(e) => {
                        setsearchText(e.target.value)
                    }}>
                </input>
                <button className="p-2 m-2 text-slate-600 border-slate-300 rounded-full bg-slate-400/25 hover:bg-slate-400/40" onClick={() => {
                    const searchlist = restaurantList.filter(
                        searchRestaurant => searchRestaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setfilteredRestaurant(searchlist)
                }}>
                    search
                </button>
                <button className="p-2 m-2 text-slate-600 border border-slate-300 rounded bg-slate-400/25 hover:bg-slate-400/40" onClick={() => {
                    const filteredList = restaurantList.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setfilteredRestaurant(filteredList);
                }}>
                    Top rated Restraunt
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                    >
                        {restaurant?.info.isOpen ? (
                            <Restaurantavailablility resData={restaurant?.info} />
                        ) : (
                            <ResCard resData={restaurant?.info} />
                        )}
                    </Link>
                ))}
            </div>

        </div>
    )
};
export default Body;