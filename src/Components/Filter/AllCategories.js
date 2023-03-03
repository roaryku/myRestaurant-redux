
import Filter from "./Filter";

const AllCategories = () => {
    return(
    <div>
        <h1>What kind of food do you like?</h1>
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALAD', 'ALL'].map((category, index) => <Filter category={category} key={index}/>
        )}
    </div>
  )
}
export default AllCategories;