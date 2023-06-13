const ColorList = ({colors}) => {

    const elements = colors.map(color => {
        return(
        <p>this is {color} </p>
        )
    })

    return ( 
        <div className="color-list">
            <h1>Color List</h1>
            { colors.map((color) => <p style={{color: color}} key={color}>this is { color }</p>) }
            {/* <p>{colors.map(color => color)}</p> */}
        </div>
     );
}
 
export default ColorList;