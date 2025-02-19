import './tag.css';

export const Tag = (props: {name: string}) => { 
    return (
        <div className='tag-container'> 
            <h1 className='tag-title'> {props.name} </h1>
        </div>
    )
} 