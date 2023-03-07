import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

/*1step - (GET THE INFORMATION FROM dataDishes.js) - const Dishes =() => {return (<div>
    dataDishes.map(dish => <Dish dish = {dish}) (<Dish = component: dish = {dish} = prop)
    </div>)} -  do not forget to import dataDishes and Dish - */

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

return(
    <div> 
        {dataDishes
        .filter(dish => {
            /* FIX ALL BUTTON */
            if(selectedCategory === 'ALL') return true;
            /* category we choose (selectedCategory) = category we choosed before (dish.category). 
            get category from dataDishes */
            return selectedCategory === dish.category;
            
        })
        .map((dish) => <Dish dish={dish} key={dish.id}/>)}
    </div>
    )
}
export default Dishes;