import TCWIcon from '../../assets/tcw-logo.png';
import CapelliIcon from '../../assets/capelli-logo.png'
import './work-history.css';

export const WorkHistory = () => {
    return(
        <div>
            <h1 className='work-experience-header'> Work Experience </h1>
            <div className='work-history-container'>
                <div className='work-history-item'>

                    <div className='work-history-left-content'>
                        <h2  className='work-history-dates'> Jan 2023 - Present</h2>
                        <h2  className='work-history-location'> New York, NY</h2>
                    </div>

                    <div className='work-history-job-description'> 
                        <div className='work-history-company'>
                            <img className='work-history-company-logo' src={TCWIcon}/>
                            <div className='work-history-company-info'>
                                <p className='work-history-company-name'> The TCW Group </p>
                                <p className='work-history-title'> Software Engineer | Platform Engineering </p>
                            </div>
                        </div>

                        <div className='work-history-job-details'>
                            <p className='work-history-job-details-text'>
                                Redesigned and developed front-end in React Typescript for Platform Engineering's main developer platform
                            </p>
                            <p className='work-history-job-details-text'>
                                Wrote, Tested and Maintained microservices in Go and .NET and a GraphQL service to connect to front-end
                            </p>
                            <p className='work-history-job-details-text'>
                                Gave multiple Lunch & Learn Presentations for 60-80 people on Git & Gitlab, CI/CD and Green Programming
                            </p>
                            <p className='work-history-job-details-text'>
                                Trained interns on team's tech stack with guidance to help them complete their summer project
                            </p>
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
                            <img className='work-history-company-logo' src={TCWIcon}/>
                            <div className='work-history-company-info'>
                                <p className='work-history-company-name'> The TCW Group </p>
                                <p className='work-history-title'> Software Engineering Intern | Platform Engineering </p>
                            </div>
                        </div>

                        <div className='work-history-job-details'>
                            <p className='work-history-job-details-text'>
                                Wrote React Typescript components for existing platform aiding in project to allow users to request automated GitLab templated repositories
                            </p>
                            <p className='work-history-job-details-text'>
                                Aided in API design and implementation of back-end .NET service to accept user data from front end, generate a repository, and return data to client 
                            </p>
                            <p className='work-history-job-details-text'>
                                Received an extension to continue working on the platform while finishing undergraduate degree, with a return offer upon graduation
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
                            <img className='work-history-company-logo' src={CapelliIcon}/>
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
        </div>

    )
}