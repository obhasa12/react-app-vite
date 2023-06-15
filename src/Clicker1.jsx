const Clicker1 = ({message, buttonText}) => {
    const handleClick =() =>{
        alert(message)
    }

    return ( 
    <div className="clicker-1">
        <button onClick={handleClick}>{buttonText}</button>
    </div> );
}
 
export default Clicker1;