const Property = ({prop}) => {

    return ( 
        <div className="property">
            <h2>{prop.name}</h2>
            <h3>${prop.price} a night</h3>
            <h4>{prop.rating}⭐</h4>
        </div>
     );
}
 
export default Property;