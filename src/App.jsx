import './App.css'
import Header from './components/Header'
import SummerPrepSale from './components/SummerSale'
import FlavourVerse from './pages/FlavourVerse'

function App() {

  return (
   <div className='overflow-hidden font-bebas'>
    <Header />
      <SummerPrepSale />
      {/* <Flavour /> */}
    <FlavourVerse />
   </div> 
  )
}

export default App
