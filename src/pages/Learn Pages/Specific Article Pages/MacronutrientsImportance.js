import React from 'react';
import SpecificArticle from '../../../components/Exercises and Articles/SpecificArticle';

const MacronutrientsImportance = () => {
    const article = {
        title: 'The Importance of Macronutrients in Your Diet',
        content: (
            <>
                <p>
                    Macronutrients are the nutrients that your body needs in large amounts to function properly. This article explains the importance of macronutrients and how to balance them in your diet for optimal health.
                </p>
                <h3>Understanding Macronutrients</h3>
                <p>
                    Macronutrients include proteins, carbohydrates, and fats. Each plays a unique role in your body, from providing energy to supporting growth and repair.
                </p>
                <h3>Proteins</h3>
                <p>
                    Proteins are essential for muscle growth and repair. Incorporate protein-rich foods such as lean meats, fish, eggs, and plant-based sources like beans and tofu into your diet.
                </p>
                <h3>Carbohydrates</h3>
                <p>
                    Carbohydrates are your body’s primary energy source. Choose complex carbs such as whole grains, fruits, and vegetables to provide sustained energy and support overall health.
                </p>
                <h3>Fats</h3>
                <p>
                    Healthy fats are crucial for brain function, hormone production, and overall health. Include sources of healthy fats such as avocados, nuts, seeds, and olive oil in your meals.
                </p>
                <h3>Balancing Macronutrients</h3>
                <p>
                    Aim for a balanced diet that includes a mix of proteins, carbohydrates, and fats. Adjust your intake based on your activity level, fitness goals, and individual nutritional needs.
                </p>
                <h3>Consulting a Nutritionist</h3>
                <p>
                    If you’re unsure about how to balance your macronutrient intake, consider consulting with a nutritionist or dietitian. They can help create a personalized plan that meets your specific needs.
                </p>
            </>
        ),
        imageUrl: require('../../../images/placeholder-image.png'),
        author: 'Emily Johnson',
        date: 'October 5, 2021'
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

export default MacronutrientsImportance;
