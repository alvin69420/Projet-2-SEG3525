import Shop from '../../components/Shop Menus/Shop';

const Benches = ({incrementItemCount}) => {
    const allProducts = {
        'Benches': [
            { name: 'Flat Bench', price: 200, image: require("../../images/Flat-Bench.webp"), alt: 'Flat Bench' },
            { name: 'Adjustable Incline Bench', price: 300, image: require("../../images/Adjustable-Incline-Bench.avif"), alt: 'Adjustable Incline Bench' },
            { name: 'Adjustable Decline Bench', price: 250, image: require("../../images/Adjustable-Decline-Bench.webp"), alt: 'Adjustable Decline Bench' },
        ],
        'Dumbbells': [
            { name: '5lb Dumbbells (Pair)', price: 50, image: require("../../images/5-lb-Dumbbells.jpg"), alt: '5lb Dumbbells (Pair)' },
            { name: '10lb Dumbbells (Pair)', price: 70, image: require("../../images/10-lb-Dumbbells.jpg"), alt: '10lb Dumbbells (Pair)' },
            { name: '15lb Dumbbells (Pair)', price: 90, image: require("../../images/15-lb-Dumbbells.jpg"), alt: '15lb Dumbbells (Pair)' },
        ],
        'Kettlebells': [
            { name: '10lb Kettlebell', price: 35, image: require("../../images/10-lb-Kettlebell.webp"), alt: '10lb Kettlebell' },
            { name: '20lb Kettlebell', price: 55, image: require("../../images/20-lb-Kettlebell.webp"), alt: '20lb Kettlebell' },
            { name: '30lb Kettlebell', price: 75, image: require("../../images/30-lb-Kettlebell.webp"), alt: '30lb Kettlebell' },
        ],
        'Barbells': [
            { name: 'Olympic Barbell', price: 300, image: require("../../images/Olympic-Barbell.webp"), alt: 'Olympic Barbell' },
            { name: 'Standard Barbell', price: 150, image: require("../../images/Standard-Barbell.webp"), alt: 'Standard Barbell' },
            { name: 'Hex Bar', price: 200, image: require("../../images/Hex-Bar.jpg"), alt: 'Hex Bar' },
        ],
        'Plates': [
            { name: '10lb Plate', price: 30, image: require("../../images/10-lb-Plate.jpg"), alt: '10lb Plate' },
            { name: '25lb Plate', price: 60, image: require("../../images/25-lb-Plate.jpg"), alt: '25lb Plate' },
            { name: '45lb Plate', price: 100, image: require("../../images/45-lb-Plate.webp"), alt: '45lb Plate' },
        ]
    };

    const categories = ['Benches', 'Dumbbells', 'Kettlebells', 'Barbells', 'Plates'];

    return (
        <Shop defaultActiveItem="Benches" allProducts={allProducts} categories={categories} incrementItemCount={incrementItemCount} />
    );
}

export default Benches;
