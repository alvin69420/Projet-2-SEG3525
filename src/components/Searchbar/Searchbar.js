import React, { useState } from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const fitnessCategories = [
        "Benches",
        "Dumbbells",
        "Kettlebells",
        "Barbells",
        "Plates",
        "Cable Machines",
        "Smith Machines",
        "Leg Machines",
        "Treadmills",
        "Ellipticals",
        "Bikes",
        "Rowers",
        "Climbers",
        "Training",
        "Muscle Building",
        "Fat Loss",
        "Nutrition",
        "Supplements",
        "Chest Exercises",
        "Back Exercises",
        "Arm Exercises",
        "Shoulder Exercises",
        "Leg Exercises"
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        setShowOptions(true); 
    };

    const handleBlur = () => {
        setShowOptions(false); 
    };

    const filteredCategories = fitnessCategories.filter(category =>
        category.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className="search-bar-container">
            <input
                type="search"
                placeholder="Search"
                onChange={handleChange}
                onBlur={handleBlur}
                value={searchInput}
            />
            {showOptions && (
                <div className="search-options">
                    <ul>
                        {filteredCategories.map((category, index) => (
                            <li key={index}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;