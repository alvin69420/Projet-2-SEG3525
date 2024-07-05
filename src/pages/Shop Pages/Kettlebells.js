import Shop from '../../components/Shop Menus/Shop';

const Kettlebells = () => {
    const allProducts = {
        'Benches': [
            { name: 'Flat Bench', price: 200, image: require("../../images/Flat-Bench.webp") },
            { name: 'Adjustable Incline Bench', price: 300, image: require("../../images/Adjustable-Incline-Bench.avif") },
            { name: 'Adjustable Decline Bench', price: 250, image: require("../../images/Adjustable-Decline-Bench.webp") },
        ],
        'Dumbbells': [
            { name: '5lb Dumbbells (Pair)', price: 50, image: require("../../images/5-lb-Dumbbells.jpg") },
            { name: '10lb Dumbbells (Pair)', price: 70, image: require("../../images/10-lb-Dumbbells.jpg") },
            { name: '15lb Dumbbells (Pair)', price: 90, image: require("../../images/15-lb-Dumbbells.jpg") },
        ],
        'Kettlebells': [
            { name: '10lb Kettlebell', price: 35, image: require("../../images/10-lb-Kettlebell.webp") },
            { name: '20lb Kettlebell', price: 55, image: require("../../images/20-lb-Kettlebell.webp") },
            { name: '30lb Kettlebell', price: 75, image: require("../../images/30-lb-Kettlebell.webp") },
        ],
        'Barbells': [
            { name: 'Olympic Barbell', price: 300, image: require("../../images/Olympic-Barbell.webp") },
            { name: 'Standard Barbell', price: 150, image: require("../../images/Standard-Barbell.webp") },
            { name: 'Hex Bar', price: 200, image: require("../../images/Hex-Bar.jpg") },
        ],
        'Plates': [
            { name: '10lb Plate', price: 30, image: require("../../images/10-lb-Plate.jpg") },
            { name: '25lb Plate', price: 60, image: require("../../images/25-lb-Plate.jpg") },
            { name: '45lb Plate', price: 100, image: require("../../images/45-lb-Plate.webp") },
        ]
    };

    const categories = ['Benches', 'Dumbbells', 'Kettlebells', 'Barbells', 'Plates'];

    return (
        <Shop defaultActiveItem="Kettlebells" allProducts={allProducts} categories={categories} />
    );
}

export default Kettlebells;