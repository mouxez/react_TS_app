import React from 'react';

export const Navbar: React.FC = () => (
   <nav>
        <div className="nav-wrapper purple px1">
            <a href="/" className="brand-logo">React + TypeScript App</a>
             <ul className="right hide-on-med-and-down">
                <li><a href="/">ToDo List</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>
)
