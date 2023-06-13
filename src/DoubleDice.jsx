const DoubleDice = () => {
    const num1 = Math.floor(Math.random() * 3 ) + 1
    const num2 = Math.floor(Math.random() * 3 ) + 1
    const style = { color: num1 === num2? "green": "red"}

    return ( 
        <div className="double-dice" style={style}>
            <h1>Double dice</h1>
            {num1 === num2 && <h3>You win!</h3>}
            {/* {num1===num2? <h3>You win!</h3> : ""}   */}
            <p>the first number is : {num1}</p>
            <p>the second number is : { num2 }</p>
            {/* <h1>{num1===num2?"you win the game": "oowh try next time"}</h1> */}
        </div>
     );
}
 
export default DoubleDice;