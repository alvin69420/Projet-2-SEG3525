import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const SquatGuide = () => {
    const title = 'Squat Guide (with Barbell)';
    const description = 'The Barbell Squat is a fundamental compound exercise that targets the quadriceps, hamstrings, glutes, and lower back. It is essential for building lower body strength and muscle mass.';
    const instructions = [
        'Stand with your feet shoulder-width apart, with the barbell resting on your upper back and your hands gripping the bar slightly wider than shoulder-width apart.',
        'Keep your chest up, back straight, and engage your core. Slowly lower your body by bending your hips and knees.',
        'Continue lowering until your thighs are parallel to the ground or slightly below. Inhale as you descend.',
        'Push through your heels to stand back up, extending your hips and knees. Exhale as you lift.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/aOzrA4FgnM0?si=7A5HCx1bqoBarqlM';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default SquatGuide;
