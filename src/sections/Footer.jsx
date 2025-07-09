import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content flex flex-col '>
                {/*<div className='flex flex-col justify-start md:justify-center'>*/}
                {/*    <a href="/">visit my blog</a>*/}
                {/*</div>*/}
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a className='icon' target='_blank' href={img.url} key = {img.url}>
                            <img src={img.imgPath} alt='social' />
                        </a>
                    ))}
                </div>
                <div className='flex flex-col justify-center md:justify-start'>
                    <p className='text-center md:text-end'>
                        © {new Date().getFullYear()}, Raj Shekhar, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
