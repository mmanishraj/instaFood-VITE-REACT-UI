import React from 'react'


function Card ( {image, dishName, price, buttonText}) {
  return (
    <div className='bg-[#edf2fb] hover:bg-[#bfdbf7] rounded-b-xl rounded-t-xl p-1 w-50 font-bold '>
      <div>
      <img src={image} className=' h-42 w-50' />
      </div>
      <hr className='border-1'></hr>
       <h1>{dishName}</h1>
       <h1>{price}</h1>

       <button className='bg-[#48CAE4] hover:bg-[#03045E] hover:text-white font-semibold rounded-md px-3 py-0.5 ' >
        {buttonText}
       </button>


    </div>
  )
}

export default Card