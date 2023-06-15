const Clicker = () => {
    const handdleClick = (e) => {
        console.log(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return ( 
        <div className="clicker">
            <form onSubmit={handleSubmit}>
                <button>Button</button>
            </form>

            <p>Click the button</p>
            <button onClick={handdleClick}>Click</button>
        </div>
     );
}
 
export default Clicker;