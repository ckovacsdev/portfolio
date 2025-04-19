import { PiMapPinSimple } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaDocker } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { SiGraphql } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import './profile-card.css';

export const ProfileCard = () => {
    return (
        <div className='profile-card-container'> 
           <div className='profile-card-name'> 
                <h1 className='profile-card-name'> Christian Kovacs </h1>
                <div className='profile-card-location'>
                    <PiMapPinSimple size={20} color={'#808080'}/>
                    <h4 className='profile-card-location-text'> New York, NY, USA </h4>
                </div>
           </div>
           <div className='profile-card-description'>
                <p> 
                    I am a software engineer with 2 years of professional experience working in web application development.
                    I prefer a minimalist approach to projects, with both simple and clean interfaces, and simple and reliable microservice architecture.
                </p>
                <div className='profile-card-tech-stack'> 
                    <h4> My Tech Stack </h4>
                    <div className='profile-card-list'>
                        <div className='profile-icon-name-pair'> <SiTypescript  size={'25px'} color={'#3178C6'} /> Typescript </div>
                        <div className='profile-icon-name-pair'> <FaReact size={'25px'} color={'#61DBFB'} /> React </div>
                        <div className='profile-icon-name-pair'> <SiGraphql size={'25px'} color={'#E10098'} /> GraphQL </div>
                        <div className='profile-icon-name-pair'> <AiOutlineDotNet size={'40'} color={'#512bd4'} /> .NET Core </div>
                        <div className='profile-icon-name-pair'> <FaGolang size={'40px'} color={'#00ADD8'} /> Go </div>
                        <div className='profile-icon-name-pair'> <FaDocker size={'25px'} color={'#1D63ED'} /> Docker </div>
                    </div>
                </div>
           </div>
        </div>
    )
}