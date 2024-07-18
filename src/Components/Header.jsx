



import { Button, Modal , Drawer } from 'antd';
import React, { useState } from 'react'
import { NavLink, } from 'react-router-dom'
import korzinka from '../assets/korzinka.png'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import i18n from '../i18next';

const Header = () => {
   

    const {t} = useTranslation ();
   const changeLanguage =(lang)=>{
    i18n.changeLanguage(lang.target.value)
   }


    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

    const [name ,setname] = useState("")
    const [surname, setsurname] = useState("")
   const SendMessages = ()=>{
  const token = "7452634063:AAGseBmoNKQlE-FCd4pqGEgh0Xf-nHlHh-M"
  const chat_id = 1214899058
  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const message = ` Ism  ${name} `
  
  fetch(url, {
   method: 'POST',
   headers:{
       "Content-type": 'application/json'
   },
   body: JSON.stringify({
       "chat_id":chat_id,
       "text": message
   })
  }).then(res=>res.json()).then(res=>{
    alert("yuborildi")
}).catch(err=>{
    console.log(err);
})
   }



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isKorzinkaOpen, setIsKorzinkaOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (    
        <div className='header'>
            <div className='container header-container'>
                <div className='header-logo'>
                    <a href="#">SFood
                    </a>
                </div>
                <div className='header-item5'>
                    <NavLink className='header-link' active to="/">{t('header')}</NavLink>
                    <NavLink className='header-link' active to="/card">{t('header1')}</NavLink>
                    <NavLink className='header-link' active to="/about">{t('header2')}</NavLink>
                    <NavLink className='header-link' active to="/contact">{t('header3')}</NavLink>
                </div>
                <div className='select'>
                <select name="language" onChange={changeLanguage} value={i18n.language} style={{marginRight: "15px"}} >
                    <option value="uz">Uzbek</option>
                    <option value="eng">English</option>
                  </select>
                  </div>
                <div className='header-blok'>
                <Button onClick={() => setIsKorzinkaOpen(true)}>
                    <img src={korzinka} alt="" />
                </Button>
                <Modal title="Basic Modal1" open={isKorzinkaOpen} onOk={() => setIsKorzinkaOpen(false)} onCancel={() => setIsKorzinkaOpen(false)}>
                    <h1 className='header-men'>Hali siz buyurtma qilmadinggiz</h1>

                </Modal>
                </div>
                 
                <div className='header-wrap'>
                 

                    <div className='header-btn'>
                        <Button className='header-name' type="" onClick={showModal}>
                            Войти
                        </Button>
                        <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <h1 className='header-stel'>Добро пожаловать</h1>
                            <p className='header-text'>Войдите с вашим номером телефона</p>
                            <div className='header-bold'>
                                <input className='header-input' type="Ism" required  placeholder='name' onChange={(e)=>setname(e.target.value)} />
                            </div>
                            <div className='header-btn'>
                                <button onClick={SendMessages} className='header-button1'>   Войтиe</button>
                            </div>
                            <div className='header-wrap1'>
                                <p className='header-bold'>У вас нет аккаунта?</p>
                                <a className='header-href' href="">Регистрация</a>
                            </div>
                        </Modal>
                    </div>
                   

                    <div className='header-blok1'>
                    <Button type="primary" onClick={showDrawer}>
        =
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
       <p>Главная</p>
       <p>Филиалы</p>
       <p>О нас</p>
       <p>Контакты</p>
      </Drawer>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header
