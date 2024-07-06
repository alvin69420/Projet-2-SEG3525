import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const DeadliftGuide = () => {
    const title = 'Deadlift Guide';
    const description = 'The Deadlift is a powerful compound exercise that targets multiple muscle groups, including the hamstrings, glutes, lower back, and core. It is essential for building overall strength and muscle mass.';
    const instructions = [
        'Stand with your feet hip-width apart, with the barbell over the middle of your feet. Bend at your hips and knees to grip the bar with hands slightly wider than shoulder-width apart.',
        'Keep your back straight, chest up, and shoulders back. Engage your core and lift the bar by extending your hips and knees simultaneously.',
        'Stand up straight with the barbell, keeping it close to your body. Pause briefly at the top of the movement.',
        'Lower the barbell back to the ground by bending at your hips and knees, maintaining a straight back throughout the movement.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/example-deadlift-video-url';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default DeadliftGuide;
