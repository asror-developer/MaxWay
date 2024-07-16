



import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { NavLink, } from 'react-router-dom'
import korzinka from '../assets/korzinka.png'

const Header = () => {
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
                <div className='header-item'>
                    <NavLink className='header-link' active to="/">Главная</NavLink>
                    <NavLink className='header-link' active to="/card">Филиалы</NavLink>
                    <NavLink className='header-link' active to="/about">О нас</NavLink>
                    <NavLink className='header-link' active to="/contact">Контакты</NavLink>
                </div>
                <Button onClick={() => setIsKorzinkaOpen(true)}>
                    <img src={korzinka} alt="" />
                </Button>
                <Modal title="Basic Modal1" open={isKorzinkaOpen} onOk={() => setIsKorzinkaOpen(false)} onCancel={() => setIsKorzinkaOpen(false)}>
                    <h1 className='header-men'>Hali siz buyurtma qilmadinggiz</h1>

                </Modal>
                <div className='header-wrap'>


                    <div className='header-btn'>
                        <Button className='header-name' type="" onClick={showModal}>
                            Войти
                        </Button>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <h1 className='header-stel'>Добро пожаловать</h1>
                            <p className='header-text'>Войдите с вашим номером телефона</p>
                            <div className='header-bold'>
                                <input className='header-input' type="text" required placeholder='+998970000647' />
                            </div>
                            <div className='header-btn'>
                                <button className='header-button1'>   Войти</button>
                            </div>
                            <div className='header-wrap1'>
                                <p className='header-bold'>У вас нет аккаунта?</p>
                                <a className='header-href' href="">Регистрация</a>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
