import NYULogo from '../../assets/nyu_logo.png';
import './education-card.css';

export const EducationCard = () => {
    return (
        <div className='education-card-container'>
            <div className='education-card'>
                <div className='education-card-left-content'>
                    <h2  className='education-card-dates'> Class of 2022</h2>
                    <h2  className='education-card-location'> New York, NY</h2>
                </div>

                <div className='education-card-description'> 
                    <div className='education-card-school'>
                        <img className='education-card-school-logo' src={NYULogo} alt='NYU Logo'/>
                        <div className='education-card-info'>
                            <p className='education-card-school-name'> New York University </p>
                            <p className='education-card-degree-title'> B.A in Computer Science </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}