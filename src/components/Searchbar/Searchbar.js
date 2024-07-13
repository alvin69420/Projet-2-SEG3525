import React, { useState } from 'react';

const SearchBar = ({handleSearchClick}) => {
    const [searchInput, setSearchInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const Categories = [
        "Home",
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
        // "Chest Exercises",
        // "Back Exercises",
        // "Arm Exercises",
        // "Shoulder Exercises",
        // "Leg Exercises",
        // "Bench Press",
        // "Chest Fly",
        // "Push-Up",
        // "Deadlift",
        // "Pull-Up",
        // "Bent Over Row",
        // "Bicep Curl",
        // "Tricep Extension",
        // "Hammer Curl",
        // "Seated Dumbbell Press",
        // "Dumbbell Lateral Raise",
        // "Seated Barbell Shoulder Press",
        // "Squat",
        // "Lunge",
        // "Leg Press",
        // "A Beginner's Guide to Starting Your Fitness Journey",
        // "The Importance of Strength Training",
        // "How to Create an Effective Workout Plan",  
        // "Effective Strategies for Building Muscle Mass",
        // "Top Muscle-Building Exercises You Should Be Doing",
        // "Common Mistakes to Avoid When Trying to Build Muscle",
        // "Effective Fat Loss Strategies for Lasting Results",
        // "The Role of Cardio in Fat Loss",
        // "Debunking Myths About Fat Loss",
        // "Essential Nutrition Tips for a Healthy Lifestyle",
        // "The Importance of Macronutrients in Your Diet",
        // "How To Meal Prep For Success",
        // "A Beginner's Guide to Supplements",
        // "Top Supplements for Muscle Growth",
        // "Are Supplements Necessary for Fat Loss?",
        "Plan Your Training",
        "Forum",
        "Contact Us",
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        setShowOptions(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowOptions(false);
        }, 200);
    };

    const handleOptionClick = (option) => {
        setSearchInput(option);
        setShowOptions(false);
    };

    const handleSearchIconClick = () => {
        const matchedCategory = Categories.find(category => 
            category.toLowerCase() === searchInput.toLowerCase()
        );
        if (matchedCategory) {
            var e = { preventDefault: () => {} };
            handleSearchClick(searchInput, e);
            setSearchInput('');
        } else {
            alert('This page does not exist');
        }
    };

    const filteredCategories = Categories.filter(category =>
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
                            <li key={index} onClick={() => handleOptionClick(category)}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <img 
                src={require("../../images/search-icon.webp")} 
                alt="search icon" 
                className='ms-3' 
                id='search-icon'
                onClick={handleSearchIconClick}
            />
        </div>
    );
};

export default SearchBar;
