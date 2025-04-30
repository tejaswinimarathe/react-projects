import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layout/AppLayout'
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'
import Favourite from './pages/Favourite'
import Favorites from './pages/Favourite'
import SingleGif from './pages/SingleGif'
import PageNotFound from './pages/PageNotFound'
import GifProvider from './context/GifContext'
import GifPage from './pages/SingleGif'

const router=createBrowserRouter(
  [
    {
      element:<AppLayout/>,

      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/:category',
          element:<Category/>
        },
        {
          path:'/search/:query',
          element:<Search/>
        },
        {
          path:'/:type/:slug',
          element:<GifPage/>
        },
        {
          path:'/favorites',
          element:<Favorites/>
        },
        {
          path:'*',
          element:<PageNotFound/>
        }
      ]
    }
  ]
)

function App() {

  return (
    <>
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
    </>
  )
}

export default App
