import Shop from '../../components/Shop Menus/Shop';

const Kettlebells = () => {
    const allProducts = {
        'Benches': [
            { name: 'Flat Bench', price: 100, image: 'replace' },
            { name: 'Incline Bench', price: 150, image: 'replace' },
            { name: 'Decline Bench', price: 120, image: 'replace' },
        ],
        'Dumbbells': [
            { name: '5lb Dumbbells', price: 20, image: 'replace' },
            { name: '10lb Dumbbells', price: 30, image: 'replace' },
            { name: '15lb Dumbbells', price: 40, image: 'replace' },
        ],
        'Kettlebells': [
            { name: '10lb Kettlebell', price: 25, image: 'replace' },
            { name: '20lb Kettlebell', price: 45, image: 'replace' },
            { name: '30lb Kettlebell', price: 60, image: 'replace' },
        ],
        'Barbells': [
            { name: 'Olympic Barbell', price: 200, image: 'replace' },
            { name: 'Standard Barbell', price: 100, image: 'replace' },
            { name: 'Example Barbell', price: 150, image: 'replace' },
        ],
        'Plates': [
            { name: '10lb Plate', price: 10, image: 'replace' },
            { name: '25lb Plate', price: 25, image: 'replace' },
            { name: '45lb Plate', price: 45, image: 'replace' },
        ]
    };

    const categories = ['Benches', 'Dumbbells', 'Kettlebells', 'Barbells', 'Plates'];

    return (
        <Shop defaultActiveItem="Kettlebells" allProducts={allProducts} categories={categories} />
    );
}

export default Kettlebells;