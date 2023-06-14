import Property from "./Property";
import './Property.css'

const PropertyList = ({properties}) => {

    return ( 
        <div className="property-list">
            {
                properties.map(prop => (
                    <Property prop={prop} key={prop.id}/> 
                ))
            }
        </div>
     );
}
 
export default PropertyList;