import React from 'react'
import Props from '../Menu/Props'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pick7.jpg'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'

function Sendvich() {
  const Burger ={
    img: pic1,
    title:"Spicy seasoned seafood noodles",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash ={
    img: pic2,
    title:"x owls available",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "0.11",
    button: "Заказать"
  }
  const lavash1 ={
    img: pic3,
    title:"Hot spicy fried rice with omelet",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "0.45",
    button: "Заказать"
  }
  const lavash2 ={
    img: pic4,
    title:"Salted Pasta with mushroom sauce ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "0.36",
    button: "Заказать"
  }
  const lavash3 ={
    img: pic5,
    title:"Beef dumpling in hot soup",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash4 ={
    img: pic6,
    title:"Hot spicy fried rice with omelet    ",
    text: "  Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "5.59",
    button: "Заказать"
  }
  const lavash5 ={
    img: pic7,
    title:"Spicy instant noodle with ",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "6.99",
    button: "Заказать"
  }
  const lavash6 ={
    img: pic8,
    title:"constant noodle special omelette",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "1.49",
    button: "Заказать"
  }
  const lavash7 ={
    img: pic9,
    title:"noodle with spinach ",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп  ",
    price: "0.19",
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
export default Sendvich