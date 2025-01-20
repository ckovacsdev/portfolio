import LinkedinIcon from '../../assets/linkedinicon.png';
import GithubIcon from '../../assets/githubicon.png'
import './header.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const LinkedInUrl = 'https://www.linkedin.com/in/christian-kovacs-23198b1b0/';
const GitHubUrl = 'https://github.com/ckovacsdev';

export const Header = () => {

    const [ isOpen, setOpen ] = useState(false);

    return (
        <div className='header-container'>
            <div className='header-section-container section-name'>
                <h1 className='header-name'> Christian Kovacs </h1>
            </div>

            <div className='header-section-container section-links'>
                <div className='header-menu-links'>
                    <a href='#' className='header-menu-link'> Projects </a>
                    <a href='#' className='header-menu-link'> Work History </a>
                    <a href='#' className='header-menu-link'> About Me </a>
                </div>
            </div>

            <div className='header-section-container section-icons'>
                <div className='header-icons'> 
                    <a href={LinkedInUrl} target='_blank' rel='noopener noreferrer'> <img src={LinkedinIcon} alt="LinkedIn Icon with Link" className='header-icon'/> </a>
                    <a href={GitHubUrl} target='_blank' rel='noopener noreferrer'> <img src={GithubIcon} alt="GitHub Icon with Link" className='header-icon github-icon'/> </a>
                    <div className='mobile-menu'>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={40} color='white'/>
                    </div>
                </div>
                


            </div>
        </div>
    )
}