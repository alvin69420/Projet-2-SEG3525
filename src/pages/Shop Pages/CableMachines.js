import Shop from '../../components/Shop Menus/Shop';

const CableMachines = ({incrementItemCount}) => {
    const allProducts = {

'Cable Machines': [
    { name: 'Cable Crossover Machine', price: 1500, image: require("../../images/Cable-Crossover.jpg") },
    { name: 'Functional Trainer', price: 2000, image: require("../../images/Functional-Trainer.webp") },
    { name: 'Cable Tower', price: 1800, image: require("../../images/Cable-Tower.webp") },
],
'Smith Machines': [
    { name: 'Basic Smith Machine', price: 900, image: require("../../images/Basic-Smith.webp") },
    { name: 'Commercial Smith Machine', price: 1600, image: require("../../images/Commercial-Smith.webp") },
    { name: 'Adjustable Smith Machine', price: 1200, image: require("../../images/Adjustable-Smith.webp") },
],
'Leg Machines': [
    { name: 'Leg Press Machine', price: 1200, image: require("../../images/Leg-Press.jpg") },
    { name: 'Leg Extension Machine', price: 1000, image: require("../../images/Leg-Extension.webp") },
    { name: 'Seated Leg Curl Machine', price: 1100, image: require("../../images/Leg-Curl.jpg") },
],


    };

    const categories = ['Cable Machines', 'Smith Machines', 'Leg Machines'];

    return (
        <Shop defaultActiveItem="Cable Machines" allProducts={allProducts} categories={categories} incrementItemCount={incrementItemCount}/>
    );
}

export default CableMachines;