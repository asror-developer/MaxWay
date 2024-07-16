import React from 'react'
import Props from '../Menu/Props'
import gap1 from '../assets/gap1.jpg'
import gap2 from '../assets/gap2.jpg'
import gap3 from '../assets/gap3.jpg'
import gap4 from '../assets/gap4.jpg'
import gap5 from '../assets/gap5.jpg'
import gap6 from '../assets/gap6.jpg'
import gap7 from '../assets/gap7.jpg'
import gap8 from '../assets/gap8.jpg'
import gap9 from '../assets/gap9.jpg'
function Pizza() {
  const Burger ={
    img: gap1,
    title:"noodle with spinach",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash ={
    img: gap2,
    title:"Spicy seasoned seafood noodles",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "3.29",
    button: "Заказать"
  }
  const lavash1 ={
    img: gap3,
    title:"x owls available",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "0.99",
    button: "Заказать"
  }
  const lavash2 ={
    img: gap4,
    title:"Salted Pasta with mushroom sauce ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "1,19",
    button: "Заказать"
  }
  const lavash3 ={
    img: gap5,
    title:"Beef dumpling in hot soup",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "1,59",
    button: "Заказать"
  }
  const lavash4 ={
    img: gap6,
    title:"Healthy noodle with spinach leaf   ",
    text: "  Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "5.59",
    button: "Заказать"
  }
  const lavash5 ={
    img: gap7,
    title:"Hot spicy fried rice with omelet",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "0.56",
    button: "Заказать"
  }
  const lavash6 ={
    img: gap8,
    title:"Spicy instant noodle with",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "1.69",
    button: "Заказать"
  }
  const lavash7 ={
    img: gap9,
    title:"constant noodle special omelette",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп  ",
    price: "5,98",
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

export default Pizza