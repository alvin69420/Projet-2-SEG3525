import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const ChestFlyGuide = () => {
    const title = 'Chest Fly Guide';
    const description = 'The Chest Fly is an effective exercise for isolating the chest muscles, specifically the pectorals. It helps to improve chest strength, muscle definition, and flexibility.';
    const instructions = [
        'Lie on a flat bench with a dumbbell in each hand, palms facing each other, and arms extended above your chest.',
        'Keep a slight bend in your elbows and lower the dumbbells out to the sides in a wide arc until they are level with your chest. Inhale as you lower the weights.',
        'Maintain the slight bend in your elbows as you raise the dumbbells back to the starting position by squeezing your chest muscles. Exhale as you lift the weights.',
        'Pause briefly at the top of the movement, then repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/HBzfHrehHj4?si=7_EgIrPafzb_kvfq';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default ChestFlyGuide;
