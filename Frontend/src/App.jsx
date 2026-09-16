import './App.css'
import GameView from './view/hangman/gameView.jsx'
import KategoriView from './view/hangman/kategoriView.jsx';
import MainMenu from './view/mainMenu.jsx';
import { Routes, Route, useParams } from 'react-router-dom'

  function GamePage() {
    const {kategori} = useParams()

    return <GameView kategori={kategori} />
  }


export default function App() {
  
 
  return (
    <Routes>
      
      <Route path='/' element={<MainMenu/>} ></Route>
      <Route path='/hangman' element={<KategoriView />} ></Route>
      <Route path='/hangman/:kategori' element={<GamePage />}  ></Route>


    </Routes>
  )

}








