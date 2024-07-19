import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const SeatedDumbbellPressGuide = () => {
    const title = 'Dumbbell Lateral Raise Guide';
    const description = 'The Dumbbell Lateral Raise is an effective exercise for targeting the lateral deltoids, which are the muscles on the sides of your shoulders. It helps to improve shoulder width and definition, making it a popular exercise for building strong and sculpted shoulders.';
    const instructions = [
        'Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.',
        'Keep your back straight, engage your core, and slightly bend your knees.',
        'Raise your arms out to the sides, keeping a slight bend in your elbows, until they are parallel to the floor. Exhale as you lift the weights.',
        'Pause for a moment at the top of the movement, then slowly lower the dumbbells back to the starting position.',
        'Repeat for the desired number of repetitions.'
    ];
    const videoUrl = 'https://www.youtube.com/embed/g_7iXXBrCkY?si=Or7264rjCtHj1U_3'; 

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