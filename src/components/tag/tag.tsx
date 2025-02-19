import { JSX } from 'react';
import './tag.css';

export const Tag = (props: {name: string, icon: JSX.Element}) => { 
    return (
        <div className='tag-container'> 
            <div className='tag-icon'> {props.icon} </div>
            <h1 className='tag-title'> {props.name} </h1>
        </div>
    )
} 