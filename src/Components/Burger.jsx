import React from 'react'
import Props from '../Menu/Props'
import list1 from '../assets/list1.jpg'
import list2 from '../assets/list2.jpg'
import list3 from '../assets/list3.jpg'
import list4 from '../assets/list4.jpg'
import list5 from '../assets/list5.jpg'
import list6 from '../assets/list6.jpg'
function Burger() {
  const Burger ={
    img: list1,
    title:"noodle with spinach",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash ={
    img: list2,
    title:"Spicy seasoned seafood noodles ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "123",
    button: "Заказать"
  }
  const lavash1 ={
    img: list3,
    title:"x owls available ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash2 ={
    img: list4,
    title:"Salted Pasta with mushroom sauce",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash3 ={
    img: list5,
    title:"Beef dumpling in hot soup",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash4 ={
    img: list6,
    title:"Beef dumpling in hot soup ",
    text: "  Информация: лаваш мясной classic, картофель-фри, пеп ",
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
       
      </div>
      </div>
  )
}

export default Burger
