import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
    //console.log(listOfRestaurants);
    useEffect(() => { fetchData(); }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5868397&lng=73.68599499999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        //console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle);
        //console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    };
    const {loggedInUser,setUserName} =useContext(UserContext);
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="px-4 py-1 bg-green-50 m-4 rounded-lg" onClick={() => {
                        //console.log(searchText);
                        const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}
                    >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-red-50 m-4"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.0
                            );
                            setFilteredRestaurant(filteredList);

                        }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>userName : </label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map((restaurent =>
                        <Link
                            key={restaurent.info.id}

                            to={"/restaurent/" + restaurent.info.id}>
                            {restaurent.info.sla.lastMileTravel <= 10.0 ? (
                                <RestaurentCardPromoted resData={restaurent.info} />
                            ) : (
                                <RestaurentCard resData={restaurent.info} />

                            )}

                        </Link>
                    ))}
            </div>
        </div>
    );
};
export default Body;