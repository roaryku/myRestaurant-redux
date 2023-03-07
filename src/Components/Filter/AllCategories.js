
import Filter from "./Filter";

/* 4 step - EVERYTHING BELOW IT IS 4 STEP - THE CODE IT WILL BE SHOWN IN Filter.js 
1 - we add <Filter />
2 - .map
3 - prop category = {category} 
5 - go to Filter.js */

const AllCategories = () => {
    return(
    <div>
        <h1>What kind of food do you like?</h1>
        {['ALL', 'SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALAD']
        .map((category, index) => 
        <Filter category={category} key={index}/>
        )}
    </div>
  )
}
export default AllCategories;