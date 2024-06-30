/* import React from 'react';
import SearchBar from '../Searchbar/Searchbar';

const Navbar = ({ activePage, setActivePage }) => {

    const handleSetActiveLink = (link) => {
        setActivePage(link);
    };

    return ( 
        <nav className="navbar">
            <h1>Fitness Fusion</h1>
            <div className="links">
                <a href="/" className={activePage === 'home' ? 'active' : ''} onClick={() => handleSetActiveLink('home')}>Home</a>
                <a href="/" className={activePage === 'shop' ? 'active' : ''} onClick={() => handleSetActiveLink('shop')}>Shop</a>
                <a href="/" className={activePage === 'exercises' ? 'active' : ''} onClick={() => handleSetActiveLink('exercises')}>Exercises</a>
                <a href="/" className={activePage === 'learn' ? 'active' : ''} onClick={() => handleSetActiveLink('learn')}>Learn</a>
                <a href="/" className={activePage === 'contact' ? 'active' : ''} onClick={() => handleSetActiveLink('contact')}>Contact Us</a>
            </div>
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </nav>
     );
}
 
export default Navbar; */

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from '../Searchbar/Searchbar';
import { DropdownDivider } from 'react-bootstrap';

const Navbar = ({ activePage, setActivePage }) => {

    const handleLinkClick = (link, event) => {
        event.preventDefault();
        setActivePage(link);
    };

    return ( 
        <nav className="navbar">
            <h1>Fitness Fusion</h1>
            <div className="links">
                <a href="#" className={`nav-link ${activePage === 'home' ? 'active' : ''}`} onClick={(e) => handleLinkClick('home', e)}>Home</a>

                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${activePage === 'shop' ? 'active' : ''}`} id="nav-dropdown">
                        Shop
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.ItemText className="dropdown-item-text"><b>Weight Training/Strength</b></Dropdown.ItemText>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Benches', e)}>Benches</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Dumbbells', e)}>Dumbbells</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Kettlebells', e)}>Kettlebells</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Barbells', e)}>Barbells</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Plates', e)}>Plates</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.ItemText className="dropdown-item-text"><b>Machines</b></Dropdown.ItemText>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Cable Machines', e)}>Cable Machines</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Smith Machines', e)}>Smith Machines</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Leg Machines', e)}>Leg Machines</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.ItemText className="dropdown-item-text"><b>Cardio</b></Dropdown.ItemText>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Treadmills', e)}>Treadmills</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Ellipticals', e)}>Ellipticals</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Bikes', e)}>Bikes</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Rowers', e)}>Rowers</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Climbers', e)}>Climbers</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${activePage === 'Exercises' ? 'active' : ''}`} id="nav-dropdown">
                        Exercises
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Chest Exercises', e)}>Chest Exercises</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Back Exercises', e)}>Back Exercises</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Arm Exercises', e)}>Arm Exercises</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Shoulder Exercises', e)}>Shoulder Exercises</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Leg Exercises', e)}>Leg Exercises</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${activePage === 'Learn' ? 'active' : ''}`} id="nav-dropdown">
                        Learn
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Benches', e)}>Training</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Dumbbells', e)}>Muscle Building</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Kettlebells', e)}>Fat Loss</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Barbells', e)}>Nutrition</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Plates', e)}>Supplements</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <a href="#" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick('contact', e)}>Contact Us</a>
            </div>
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </nav>
     );
}
 
export default Navbar;
