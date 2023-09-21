import { Link } from 'react-router-dom'
import image from '../../src/assets/a.jpg'

const Footer = () => {
  return (
    <div>
    <div className='mt-4 ml-9 mb-4  gap-4 grid lg:grid-cols-2'>
    <div>
    <img src={image} alt="kameme" />

    </div>
    
    <div className=' flex flex-col justify-center gap-4'>
    <h1>Cotact Us</h1>
      <Link to="mailto:amossirima2020@gmail.com"> Email : amossirima2020@gmail.com</Link>
      <Link href="tel:+254111750386" > Call or message : +254111750386</Link>

    </div>
    <h3 className='font-semibold lg:flex justify-around mb-3 align-center'>All rights Reserved, Copyright 2023</h3>

    </div>
    </div>
  ) 
}

export default Footer