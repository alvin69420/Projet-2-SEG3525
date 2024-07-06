import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const HammerCurlGuide = () => {
    const title = 'Hammer Curl Guide';
    const description = 'The Hammer Curl is a variation of the bicep curl that targets the brachialis muscle, which lies beneath the biceps. It helps to build overall arm strength and size.';
    const instructions = [
        'Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.',
        'Keep your elbows close to your sides and curl the dumbbells up towards your shoulders while maintaining the palms-facing-inward grip.',
        'Pause briefly at the top of the movement, then lower the dumbbells back to the starting position with control.',
        'Ensure your upper arms remain stationary throughout the exercise.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/example-hammer-curl-video-url';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default HammerCurlGuide;
