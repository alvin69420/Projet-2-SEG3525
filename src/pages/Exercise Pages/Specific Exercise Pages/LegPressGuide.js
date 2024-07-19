import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const LegPressGuide = () => {
    const title = 'Leg Press Guide';
    const description = 'The Leg Press is a machine-based exercise that targets the quadriceps, hamstrings, and glutes. It is excellent for building lower body strength and muscle mass while minimizing stress on the lower back.';
    const instructions = [
        'Sit on the leg press machine with your feet shoulder-width apart on the platform, and your knees bent at a 90-degree angle.',
        'Grip the handles for stability and press the platform away by extending your knees and hips. Exhale as you push.',
        'Continue pressing until your legs are fully extended but not locked out.',
        'Slowly lower the platform back to the starting position by bending your knees and hips. Inhale as you lower.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/IZxyjW7MPJQ?si=Ky5TYSJ3eVI74iQH';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default LegPressGuide;
