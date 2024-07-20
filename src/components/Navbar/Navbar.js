import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from '../Searchbar/Searchbar';
import Button from 'react-bootstrap/Button';
import { DropdownDivider } from 'react-bootstrap';

const Navbar = ({ activePage, setActivePage, itemCount, language, setLanguage }) => {
    
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

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    const translatedText = {
        en: {
            home: 'Home',
            shop: 'Shop',
            weightTraining: 'Weight Training/Strength',
            benches: 'Benches',
            dumbbells: 'Dumbbells',
            kettlebells: 'Kettlebells',
            barbells: 'Barbells',
            plates: 'Plates',
            machines: 'Machines',
            cableMachines: 'Cable Machines',
            smithMachines: 'Smith Machines',
            legMachines: 'Leg Machines',
            cardio: 'Cardio',
            treadmills: 'Treadmills',
            ellipticals: 'Ellipticals',
            bikes: 'Bikes',
            rowers: 'Rowers',
            climbers: 'Climbers',
            exercises: 'Exercises',
            chestExercises: 'Chest Exercises',
            backExercises: 'Back Exercises',
            armExercises: 'Arm Exercises',
            shoulderExercises: 'Shoulder Exercises',
            legExercises: 'Leg Exercises',
            learn: 'Learn',
            training: 'Training',
            muscleBuilding: 'Muscle Building',
            fatLoss: 'Fat Loss',
            nutrition: 'Nutrition',
            supplements: 'Supplements',
            planYourTraining: 'Plan Your Training',
            forum: 'Forum',
            contactUs: 'Contact Us',
            faq: 'FAQ'
        },
        es: {
            home: 'Inicio',
            shop: 'Tienda',
            weightTraining: 'Entrenamiento de Peso/Fuerza',
            benches: 'Bancos',
            dumbbells: 'Pesas',
            kettlebells: 'Pesas Rusas',
            barbells: 'Barras',
            plates: 'Discos',
            machines: 'Máquinas',
            cableMachines: 'Máquinas de Cable',
            smithMachines: 'Máquinas Smith',
            legMachines: 'Máquinas para Piernas',
            cardio: 'Cardio',
            treadmills: 'Cintas de Correr',
            ellipticals: 'Elípticas',
            bikes: 'Bicicletas',
            rowers: 'Remadoras',
            climbers: 'Escaladoras',
            exercises: 'Ejercicios',
            chestExercises: 'Ejercicios de Pecho',
            backExercises: 'Ejercicios de Espalda',
            armExercises: 'Ejercicios de Brazo',
            shoulderExercises: 'Ejercicios de Hombro',
            legExercises: 'Ejercicios de Pierna',
            learn: 'Aprender',
            training: 'Entrenamiento',
            muscleBuilding: 'Desarrollo Muscular',
            fatLoss: 'Pérdida de Grasa',
            nutrition: 'Nutrición',
            supplements: 'Suplementos',
            planYourTraining: 'Planifica tu Entrenamiento',
            forum: 'Foro',
            contactUs: 'Contáctanos',
            faq: 'Preguntas Frecuentes'
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img style={{maxWidth: '125px', height: 'auto'}} src={require("../../images/Logo.png")} alt="Logo" />
            </div>
            <div className="links">
                <Button href="#" className={`nav-link ${activePage === 'Home' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Home', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
                    &nbsp;{translatedText[language].home}
                </Button>
                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Shop')}`} id="nav-dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                        </svg>
                        &nbsp;{translatedText[language].shop}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.ItemText className="dropdown-item-text"><b>{translatedText[language].weightTraining}</b></Dropdown.ItemText>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Benches', e)}>{translatedText[language].benches}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Dumbbells', e)}>{translatedText[language].dumbbells}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Kettlebells', e)}>{translatedText[language].kettlebells}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Barbells', e)}>{translatedText[language].barbells}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Plates', e)}>{translatedText[language].plates}</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.ItemText className="dropdown-item-text"><b>{translatedText[language].machines}</b></Dropdown.ItemText>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Cable Machines', e)}>{translatedText[language].cableMachines}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Smith Machines', e)}>{translatedText[language].smithMachines}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Leg Machines', e)}>{translatedText[language].legMachines}</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.ItemText className="dropdown-item-text"><b>{translatedText[language].cardio}</b></Dropdown.ItemText>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Treadmills', e)}>{translatedText[language].treadmills}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Ellipticals', e)}>{translatedText[language].ellipticals}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Bikes', e)}>{translatedText[language].bikes}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Rowers', e)}>{translatedText[language].rowers}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Climbers', e)}>{translatedText[language].climbers}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Exercises')}`} id="nav-dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                        </svg>
                        &nbsp;{translatedText[language].exercises}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Chest Exercises', e)}>{translatedText[language].chestExercises}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Back Exercises', e)}>{translatedText[language].backExercises}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Arm Exercises', e)}>{translatedText[language].armExercises}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Shoulder Exercises', e)}>{translatedText[language].shoulderExercises}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Leg Exercises', e)}>{translatedText[language].legExercises}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle as="button" className={`nav-link ${handleActiveMenu('Learn')}`} id="nav-dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                        &nbsp;{translatedText[language].learn}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Training', e)}>{translatedText[language].training}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Muscle Building', e)}>{translatedText[language].muscleBuilding}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Fat Loss', e)}>{translatedText[language].fatLoss}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Nutrition', e)}>{translatedText[language].nutrition}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/" onClick={(e) => handleLinkClick('Supplements', e)}>{translatedText[language].supplements}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button href="#" className={`nav-link ${activePage === 'Plan Your Training' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Plan Your Training', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-minus-fill" viewBox="0 0 16 16">
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M6 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
                    </svg>
                    &nbsp;{translatedText[language].planYourTraining}
                </Button>
                <Button href="#" className={`nav-link ${activePage === 'Forum' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Forum', e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                </svg>
                    &nbsp;{translatedText[language].forum}
                </Button>
                <Button href="#" className={`nav-link ${activePage === 'Contact Us' ? 'active' : ''}`} onClick={(e) => handleLinkClick('Contact Us', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    &nbsp;{translatedText[language].contactUs}
                </Button>
                <Button href="#" className={`nav-link ${activePage === 'FAQ' ? 'active' : ''}`} onClick={(e) => handleLinkClick('FAQ', e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                    </svg>
                    &nbsp;{translatedText[language].faq}
                </Button>
            </div>
            <div className="search-bar-container">
                <SearchBar handleSearchClick={handleLinkClick} />
                <div className='cart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                    &nbsp;{`Cart ${itemCount > 0 ? ': ' + itemCount + ' ' + (itemCount === 1 ? 'item' : 'items') : ''}`} 
                </div>
                <p 
                className='mt-3 mx-3' 
                onClick={toggleLanguage}
                style={{cursor: 'pointer'}}
                >
                {`${language === 'en' ? 'EN' : 'ES'}`}
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
