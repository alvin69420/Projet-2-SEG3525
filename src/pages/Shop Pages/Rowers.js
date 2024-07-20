import Shop from '../../components/Shop Menus/Shop';

const Rowers = ({incrementItemCount}) => {
    const allProducts = {
        'Treadmills': [
            { name: 'Basic Treadmill', price: 800, image: require("../../images/Basic-Treadmill.jpg"), alt: 'Basic Treadmill' },
            { name: 'Commercial Treadmill', price: 1500, image: require("../../images/Commercial-Treadmill.webp"), alt: 'Commercial Treadmill' },
            { name: 'Foldable Treadmill', price: 1200, image: require("../../images/Foldable-Treadmill.webp"), alt: 'Foldable Treadmill' },
        ],
        'Ellipticals': [
            { name: 'Standard Elliptical', price: 800, image: require("../../images/Standard-Elliptical.jpg"), alt: 'Standard Elliptical' },
            { name: 'Elliptical Trainer', price: 1200, image: require("../../images/Elliptical-Trainer.webp"), alt: 'Elliptical Trainer' },
            { name: 'Cross Trainer', price: 1500, image: require("../../images/Cross-Trainer.webp"), alt: 'Cross Trainer' },
        ],
        'Bikes': [
            { name: 'Exercise Bike', price: 500, image: require("../../images/Exercise-Bike.jpg"), alt: 'Exercise Bike' },
            { name: 'Stationary Bike', price: 800, image: require("../../images/Stationary-Bike.jpg"), alt: 'Stationary Bike' },
            { name: 'Recumbent Bike', price: 1000, image: require("../../images/Recumbant-Bike.webp"), alt: 'Recumbent Bike' },
        ],
        'Rowers': [
            { name: 'Rowing Machine', price: 1000, image: require("../../images/Rowing-Machine.webp"), alt: 'Rowing Machine' },
            { name: 'Water Rower', price: 1200, image: require("../../images/Water-Rower.jpg"), alt: 'Water Rower' },
            { name: 'Magnetic Rower', price: 1500, image: require("../../images/Magnetic-Rower.webp"), alt: 'Magnetic Rower' },
        ],
        'Climbers': [
            { name: 'Vertical Climber', price: 300, image: require("../../images/Vertical-Climber.jpg"), alt: 'Vertical Climber' },
            { name: 'Stair Climber', price: 600, image: require("../../images/Stair-Climber.webp"), alt: 'Stair Climber' },
            { name: 'Stepper Machine', price: 800, image: require("../../images/Stepper-Machine.jpeg"), alt: 'Stepper Machine' },
        ]
    };

    const categories = ['Treadmills', 'Ellipticals', 'Bikes', 'Rowers', 'Climbers'];

    return (
        <Shop defaultActiveItem="Rowers" allProducts={allProducts} categories={categories} incrementItemCount={incrementItemCount}/>
    );
}

export default Rowers;