import { AiOutlineMail } from "react-icons/ai";
import './header.css';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const LinkedInUrl = 'https://www.linkedin.com/in/christian-kovacs-23198b1b0/';
const GitHubUrl = 'https://github.com/ckovacsdev';

export const Header = () => {

    const [ isOpen, setOpen ] = useState(false);
    const [ notificationOpen, setNotificationOpen ] = useState(false);

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

    const handleNotificationClose = () => {
        setNotificationOpen(false);
    }

    const copyEmail = () => {
        let email:string = process.env.REACT_APP_CK_EMAIL as string;
        navigator.clipboard.writeText(email);
        setNotificationOpen(true);
    }

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
                            <FaLinkedin className='header-icon' color='#0A66C2'/>
                        </a>
                        <a href={GitHubUrl} target='_blank' rel='noopener noreferrer'> 
                            <FaGithub className='header-icon' color='white' />
                        </a>
                        
                        <div>
                            <button className='header-email-button' onClick={() => copyEmail()}>
                                <AiOutlineMail color={'white'} size={'40px'} />
                            </button>
                        </div>
                 
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
                            <FaLinkedin className='dropdown-icon' color='#0A66C2'/>
                        </a>

                        <a href={GitHubUrl} target='_blank' rel='noopener noreferrer' className='dropdown-icon-container'> 
                            <FaGithub className='dropdown-icon' color='white'/>
                        </a>

                        <button className='dropdown-icon-container email-button-sub' onClick={() => copyEmail()}> 
                            <AiOutlineMail color={'white'} size={'40px'} />
                        </button>
                        
                    </div>
                </div>
            }

            <Snackbar open={notificationOpen} autoHideDuration={4000} onClose={handleNotificationClose}>
                <Alert onClose={handleNotificationClose} severity='success' variant='filled' sx={{ width: '100%' }}>
                    Email Copied to Clipboard
                </Alert>
            </Snackbar>
        </div>
    )
}