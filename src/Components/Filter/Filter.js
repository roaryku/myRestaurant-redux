import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

/* 5 step - return (<div><p>{category}</p></div>)
IT WILL SHOW ALL THE CATEGORY 
 9 step - import useSelector and getSelectedCategory 
  const selectedCategory = useSelector(getSelectedCategory);
  <p>className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category} FOR CSS </p>
   NEXT STEP - index.js oberniom APP IN PROVIDER TEG 
   NEXT - ADD DISPATCH TO CONNECT BUTTON */

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
    </div>)
}
export default Filter;