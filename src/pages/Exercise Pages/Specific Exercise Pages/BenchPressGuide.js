import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const BenchPressGuide = () => {
    const title = 'Bench Press Guide';
    const description = 'The Bench Press is a fundamental exercise for building upper body strength, particularly targeting the chest, shoulders, and triceps. It is one of the most effective exercises for increasing muscle mass and strength in the upper body.';
    const instructions = [
        'Lie on a flat bench with your feet firmly planted on the ground and your back pressed against the bench.',
        'Grip the barbell with hands slightly wider than shoulder-width apart, palms facing away from your body.',
        'Lift the barbell off the rack and hold it directly above your chest with arms fully extended.',
        'Lower the barbell slowly to your chest, keeping your elbows at about a 45-degree angle to your body. Inhale as you lower the weight.',
        'Pause briefly when the barbell is close to your chest, then press the barbell back up to the starting position by extending your arms. Exhale as you push the weight up.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/SCVCLChPQFY?si=dz7WGRHqAIB6guOG'; 

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default BenchPressGuide;