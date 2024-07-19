import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const BentOverRowGuide = () => {
    const title = 'Bent Over Row Guide';
    const description = 'The Bent Over Row with a barbell is a compound exercise that targets the muscles of the upper back, shoulders, and biceps. It is essential for building a strong and muscular back.';
    const instructions = [
        'Stand with your feet shoulder-width apart and grip the barbell with hands slightly wider than shoulder-width apart, palms facing down.',
        'Bend your knees slightly and hinge forward at the hips, keeping your back straight and your core engaged.',
        'Pull the barbell towards your lower ribcage by squeezing your shoulder blades together and bending your elbows.',
        'Pause briefly at the top of the movement, then lower the barbell back to the starting position with control.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/FWJR5Ve8bnQ?si=8jEXkVekPyn1a4dd';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default BentOverRowGuide;
