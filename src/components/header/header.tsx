import LinkedinIcon from '../../assets/linkedinicon.png';
import GithubIcon from '../../assets/githubicon.png';
import { AiOutlineMail } from "react-icons/ai";
import './header.css';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

const LinkedInUrl = 'https://www.linkedin.com/in/christian-kovacs-23198b1b0/';
const GitHubUrl = 'https://github.com/ckovacsdev';

export const Header = () => {

    const [ isOpen, setOpen ] = useState(false);

    // When the header menu dropdown is open on mobile mode, if the screen
    // resizes to be desktop sized, the state will be set to false
    // and will automatically close the dropdown
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 801) {
                setOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (

        <div className='header'> 

            <div className='header-container'>
                <div className='header-section-container section-name'>
                    <h1 className='header-name'> Christian Kovacs </h1>
                </div>

                <div className='header-section-container section-links'>
                    <div className='header-menu-links'>
                        <a href='#about_me' className='header-menu-link'> About Me </a>
                        <a href='#projects' className='header-menu-link'> Projects </a>
                    </div>
                </div>

                
                <div className='header-section-container section-icons'>
                    <div className='header-icons'> 
                        <a href={LinkedInUrl} target='_blank' rel='noopener noreferrer'> 
                            <img src={LinkedinIcon} alt="LinkedIn Icon with Link" className='header-icon'/> 
                        </a>
                        <a href={GitHubUrl} target='_blank' rel='noopener noreferrer'> 
                            <img src={GithubIcon} alt="GitHub Icon with Link" className='header-icon github-icon'/> 
                        </a>
                        
                        <button className='header-email-button'>
                            <AiOutlineMail color={'white'} size={'40px'} />
                        </button>
                 

                        <div className='mobile-menu'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={40} color='white'/>
                        </div>
                    </div>
                </div>

            </div>
            
            {isOpen &&
                <div className='header-dropdown-menu'>
                    
                    <a href='#about_me' onClick={() => setOpen(false)} className='header-dropdown-menu-item'> About Me </a>
                    <a href='#projects' onClick={() => setOpen(false)} className='header-dropdown-menu-item'> Projects </a>

                    <div className='header-dropdown-item-icons'>
                        <a href={LinkedInUrl} target='_blank' rel='noopener noreferrer' className='dropdown-icon-container'> 
                            <img src={LinkedinIcon} alt="LinkedIn Icon with Link" className='dropdown-icon'/> 
                        </a>

                        <a href={GitHubUrl} target='_blank' rel='noopener noreferrer' className='dropdown-icon-container'> 
                            <img src={GithubIcon} alt="GitHub Icon with Link" className='dropdown-icon gitlab-dropdown'/> 
                        </a>

                        <button className='dropdown-icon-container email-button-sub'> 
                            <AiOutlineMail color={'white'} size={'40px'} />
                        </button>
                        
                    </div>
                </div>
            }
        </div>
    )
}