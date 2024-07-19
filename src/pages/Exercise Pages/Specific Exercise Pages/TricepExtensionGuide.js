import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const TricepExtensionGuide = () => {
    const title = 'Tricep Extension Guide';
    const description = 'The Tricep Extension is an isolation exercise that targets the triceps muscles at the back of the upper arms. It is effective for building strength and muscle definition in the triceps.';
    const instructions = [
        'Stand with your feet shoulder-width apart and hold a dumbbell with both hands, palms facing upward.',
        'Lift the dumbbell overhead with your arms fully extended.',
        'Keep your upper arms close to your head and lower the dumbbell behind your head by bending your elbows.',
        'Pause briefly at the bottom of the movement, then extend your arms to lift the dumbbell back to the starting position.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/-Vyt2QdsR7E?si=q3AaDFmBjNx7NK3-';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default TricepExtensionGuide;
