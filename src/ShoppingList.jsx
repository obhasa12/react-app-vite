import ShoppingListItems from "./ShoppingListItems";

const ShoppingList = ({items}) => {
    return ( 
        <div className="shopping-list">
            <ul>
                {items.map(item => <ShoppingListItems item={item} key={item.id}/>)}
            </ul>
        </div>
     );
}
 
export default ShoppingList;