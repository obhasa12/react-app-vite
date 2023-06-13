const Slots = ({value}) => {
    const player1 = Math.floor(Math.random() * value.length)
    const player2 = Math.floor(Math.random() * value.length)
    const player3 = Math.floor(Math.random() * value.length)
    const isWinner = player1 === player2 && player1 === player3

    return ( 
        <div className="slots">
            <h1>{value[player1]} {value[player2]} {value[player3]}</h1>
            <h2 style={{color: isWinner? "green": "red"}}>{isWinner? "You win!": "You lose!"}</h2>
            {isWinner && <h3>Congrats!!</h3>}
        </div>
     );
}
 
export default Slots;