import Shop from '../../components/Shop Menus/Shop';

const Rowers = () => {
    const allProducts = {
        'Treadmills': [
            { name: 'Treadmill', price: 100, image: 'replace' },
            { name: 'Treadmill', price: 150, image: 'replace' },
            { name: 'Treadmill', price: 120, image: 'replace' },
        ],
        'Ellipticals': [
            { name: 'Elliptical', price: 20, image: 'replace' },
            { name: 'Elliptical', price: 30, image: 'replace' },
            { name: 'Elliptical', price: 40, image: 'replace' },
        ],
        'Bikes': [
            { name: 'Bike', price: 25, image: 'replace' },
            { name: 'Bike', price: 45, image: 'replace' },
            { name: 'Bike', price: 60, image: 'replace' },
        ],
        'Rowers': [
            { name: 'Rower', price: 200, image: 'replace' },
            { name: 'Rower', price: 100, image: 'replace' },
            { name: 'Rower', price: 150, image: 'replace' },
        ],
        'Climbers': [
            { name: 'Climber', price: 10, image: 'replace' },
            { name: 'Climber', price: 25, image: 'replace' },
            { name: 'Climber', price: 45, image: 'replace' },
        ]
    };

    const categories = ['Treadmills', 'Ellipticals', 'Bikes', 'Rowers', 'Climbers'];

    return (
        <Shop defaultActiveItem="Rowers" allProducts={allProducts} categories={categories} />
    );
}

export default Rowers;