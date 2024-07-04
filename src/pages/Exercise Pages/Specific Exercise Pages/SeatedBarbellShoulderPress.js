import React from 'react';
import SpecificExercise from '../../../components/Exercises and Articles/SpecificExercise';

const SeatedBarbellShoulderPressGuide = () => {
    const title = 'Seated Barbell Shoulder Press Guide';
    const description = 'The Seated Barbell Shoulder Press is an effective compound exercise that primarily targets the deltoid muscles while also engaging the triceps and upper chest. It helps in developing overall shoulder strength and stability, which are crucial for various upper body movements.';
    const instructions = [
        'Sit on an upright bench with back support, ensuring it is set at a 90-degree angle to support your back properly. Grip the barbell with an overhand grip (palms facing forward) slightly wider than shoulder-width apart.',
        'Lift the barbell off the rack or have a spotter help you with it. Hold it at shoulder height with your elbows bent and palms facing forward. This is your starting position. Keep your back straight, core engaged, and feet flat on the floor.',
        'Inhale and brace your core. Press the barbell upward until your arms are fully extended above your head. Avoid locking your elbows at the top of the movement. Exhale as you press the weight up. Pause briefly at the top.',
        'Lower the barbell slowly back to the starting position at shoulder height, controlling the descent. This ensures maximum muscle engagement and reduces the risk of injury. Inhale as you lower the barbell.',
    ];
    const videoUrl = 'https://www.youtube.com/embed/example-video-url';

    return (
        <SpecificExercise
            title={title}
            description={description}
            instructions={instructions}
            videoUrl={videoUrl}
        />
    );
};

export default SeatedBarbellShoulderPressGuide;
