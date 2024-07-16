import React from 'react'
import Props from '../Menu/Props'
import card1 from '../assets/Card1.jpg'
import Card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'
import card7 from '../assets/card7.jpg'
import card8 from '../assets/card8.png'
import card9 from '../assets/card9.png'
function Donor() {
  const Burger ={
    img: card1,
    title:"Spicy seasoned seafood noodles",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash ={
    img: card1,
    title:"x owls available",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "123",
    button: "Заказать"
  }
  const lavash1 ={
    img: card1,
    title:"Hot spicy fried rice with omelet",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash2 ={
    img: card1,
    title:"Salted Pasta with mushroom sauce ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash3 ={
    img: Card5,
    title:"Beef dumpling in hot soup",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash4 ={
    img: card6,
    title:"Hot spicy fried rice with omelet    ",
    text: "  Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "123",
    button: "Заказать"
  }
  const lavash5 ={
    img: card7,
    title:"Spicy instant noodle with ",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "123",
    button: "Заказать"
  }
  const lavash6 ={
    img: card8,
    title:"constant noodle special omelette",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash7 ={
    img: card9,
    title:"noodle with spinach ",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп  ",
    price: "123",
    button: "Заказать"
  }
  
  return (
   
    <div className='container'>
      <div style={{display:"flex" , flexWrap:"wrap" , gap:"10px", width:"200" ,maxHeighth:"50"}}>
        <Props data={Burger}/>
        <Props data={lavash}/>
        <Props data={lavash1}/>
        <Props data={lavash2}/>
        <Props data={lavash3}/>
        <Props data={lavash4}/>
        <Props data={lavash5}/>
        <Props data={lavash6}/>
         <Props data={lavash7}/>
      </div>
      </div>
  )
}

export default Donor