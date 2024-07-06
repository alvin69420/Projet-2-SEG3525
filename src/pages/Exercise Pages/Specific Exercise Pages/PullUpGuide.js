import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const PullUpGuide = () => {
    const title = 'Pull-Up Guide';
    const description = 'The Pull-Up is a classic bodyweight exercise that targets the upper back, shoulders, and biceps. It is excellent for building upper body strength and improving muscle definition.';
    const instructions = [
        'Grip the pull-up bar with your palms facing away from you and your hands slightly wider than shoulder-width apart.',
        'Hang with your arms fully extended and your body straight. Engage your core and pull your chest up to the bar by contracting your upper back and biceps.',
        'Pause briefly at the top of the movement, with your chin above the bar.',
        'Lower yourself back to the starting position with control, fully extending your arms.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/example-pullup-video-url';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default PullUpGuide;
