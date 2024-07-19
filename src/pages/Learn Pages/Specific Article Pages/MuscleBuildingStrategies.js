import React from 'react';
import SpecificArticle from '../../../components/Exercises and Articles/SpecificArticle';

const MuscleBuildingStrategies = () => {
    const article = {
        title: 'Effective Strategies for Building Muscle Mass',
        content: (
            <>
                <p>
                    Building muscle mass is a goal for many fitness enthusiasts, but achieving it requires a strategic approach. This article explores some of the most effective strategies to help you build muscle mass and reach your fitness goals.
                </p>
                <h3>Focus on Compound Exercises</h3>
                <p>
                    Compound exercises such as squats, deadlifts, and bench presses engage multiple muscle groups simultaneously. Incorporating these movements into your routine can help maximize muscle growth and strength.
                </p>
                <h3>Progressive Overload</h3>
                <p>
                    To stimulate muscle growth, gradually increase the weight, reps, or intensity of your workouts. Progressive overload ensures that your muscles are constantly challenged and growing.
                </p>
                <h3>Maintain Proper Nutrition</h3>
                <p>
                    Nutrition plays a crucial role in muscle building. Consume a balanced diet rich in protein, healthy fats, and carbohydrates to support muscle repair and growth. Consider incorporating protein-rich foods such as chicken, fish, and legumes into your meals.
                </p>
                <h3>Stay Consistent</h3>
                <p>
                    Consistency is key to building muscle mass. Stick to your workout schedule, maintain a balanced diet, and give your body time to recover between sessions. Over time, you will see significant progress.
                </p>
                <h3>Get Enough Rest</h3>
                <p>
                    Adequate rest is essential for muscle recovery and growth. Ensure you get enough sleep each night and allow your muscles to rest between intense workout sessions to prevent overtraining and injury.
                </p>
            </>
        ),
        imageUrl: require('../../../images/MuscleBuildingStrategiesImage.jpg'),
        author: 'Jane Smith',
        date: 'July 15, 2021'
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

export default MuscleBuildingStrategies;
