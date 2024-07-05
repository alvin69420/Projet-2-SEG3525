import Shop from '../../components/Shop Menus/Shop';

const Bikes = () => {
    const allProducts = {
        'Treadmills': [
            { name: 'Basic Treadmill', price: 800, image: require("../../images/Basic-Treadmill.jpg") },
            { name: 'Commercial Treadmill', price: 1500, image: require("../../images/Commercial-Treadmill.webp") },
            { name: 'Foldable Treadmill', price: 1200, image: require("../../images/Foldable-Treadmill.webp") },
        ],
        'Ellipticals': [
            { name: 'Standard Elliptical', price: 800, image: require("../../images/Standard-Elliptical.jpg") },
            { name: 'Elliptical Trainer', price: 1200, image: require("../../images/Elliptical-Trainer.webp") },
            { name: 'Cross Trainer', price: 1500, image: require("../../images/Cross-Trainer.webp") },
        ],
        'Bikes': [
            { name: 'Exercise Bike', price: 500, image: require("../../images/Exercise-Bike.jpg") },
            { name: 'Stationary Bike', price: 800, image: require("../../images/Stationary-Bike.jpg") },
            { name: 'Recumbent Bike', price: 1000, image: require("../../images/Recumbant-Bike.webp") },
        ],
        'Rowers': [
            { name: 'Rowing Machine', price: 1000, image: require("../../images/Rowing-Machine.webp") },
            { name: 'Water Rower', price: 1200, image: require("../../images/Water-Rower.jpg") },
            { name: 'Magnetic Rower', price: 1500, image: require("../../images/Magnetic-Rower.webp") },
        ],
        'Climbers': [
            { name: 'Vertical Climber', price: 300, image: require("../../images/Vertical-Climber.jpg") },
            { name: 'Stair Climber', price: 600, image: require("../../images/Stair-Climber.webp") },
            { name: 'Stepper Machine', price: 800, image: require("../../images/Stepper-Machine.jpeg") },
        ]
    };

    const categories = ['Treadmills', 'Ellipticals', 'Bikes', 'Rowers', 'Climbers'];

    return (
        <Shop defaultActiveItem="Bikes" allProducts={allProducts} categories={categories} />
    );
}

export default Bikes;