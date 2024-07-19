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
                <Button href="#" className={`nav-link ${activePage === 'Home' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Home', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
                    &nbsp;Home
                    </Button>
                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Shop')}`} id="nav-dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                        </svg>
                        &nbsp;Shop
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

                {/* <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Shop')}`} id="nav-dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                        </svg>
                        &nbsp;Shop
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        
                        <DropdownButton drop='end' title={<b>Weight Training/Strength</b>}>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Benches', e)}>Benches</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Dumbbells', e)}>Dumbbells</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Kettlebells', e)}>Kettlebells</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Barbells', e)}>Barbells</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Plates', e)}>Plates</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton drop='end' title={<b>Machines</b>}>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Cable Machines', e)}>Cable Machines</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Smith Machines', e)}>Smith Machines</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Leg Machines', e)}>Leg Machines</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton drop='end' title={<b>Cardio</b>}>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Treadmills', e)}>Treadmills</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Ellipticals', e)}>Ellipticals</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Bikes', e)}>Bikes</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Rowers', e)}>Rowers</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Climbers', e)}>Climbers</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown.Menu>
                </Dropdown> */}

                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Exercises')}`} id="nav-dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                        </svg>
                        &nbsp;Exercises
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                        &nbsp;Learn
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Training', e)}>Training</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Muscle Building', e)}>Muscle Building</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Fat Loss', e)}>Fat Loss</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Nutrition', e)}>Nutrition</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Supplements', e)}>Supplements</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button href="#" className={`nav-link ${activePage === 'Plan Your Training' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Plan Your Training', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-minus-fill" viewBox="0 0 16 16">
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M6 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
                    </svg>
                    &nbsp;Plan Your Training
                </Button>
                <Button href="#" className={`nav-link ${activePage === 'Forum' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Forum', e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                </svg>
                    &nbsp;Forum
                </Button>
                <Button href="#" className={`nav-link ${activePage === 'Contact Us' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Contact Us', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    &nbsp;Contact Us
                </Button>
            </div>
            <div className="search-bar-container">
                <SearchBar handleSearchClick={handleLinkClick} />
                <div className='cart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                    &nbsp;Cart
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
