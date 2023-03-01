import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCard } from "../../redux/cartSlice";
import ChangeQuanttity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    
    return(
    <div>
        <img src={`./${dish.img}.jpeg`} alt="food"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuanttity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCard({dish, quantity}))}}>ADD TO CARD</button>
    </div>)
}
export default Dish;