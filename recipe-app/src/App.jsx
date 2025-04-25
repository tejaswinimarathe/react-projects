
import { Route, Routes } from 'react-router'
import './App.css'
import MainPage from './component/MainPage'
import MealInfo from './component/MealInfo'


function App() {

  return (
    <>
      {/* <MainPage/> */}
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/:mealid' element={<MealInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App
