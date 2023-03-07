import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCard } from "../../redux/cartSlice";

/* 6 step - ADDING IMAGE 
NEXT STEP - ADDING REDUX 
CLOSE TERMINAL AND INSTAL READUX  https://redux-toolkit.js.org/introduction/getting-started 
In src adding folder redux and in readux adding three components
store.js, dishesSlice.js, cartSlice.js  - WORKING WITH STORE AND DISHESSLICE NEXT */

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    
    return(
    <div>
        <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCard({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/>
        </span>
    </div>
)
}
export default CartItem;