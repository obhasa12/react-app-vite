const Die = ({ numSides }) => {
    const roll = Math.floor(Math.random() * numSides) + 1

    return ( 
        <div className="die">
            <p>{ numSides }-sided Die roll: {roll}</p>
        </div>
     );
}
 
export default Die;