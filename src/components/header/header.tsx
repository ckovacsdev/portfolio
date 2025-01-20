import React from 'react';
import LinkedinIcon from '../../assets/linkedinicon.png';
import GithubIcon from '../../assets/githubicon.png'
import './header.css';

export const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-name-container'>
                <h1 className='header-name'> Christian Kovacs </h1>
            </div>

            <div className='header-menu'>
                <div className='header-menu-links'>
                    <a href='#'> Projects </a>
                    <a href='#'> Work History </a>
                    <a href='#'> About Me </a>
                </div>
            </div>

            <div className='header-links-container'>
                <div className='header-links'> 
                    {/* TODO
                        Linkedin Icon linking to my page
                        GitHub Icon linking to my page
                    */}
                    <img src={LinkedinIcon} alt="LinkedIn Icon with Link" className='header-icon'/>
                    <img src={GithubIcon} alt="GitHub Icon with Link" className='github-icon'/>

                </div>
            </div>
        </div>
    )
}