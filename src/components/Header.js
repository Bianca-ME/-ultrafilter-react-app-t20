import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div className='header'>
            <NavLink to='/about'>Despre Ultrafilter</NavLink>
        </div>
    )
}