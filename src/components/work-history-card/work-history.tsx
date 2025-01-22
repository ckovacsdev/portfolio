import TCWIcon from '../../assets/tcw-logo.png';
import './work-history.css';

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
                        <img className='work-history-company-logo' src={TCWIcon}/>
                        <div className='work-history-company-info'>
                            <p className='work-history-company-name'> The TCW Group </p>
                            <p className='work-history-title'> Software Engineer | Platform Engineering Team </p>
                        </div>
                    </div>

                    <div className='work-history-job-details'>
                        <p className='work-history-job-details-text'>
                          Developed React Typescript front-end for Platform Engineering's main developer platform
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
        </div>
    )
}