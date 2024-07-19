import React from 'react';
import SpecificArticle from '../../../components/Exercises and Articles/SpecificArticle';

const MuscleGrowthSupplements = () => {
    const article = {
        title: 'Top Supplements for Muscle Growth',
        content: (
            <>
                <p>
                    Supplements can enhance your muscle growth efforts by providing essential nutrients and supporting your training regimen. This article highlights some of the top supplements that can help you build muscle more effectively.
                </p>
                <h3>Protein Powder</h3>
                <p>
                    Protein powder is a convenient way to increase your protein intake, essential for muscle repair and growth. Whey, casein, and plant-based protein powders are popular choices.
                </p>
                <h3>Creatine</h3>
                <p>
                    Creatine is one of the most researched and effective supplements for muscle growth. It helps increase strength, power, and muscle mass by providing energy to your muscles during high-intensity workouts.
                </p>
                <h3>Branched-Chain Amino Acids (BCAAs)</h3>
                <p>
                    BCAAs can help reduce muscle soreness, improve recovery, and enhance muscle protein synthesis. They are particularly beneficial when taken before or after workouts.
                </p>
                <h3>Beta-Alanine</h3>
                <p>
                    Beta-alanine helps buffer lactic acid in muscles, allowing you to perform more reps and increase workout intensity. This can lead to greater muscle gains over time.
                </p>
                <h3>Fish Oil</h3>
                <p>
                    Fish oil supplements provide essential omega-3 fatty acids that support muscle recovery, reduce inflammation, and promote overall health.
                </p>
            </>
        ),
        imageUrl: require('../../../images/MuscleBuildingSupplementsImage.webp'),
        author: 'Michael Brown',
        date: 'November 12, 2021'
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

export default MuscleGrowthSupplements;
