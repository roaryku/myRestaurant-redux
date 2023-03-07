import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCard } from "../../redux/cartSlice";
import ChangeQuanttity from "../Cart/ChangeQuantity";


/* 2step - show the information from Dishes.js - ({dish = prop from Dishes.js}) 
useState(1) = we going to see #1 on the screen 
consd Dish = ({dish}) =>{
    const [quantity, setQuantity] = useState(1);
    return(<div><img src={`./${dish.img}.jpeg`} alt="food"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p></div>)
    } quantity = we going to use a lot in the future in other components 

/* 3 step - ADD 2 BUTTON AFTER <p></p> first button we going to change later(ALL CODING IN A DIFFERENT COMPONENT), secont button is ADD TO CART
4 step - WORKING ON ADD TO CART BUTTON
const dispatch = useDispatch()
return (<div><button onClick={() => {dispatch(addItemToCard({dish, quantity}))}}>ADD TO CARD</button>(WE ADD THIS AFTER <p></p>)</div>)*/

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