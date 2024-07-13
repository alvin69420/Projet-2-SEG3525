import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from '../Searchbar/Searchbar';
import Button from 'react-bootstrap/Button';
import { DropdownDivider } from 'react-bootstrap';

const Navbar = ({ activePage, setActivePage }) => {
    
    const [activeDropdown, setActiveDropdown] = useState('');

    const handleLinkClick = (link, event) => {
        event.preventDefault();
        setActivePage(link);
        switch (link) {
            case 'Benches':
            case 'Dumbbells':
            case 'Kettlebells':
            case 'Barbells':
            case 'Plates':
            case 'Cable Machines':
            case 'Smith Machines':
            case 'Leg Machines':
            case 'Treadmills':
            case 'Ellipticals':
            case 'Bikes':
            case 'Rowers':
                setActiveDropdown('Shop');
                break;
            case 'Chest Exercises':
            case 'Back Exercises':
            case 'Arm Exercises':
            case 'Shoulder Exercises':
            case 'Leg Exercises':
                setActiveDropdown('Exercises');
                break;
            case 'Training':
            case 'Muscle Building':
            case 'Fat Loss':
            case 'Nutrition':
            case 'Supplements':
                setActiveDropdown('Learn');
                break;
            default:
                setActiveDropdown('');
                break;
        }
    };

    const handleActiveMenu = (menu) => {
        return activeDropdown === menu ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <h1>Fitness Fusion</h1>
            <div className="links">
                <Button href="#" className={`nav-link ${activePage === 'Home' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Home', e)}>Home</Button>
                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Shop')}`} id="nav-dropdown">
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
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Exercises')}`} id="nav-dropdown">
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
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Learn')}`} id="nav-dropdown">
                        Learn
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Training', e)}>Training</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Muscle Building', e)}>Muscle Building</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Fat Loss', e)}>Fat Loss</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Nutrition', e)}>Nutrition</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Supplements', e)}>Supplements</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button href="#" className={`nav-link ${activePage === 'Plan Your Training' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Plan Your Training', e)}>Plan Your Training</Button>
                <Button href="#" className={`nav-link ${activePage === 'Forum' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Forum', e)}>Forum</Button>
                <Button href="#" className={`nav-link ${activePage === 'Contact Us' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Contact Us', e)}>Contact Us</Button>
            </div>
            <div className="search-bar-container">
                <SearchBar handleSearchClick={handleLinkClick} />
            </div>
        </nav>
    );
};

export default Navbar;
