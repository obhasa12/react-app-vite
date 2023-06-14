const ShoppingListItems = ({item}) => {
    const colorText = item.completed? "grey": "red"
    const textDec = item.completed? "line-through": "none"

    return ( 
        <div className="shopping-list-items">
            <li style={{color: colorText, textDecoration: textDec}}> 
                {item.item} - {item.quantity} 
            </li>
        </div> 
    );
}
 
export default ShoppingListItems;