import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const SeatedDumbbellPressGuide = () => {
    const title = 'Seated Dumbbell Press Guide';
    const description = 'The Seated Dumbbell Press is a fundamental exercise aimed at building strength and size in the shoulders. It specifically targets the deltoid muscles, along with secondary engagement of the triceps and upper chest. Performing this exercise correctly can enhance shoulder stability, improve posture, and contribute to overall upper body strength.';
    const instructions = [
        'Sit on an upright bench with back support. Ensure the bench is set at a 90-degree angle to support your back properly. Hold a dumbbell in each hand and rest them on your thighs, palms facing each other.',
        'Using your thighs to help, lift the dumbbells up to shoulder height. Rotate your wrists so that your palms face forward. This is your starting position. Keep your back straight, core engaged, and feet flat on the floor.',
        'Inhale and brace your core. Press the dumbbells upward until your arms are fully extended above your head. Ensure you do not lock your elbows at the top. Exhale as you press the weights up. Pause for a moment at the top of the movement.',
        'Slowly lower the dumbbells back to the starting position at shoulder height, controlling the movement. This allows for maximum muscle engagement and reduces the risk of injury. Inhale as you lower the weights.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/qEwKCR5JCog?si=tBC5An6Q7dFUOQRc'; 

    return (
        <SpecificExercise
            title={title} 
            description={description} 
            instructions={instructions} 
            videoUrl={videoUrl} 
        />
    );
};

export default SeatedDumbbellPressGuide;