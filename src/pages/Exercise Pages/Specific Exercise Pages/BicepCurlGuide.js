import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const BicepCurlGuide = () => {
    const title = 'Bicep Curl Guide';
    const description = 'The Bicep Curl is a fundamental exercise that targets the biceps muscles in the upper arms. It is effective for building strength and muscle size in the biceps.';
    const instructions = [
        'Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing forward.',
        'Keep your elbows close to your sides and curl the dumbbells up towards your shoulders while exhaling.',
        'Pause briefly at the top of the movement, then lower the dumbbells back to the starting position with control while inhaling.',
        'Ensure your upper arms remain stationary throughout the exercise.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/ykJmrZ5v0Oo?si=CjI7nh97GzGYiryw';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default BicepCurlGuide;
