import React from 'react'
import './homepage.styles.scss'


const HomePage = () =>
(
    <div className='homepage'>
        <div className='directory_menu'>
            <div className='menu_item'>
                <div className='content'>
                    <h1 className='title'>
                        Hats
                    </h1>
                    <span className='subTitle'> Shop</span>
                </div>
                <div className='content'>
                    <h1 className='title'>
                       Jackets
                    </h1>
                    <span className='subTitle'> Shop</span>
                </div>
                <div className='content'>
                    <h1 className='title'>
                        Sneakers
                    </h1>
                    <span className='subTitle'> Shop</span>
                </div>
                <div className='content'>
                    <h1 className='title'>
                        Womans
                    </h1>
                    <span className='subTitle'> Shop</span>
                </div>
                <div className='content'>
                    <h1 className='title'>
                        Mans
                    </h1>
                    <span className='subTitle'> Shop</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;

