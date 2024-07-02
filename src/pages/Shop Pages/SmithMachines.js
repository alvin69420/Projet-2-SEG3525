import Shop from '../../components/Shop Menus/Shop';

const SmithMachines = () => {
    const allProducts = {
        
        'Cable Machines': [
            { name: 'Cable Machine', price: 100, image: 'replace' },
            { name: 'Cable Machine', price: 150, image: 'replace' },
            { name: 'Cable Machine', price: 120, image: 'replace' },
        ],
        'Smith Machines': [
            { name: 'Smith Machine', price: 25, image: 'replace' },
            { name: 'Smith Machine', price: 45, image: 'replace' },
            { name: 'Smith Machine', price: 60, image: 'replace' },
        ],
        'Leg Machines': [
            { name: 'Leg Machine', price: 20, image: 'replace' },
            { name: 'Leg Machine', price: 30, image: 'replace' },
            { name: 'Leg Machine', price: 40, image: 'replace' },
        ],

    };

    const categories = ['Cable Machines', 'Smith Machines', 'Leg Machines'];

    return (
        <Shop defaultActiveItem="Smith Machines" allProducts={allProducts} categories={categories} />
    );
}

export default SmithMachines;