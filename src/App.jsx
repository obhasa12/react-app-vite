import './App.css'
import Chicken from './Chicken'
import Greater from './Greater'
import Die from './Die'

function App() {
  return (
    <div className="app">
      {/* <Greater name="Bill" from="Elton"/>
      <Greater name="Rossa"/> */}
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
    )
}

export default App
