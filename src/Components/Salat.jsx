import React from 'react'
import Props from '../Menu/Props'
import bold1 from '../assets/bold1.jpg'
import bold2 from '../assets/bold2.jpg'
import bold3 from '../assets/bold3.jpg'
import bold4 from '../assets/bold4.jpg'
import bold5 from '../assets/bold5.jpg'
import bold6 from '../assets/bold6.jpg'
function Xaggi() {
  const Burger ={
    img: bold1,
    title:"Hot spicy fried rice with omelet",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash ={
    img: bold2,
    title:"Spicy instant noodle with ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "1.29",
    button: "Заказать"
  }
  const lavash1 ={
    img: bold3,
    title:"constant noodle special omelette",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "3.29",
    button: "Заказать"
  }
  const lavash2 ={
    img: bold4,
    title:"noodle with spinach",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "0,11",
    button: "Заказать"
  }
  const lavash3 ={
    img: bold5,
    title:"Spicy seasoned seafood noodles",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "0,19",
    button: "Заказать"
  }
  const lavash4 ={
    img: bold6,
    title:"Salted Pasta with mushroom sauce  ",
    text: "  Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "0.69",
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
       
      </div>
      </div>
  )
}

export default Xaggi
