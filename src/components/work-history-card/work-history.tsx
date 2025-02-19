import CapelliIcon from '../../assets/capelli-logo.png';
import { Tag } from '../tag/tag';
import TCWIcon from '../../assets/tcw-logo.png';
import './work-history.css';

import { PiMapPinSimple } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiGraphql } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";

export const WorkHistory = () => {
    return(
        <div className='work-history-container'>
            <div className='work-history-item'>
                <div className='work-history-left-content'>
                    <h2  className='work-history-dates'> Jan 2023 - Present</h2>
                    <h2  className='work-history-location'> New York, NY</h2>
                </div>

                <div className='work-history-job-description'> 
                    <div className='work-history-company'>
                        <img className='work-history-company-logo' src={TCWIcon} alt='Tcw Logo'/>
                        <div className='work-history-company-info'>
                            <p className='work-history-company-name'> The TCW Group </p>
                            <p className='work-history-title'> Software Engineer | Platform Engineering </p>
                        </div>
                    </div>

                    <div className='work-history-job-details'>
                        <p className='work-history-job-details-text'>
                            Redesigned and developed front-end in React Typescript for main developer platform
                        </p>
                        <p className='work-history-job-details-text'>
                            Wrote, Tested and Maintained microservices in Go and .NET
                        </p>
                        <p className='work-history-job-details-text'>
                            Gave Lunch & Learn Presentations for 60-80 people on Gitlab CI/CD and Green Programming
                        </p> 
                    </div>
                    <div className='work-history-tags'>
                        <Tag name='TypeScript' icon={<SiTypescript color={'#3178C6'} size={'25px'} />}/>

                    </div>
                </div>
            </div>

            <div className='work-history-item'>

                <div className='work-history-left-content'>
                    <h2  className='work-history-dates'> Jun 2022 - Jan 2023 </h2>
                    <h2  className='work-history-location'> Los Angeles, CA</h2>
                </div>

                <div className='work-history-job-description'> 
                    <div className='work-history-company'>
                        <img className='work-history-company-logo' src={TCWIcon} alt='Tcw Logo'/>
                        <div className='work-history-company-info'>
                            <p className='work-history-company-name'> The TCW Group </p>
                            <p className='work-history-title'> Software Engineering Intern | Platform Engineering </p>
                        </div>
                    </div>

                    <div className='work-history-job-details'>
                        <p className='work-history-job-details-text'>
                            Wrote React Typescript UI & components for existing platform to allow users to request automated GitLab templated repositories
                        </p>
                        <p className='work-history-job-details-text'>
                            Aided in API design and implementation of .NET service to generate templated Gitlab repositories 
                        </p>
                        <p className='work-history-job-details-text'>
                            Received an extension to continue working on the platform while finishing undergraduate degree
                        </p>
                    </div>
                </div>
            </div>

            <div className='work-history-item'>
                <div className='work-history-left-content'>
                    <h2  className='work-history-dates'> Dec 2021 - Feb 2022 </h2>
                    <h2  className='work-history-location'> Teterboro, NJ </h2>
                </div>
                <div className='work-history-job-description'> 
                    <div className='work-history-company'>
                        <img className='work-history-company-logo' src={CapelliIcon} alt='Capelli Logo'/>
                        <div className='work-history-company-info'>
                            <p className='work-history-company-name'> Capelli Sport </p>
                            <p className='work-history-title'> Web Support Intern </p>
                        </div>
                    </div>
                    <div className='work-history-job-details'>
                        <p className='work-history-job-details-text'>
                            Reviewed and deployed over 200 e-Commerce sites for clients and created new templated pages upon client requests
                        </p>
                        <p className='work-history-job-details-text'>
                            Maintained schedules for edits, stock quantities and order analytics, communicating with sales and marketing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}