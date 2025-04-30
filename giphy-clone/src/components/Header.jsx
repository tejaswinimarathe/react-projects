import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from '../context/GifContext';

const Header = () => {
    const [categories,setCategories]=useState([]);
    const [showCategories,setShowCategories]=useState(false);

   const {gf,filter,setFilter,favorites,setFavorites}= GifState();

   const fetchGifCategories=async()=>{
    const {data}=await gf.categories();
    setCategories(data);
   }

   useEffect(()=>{
    fetchGifCategories();
   },[])
  return (
   <nav>
    <div className='relative flex gap-4 justify-between items-center mb-2'>
        <NavLink to={'/'} className="flex gap-2">
           <img src={logo} className='w-8' alt="giphy logo" />
           <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIPHY</h1>
        </NavLink>

        <div className='font-bold text-md flex gap-2 items-center'>
          {
            categories?.slice(0,5).map((category,index)=>{
              return <Link key={category.name} to={`/${category.name_encoded}`} className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
                {category.name}
              </Link>
            })
          }
        
        <button onClick={()=>setShowCategories(!showCategories)}>
          <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories?"gradient" :""} border-b-4 hidden lg:block` }/>
        </button>
        {favorites.length>0 && <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded '>
          <NavLink>Favorite GIFs</NavLink>
        </div>}
        <button>
          <HiMiniBars3BottomRight  className='text-sky-400 lg:hidden block'  size={30}/>
        </button>
        </div>
    
    {
      showCategories && <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
        <span className='text-3xl font-extrabold'>Categories</span>
        <hr className='bg-gray-100 opacity-50 my-5' />
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
          {
            categories?.map((category,ind)=>{
              return <NavLink key={ind} to={`/${category.name_encoded}`} className={'font-bold'}>{category.name}</NavLink>
            })
          }
          
        </div>
      </div>
    }
    </div>
    {/* search */}
   </nav>

 
   
  )
}

export default Header
