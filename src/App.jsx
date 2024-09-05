import './App.css'
import Header from './components/Header'
import FlavourVerse from './pages/FlavourVerse'
import SummerPrepSale from './pages/SummerSale'

function App() {

  return (
   <div className='overflow-hidden font-bebas'>
    <Header />
      <SummerPrepSale />
    <FlavourVerse />
   </div> 
  )
}

export default App
