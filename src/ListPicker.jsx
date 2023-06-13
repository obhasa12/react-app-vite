const ListPicker = ({values}) => {
    const ranIdx = Math.floor(Math.random() * values.length)
    const randElement = values[ranIdx]

    

    return ( 
        <div className="listpicker">
            <p>The list of values: { values }</p>
            <p>Random element is: {randElement} </p>
        </div>
     );
}
 
export default ListPicker;