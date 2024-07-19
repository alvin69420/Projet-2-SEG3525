import React from 'react';
import SpecificArticle from '../../../components/Exercises and Articles/SpecificArticle';

const TopMuscleBuildingExercises = () => {
    const article = {
        title: 'Top Muscle-Building Exercises You Should Be Doing',
        content: (
            <>
                <p>
                    Building muscle requires a combination of proper nutrition, adequate rest, and a well-structured workout routine. This article highlights some of the top muscle-building exercises that should be a part of your fitness regimen to maximize gains.
                </p>
                <h3>Squats</h3>
                <p>
                    Squats are a fundamental exercise for building lower body strength and muscle mass. They target the quadriceps, hamstrings, glutes, and core, making them a comprehensive workout for the lower half of your body.
                </p>
                <h3>Deadlifts</h3>
                <p>
                    Deadlifts are a powerhouse exercise that targets multiple muscle groups, including the back, glutes, hamstrings, and core. They are excellent for overall strength and muscle development.
                </p>
                <h3>Bench Press</h3>
                <p>
                    The bench press is a staple in any muscle-building workout routine. It primarily targets the chest muscles but also engages the shoulders and triceps, making it an essential exercise for upper body strength.
                </p>
                <h3>Pull-Ups</h3>
                <p>
                    Pull-ups are an effective bodyweight exercise for building upper body strength. They target the back, shoulders, and biceps, and can be modified to increase difficulty as you progress.
                </p>
                <h3>Rows</h3>
                <p>
                    Rowing exercises, such as bent-over rows or seated rows, are crucial for building a strong back and improving posture. They target the upper and middle back, biceps, and shoulders.
                </p>
                <h3>Overhead Press</h3>
                <p>
                    The overhead press is excellent for developing shoulder strength and mass. It also engages the triceps and core, providing a comprehensive upper body workout.
                </p>
                <h3>Lunges</h3>
                <p>
                    Lunges are great for building lower body strength and muscle balance. They target the quads, hamstrings, glutes, and calves, and can be performed with or without weights.
                </p>
                <h3>Dips</h3>
                <p>
                    Dips are a powerful bodyweight exercise that target the triceps, chest, and shoulders. They are excellent for upper body muscle building and can be modified to increase intensity.
                </p>
            </>
        ),
        imageUrl: require('../../../images/TopMuscleBuildingExercisesImage.webp'),
        author: 'Sarah Johnson',
        date: 'February 20, 2022'
    };

    return (
        <div>
            <SpecificArticle
                title={article.title}
                content={article.content}
                imageUrl={article.imageUrl}
                author={article.author}
                date={article.date}
            />
        </div>
    );
};

export default TopMuscleBuildingExercises;
