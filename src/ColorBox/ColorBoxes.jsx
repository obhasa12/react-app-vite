import ColorBox from "./Colorbox";
import '../ColorBox/ColorBoxes.css'

const ColorBoxes = ({colors}) => {
    const boxes = []
    for(let i = 0; i < 25; i++){
        boxes.push(<ColorBox colors={colors}/>)
    }
    return ( 
        <div className="color-boxes">
            {boxes}
        </div>
     );
}
 
export default ColorBoxes;