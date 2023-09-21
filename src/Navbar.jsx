import image from './assets/a.jpg'
import { NavLink } from 'react-router-dom'




const Navbar = () => {

  return (
    <div className='lg:mb-4 flex my-1 p-4  text-slate-100 items-center justify-around mx-auto w-full bg-transparent text-lg font-semibold'>
    <img src={image}  alt ='ai' className='w-[70px] hover:scale-125 '/> 
    <h1 className='flex flex-col hover:underline' >Home</h1>
    <h1 className='hover:underline' >Projects</h1>
    <NavLink to='/contact' className='hover:underline' id='skill'> Skills </NavLink>
   
    <h1 className='hover:underline'>Experience</h1>  
    <div>
    
    </div>
   
    
    </div>
  )
}

export default Navbar