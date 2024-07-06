import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const PushUpGuide = () => {
    const title = 'Push-Up Guide';
    const description = 'The Push-Up is a classic bodyweight exercise that targets the chest, shoulders, triceps, and core muscles. It is an excellent exercise for building upper body strength and endurance.';
    const instructions = [
        'Start in a plank position with your hands placed slightly wider than shoulder-width apart, arms fully extended, and body forming a straight line from head to heels.',
        'Keep your core engaged and lower your body by bending your elbows until your chest is close to the floor. Inhale as you lower yourself.',
        'Pause briefly at the bottom of the movement, then push yourself back up to the starting position by extending your arms. Exhale as you push up.',
        'Ensure your body remains in a straight line throughout the movement, without sagging your hips or arching your back.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/example-push-up-video-url';

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default PushUpGuide;
