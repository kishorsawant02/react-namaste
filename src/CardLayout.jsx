import { Link } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import useOnlineStatus from "./customHooks/useOnlineStatus";

const CardLayout = () => {
  const [onlineStatus, updateOnlineStatus] = useOnlineStatus();
  const [restaurantList, setRestaurantList] = useState(null);
  useEffect(() => {
    //call getch api
    getRestaurantList();
    return () => {};
  }, []);

  const getRestaurantList = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      console.log("" + data);
      setRestaurantList(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <>
    // {restaurantList === null ? <Shimmer/>:
    // restaurantList.map((restaurant) => <Card key={restaurant.id} />)}
    // </>
    <div className="cards">
      {onlineStatus ? <h1>Online</h1> : <h1>Offline</h1>}
      <Link to="/restaurant/1231">
        <Card />
      </Link>
      <Link to="/restaurant/45456">
        <Card />
      </Link>
      <Link to="/restaurant/7687" key="v6ez">
        <Card />
      </Link>
      <Link to="/restaurant/987978">
        <Card />
      </Link>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default CardLayout;
