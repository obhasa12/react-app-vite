import './App.css'
import Chicken from './Chicken'
import Greater from './Greater'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'


function App() {
  return (
    <div className="app">
      {/* <Heading color="magenta" text="Welcome!!" fontSize="40px"/>  */}
      {/* <Greater name="Bill" from="Elton"/>
      <Greater name="Rossa"/>
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/> */}
      {/* <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={["a","b","c","d"]}/> */}
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "magenta", "black", "aqua"]} /> */}
      <Slots value={["🍌","❤️"]} />
      <Slots value={["🍌","❤️"]} />
    </div>
    )
}

export default App
