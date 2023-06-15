import './App.css'
import Chicken from './Chicken'
import Greater from './Greater'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Clicker1 from './Clicker1'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBox from './ColorBox/Colorbox'
import ColorBoxes from './ColorBox/ColorBoxes'

// const data = [
//   {id: 1, item: "eggs", quantity: 12, completed: false},
//   {id:2, item: "milk", quantity: 1, completed: true},
//   {id:3, item: "chicken breast", quantity: 4, completed: false},
//   {id:4, item: "carrots", quantity: 6, completed: true},
// ]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150},
  { id: 129331, name: "Lone Mointain Cabin", rating: 4.8, price: 250},
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300},
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120},
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140},
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96},
]

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9FA",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
]

function App() {
  return (
    <div className="app">
      <ColorBoxes colors={colors} />
      {/* <ToggleCounter /> */}
      {/* <Counter /> */}
      {/* <Clicker1 message="OH M G" buttonText= "CLICK ME PLIS" /> */}
      {/* <Clicker /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Heading color="magenta" text="Welcome!!" fontSize="40px"/> 
      <Greater name="Bill" from="Elton"/>
      <Greater name="Rossa"/>
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
      <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={["a","b","c","d"]}/>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "magenta", "black", "aqua"]} />
      <Slots value={["🍌","❤️","💀"]} /> */}
    </div>
    )
}

export default App
