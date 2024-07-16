import React from 'react'
import Props from '../Menu/Props'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
function Desert() {
  const Burger ={
    img: img1,
    title:"x owls available",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "2.29",
    button: "Заказать"
  }
  const lavash ={
    img: img2,
    title:"Salted Pasta with mushroom sauce ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп ",
    price: "123",
    button: "Заказать"
  }
  const lavash1 ={
    img: img3,
    title:"Beef dumpling in hot soup ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash2 ={
    img: img4,
    title:"Healthy noodle with spinach leaf ",
    text: "Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash3 ={
    img: img5,
    title:"Hot spicy fried rice with omelet",
    text: " Информация: лаваш мясной classic, картофель-фри, пеп",
    price: "123",
    button: "Заказать"
  }
  const lavash4 ={
    img: img6,
    title:"Salted Pasta with mushroom sauce  ",
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

export default Desert
