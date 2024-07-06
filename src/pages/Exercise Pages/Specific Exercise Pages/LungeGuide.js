import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const LungeGuide = () => {
    const title = 'Lunge Guide (with Dumbbells)';
    const description = 'The Dumbbell Lunge is a unilateral exercise that targets the quadriceps, hamstrings, and glutes. It is effective for building lower body strength, balance, and stability.';
    const instructions = [
        'Stand with your feet together and hold a dumbbell in each hand, arms at your sides.',
        'Step forward with one leg and lower your body until both knees are bent at 90-degree angles. Inhale as you lower.',
        'Ensure your front knee is directly above your ankle and your back knee is hovering just above the ground.',
        'Push through your front heel to return to the starting position. Exhale as you lift.',
        'Repeat for the desired number of repetitions, then switch legs.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/example-lunge-video-url';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default LungeGuide;
