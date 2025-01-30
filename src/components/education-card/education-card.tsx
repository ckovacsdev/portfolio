import './education-card.css';

export const EducationCard = () => {
    return (
        <div className='education-card-container'>
            <div className='education-card'>
                <div className='education-card-left-content'>
                    <h2  className='education-card-dates'> Class of 2022</h2>
                    <h2  className='education-card-location'> New York, NY</h2>
                </div>

                {/* <div className='work-history-job-description'> 
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
                        <p className='work-history-job-details-text'>
                            Trained and guided interns on team's tech stack and projects
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}