import React from 'react'
import Card from './Card'
import Hamburger from './assets/Hamburger.PNG'
import Fish from './assets/Fish.PNG'
import Paneer from './assets/paneer.PNG'
import Veg from './assets/veg.PNG'
import Pizza from './assets/pizza.PNG'
import Salad from './assets/salad.PNG'
import Burger from './assets/burger.PNG'
import Fries from './assets/fries.PNG'


function Product() {
  return (
    <div className="min-h-screen bg-[#ADE8F4] p-4">
      <h2 className="text-2xl font-bold mb-6 text-center underline ">GET ALL FOOD DISHES IN 10 MINUTES</h2>

      <div className="flex flex-wrap justify-center gap-15">

        <Card
        image={Hamburger} dishName="Hamburger Street food" price="₹129" buttonText="Order Now"
        />

        <Card  image={Fish} dishName={"Fish Rice"} price={"₹149"} buttonText={"Order Now"}/>


        <Card image={Veg} dishName={"Veg Thali"} price={"₹99"} buttonText={"Order Now"}/>


        <Card image={Paneer} dishName={"Panner Tika"} price={"₹119"} buttonText={"Order Now"}/>


        <Card image={Pizza} dishName={"Veg Cheese Pizza"} price={"₹219"} buttonText={"Ordr Now"} />


        <Card image={Salad} dishName={"Salad 250g"} price={"₹49"} buttonText={"Order now"}/>

        <Card image={Burger} dishName={"Veg Cheese Burger"} price={"₹79"} buttonText={"Order now"}  />

        <Card image={Fries} dishName={"French Fries"} price={"₹99"} buttonText={"Order now"}  />

      </div>
    </div>
  );
}

export default Product