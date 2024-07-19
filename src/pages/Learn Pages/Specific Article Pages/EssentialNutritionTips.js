import React from 'react';
import SpecificArticle from '../../../components/Exercises and Articles/SpecificArticle';

const EssentialNutritionTips = () => {
    const article = {
        title: 'Essential Nutrition Tips for a Healthy Lifestyle',
        content: (
            <>
                <p>
                    Nutrition plays a crucial role in overall health and well-being. Adopting healthy eating habits can enhance your energy levels, support your fitness goals, and improve your quality of life. This article provides essential nutrition tips to help you maintain a healthy lifestyle.
                </p>
                <h3>Eat a Balanced Diet</h3>
                <p>
                    Ensure your diet includes a variety of foods from all the major food groups: fruits, vegetables, lean proteins, whole grains, and healthy fats. A balanced diet provides the necessary nutrients your body needs to function optimally.
                </p>
                <h3>Stay Hydrated</h3>
                <p>
                    Drinking enough water is vital for overall health. Aim to drink at least 8 cups of water a day, more if you're active or live in a hot climate. Proper hydration helps with digestion, energy levels, and skin health.
                </p>
                <h3>Limit Processed Foods</h3>
                <p>
                    Processed foods often contain high levels of added sugars, unhealthy fats, and sodium. Try to limit your intake of processed foods and focus on whole, minimally processed foods to support your health and wellness.
                </p>
                <h3>Include Protein in Every Meal</h3>
                <p>
                    Protein is essential for muscle repair, growth, and overall health. Include a source of lean protein, such as chicken, fish, beans, or tofu, in every meal to help keep you feeling full and satisfied.
                </p>
                <h3>Eat Plenty of Fruits and Vegetables</h3>
                <p>
                    Fruits and vegetables are rich in vitamins, minerals, and antioxidants that support overall health. Aim to fill half your plate with fruits and vegetables at each meal to ensure you're getting a variety of nutrients.
                </p>
                <h3>Practice Portion Control</h3>
                <p>
                    Being mindful of portion sizes can help prevent overeating. Use smaller plates, pay attention to hunger and fullness cues, and avoid eating directly from large packages to better manage portion sizes.
                </p>
                <h3>Plan Your Meals</h3>
                <p>
                    Planning your meals in advance can help you make healthier choices and avoid last-minute, less nutritious options. Prepare a weekly meal plan, including healthy snacks, to stay on track with your nutrition goals.
                </p>
                <h3>Enjoy Treats in Moderation</h3>
                <p>
                    It's okay to indulge in your favorite treats occasionally. The key is moderation. Allow yourself to enjoy treats without guilt, but be mindful of portion sizes and frequency to maintain a balanced diet.
                </p>
                <h3>Listen to Your Body</h3>
                <p>
                    Pay attention to how different foods make you feel. Everyone's body is unique, and what works for one person may not work for another. Listen to your body and adjust your eating habits to support your individual needs and preferences.
                </p>
            </>
        ),
        imageUrl: require('../../../images/NutritionTipsImage.png'),
        author: 'Rachel Green',
        date: 'June 12, 2022'
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

export default EssentialNutritionTips;
