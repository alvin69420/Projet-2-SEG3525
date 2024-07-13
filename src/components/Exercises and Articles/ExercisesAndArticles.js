import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Exercise Guide Imports
import SeatedDumbbellPressGuide from '../../pages/Exercise Pages/Specific Exercise Pages/SeatedDumbbellPressGuide';
import DumbbellLateralRaiseGuide from '../../pages/Exercise Pages/Specific Exercise Pages/DumbbellLateralRaiseGuide';
import SeatedBarbellShoulderPressGuide from '../../pages/Exercise Pages/Specific Exercise Pages/SeatedBarbellShoulderPress';
import BenchPressGuide from '../../pages/Exercise Pages/Specific Exercise Pages/BenchPressGuide';
import PushUpGuide from '../../pages/Exercise Pages/Specific Exercise Pages/PushUpGuide';
import ChestFlyGuide from '../../pages/Exercise Pages/Specific Exercise Pages/ChestFlyGuide';
import DeadliftGuide from '../../pages/Exercise Pages/Specific Exercise Pages/DeadliftGuide';
import PullUpGuide from '../../pages/Exercise Pages/Specific Exercise Pages/PullUpGuide';
import BentOverRowGuide from '../../pages/Exercise Pages/Specific Exercise Pages/BentOverRowGuide';
import SquatGuide from '../../pages/Exercise Pages/Specific Exercise Pages/SquatGuide';
import LungeGuide from '../../pages/Exercise Pages/Specific Exercise Pages/LungeGuide';
import LegPressGuide from '../../pages/Exercise Pages/Specific Exercise Pages/LegPressGuide';
import HammerCurlGuide from '../../pages/Exercise Pages/Specific Exercise Pages/HammerCurlGuide';
import TricepExtensionGuide from '../../pages/Exercise Pages/Specific Exercise Pages/TricepExtensionGuide';
import BicepCurlGuide from '../../pages/Exercise Pages/Specific Exercise Pages/BicepCurlGuide';
import MuscleBuildingStrategies from '../../pages/Learn Pages/Specific Article Pages/MuscleBuildingStrategies';
import CardioAndFatLoss from '../../pages/Learn Pages/Specific Article Pages/CardioAndFatLoss';
import MacronutrientsImportance from '../../pages/Learn Pages/Specific Article Pages/MacronutrientsImportance';
import MuscleGrowthSupplements from '../../pages/Learn Pages/Specific Article Pages/MuscleGrowthSupplements';
import ImportanceOfStrengthTraining from '../../pages/Learn Pages/Specific Article Pages/ImportanceOfStrengthTraining';
import EffectiveWorkoutPlan from '../../pages/Learn Pages/Specific Article Pages/EffectiveWorkoutPlan';
import TopMuscleBuildingExercises from '../../pages/Learn Pages/Specific Article Pages/TopMuscleBuildingExercises';
import MuscleBuildingMistakes from '../../pages/Learn Pages/Specific Article Pages/MuscleBuildingMistakes';
import EffectiveFatLossStrategies from '../../pages/Learn Pages/Specific Article Pages/EffectiveFatLossStrategies';
import DebunkingFatLossMyths from '../../pages/Learn Pages/Specific Article Pages/DebunkingFatLossMyths';
import EssentialNutritionTips from '../../pages/Learn Pages/Specific Article Pages/EssentialNutritionTips';
import MealPrepForSuccess from '../../pages/Learn Pages/Specific Article Pages/MealPrepForSuccess';
import BeginnersGuideToSupplements from '../../pages/Learn Pages/Specific Article Pages/BeginnersGuideToSupplements';
import SupplementsForFatLoss from '../../pages/Learn Pages/Specific Article Pages/SupplementsForFatLoss';

// Article Guides Imports
import BeginnerFitnessGuide from '../../pages/Learn Pages/Specific Article Pages/BeginnerFitnessGuide';

const ExercisesAndArticles = ({ PageTitle, arr, ExerciseOrArticle }) => {
    const [activeItem, setActiveItem] = useState('');

    const SpecificExercisesAndArticles = {
        // Exercise Guides
        'Seated Dumbbell Press': <SeatedDumbbellPressGuide />,
        'Dumbbell Lateral Raise': <DumbbellLateralRaiseGuide />,
        'Seated Barbell Shoulder Press': <SeatedBarbellShoulderPressGuide />,
        'Bench Press': <BenchPressGuide />,
        'Push-Up': <PushUpGuide />,
        'Chest Fly': <ChestFlyGuide />,
        'Deadlift': <DeadliftGuide />,
        'Pull-Up': <PullUpGuide />,
        'Bent Over Row': <BentOverRowGuide />,
        'Squat': <SquatGuide />,
        'Lunge': <LungeGuide />,
        'Leg Press': <LegPressGuide />,
        'Hammer Curl': <HammerCurlGuide />,
        'Tricep Extension': <TricepExtensionGuide />,
        'Bicep Curl': <BicepCurlGuide />,
        

        // Article Guides
        'A Beginner\'s Guide to Starting Your Fitness Journey': <BeginnerFitnessGuide />,
        'Effective Strategies for Building Muscle Mass': <MuscleBuildingStrategies />,
        'The Importance of Macronutrients in Your Diet': <MacronutrientsImportance />,
        'The Role of Cardio in Fat Loss': <CardioAndFatLoss />,
        'Top Supplements for Muscle Growth': <MuscleGrowthSupplements />,
        'The Importance of Strength Training': <ImportanceOfStrengthTraining />,
        'How to Create an Effective Workout Plan': <EffectiveWorkoutPlan />,
        'Top Muscle-Building Exercises You Should Be Doing': <TopMuscleBuildingExercises />,
        'Common Mistakes to Avoid When Trying to Build Muscle': <MuscleBuildingMistakes />,
        'Effective Fat Loss Strategies for Lasting Results': <EffectiveFatLossStrategies />,
        'Debunking Myths About Fat Loss': <DebunkingFatLossMyths />,
        'Essential Nutrition Tips for a Healthy Lifestyle': <EssentialNutritionTips />, 
        'How to Meal Prep for Success': <MealPrepForSuccess />,
        'A Beginner\'s Guide to Supplements': <BeginnersGuideToSupplements />,
        'Are Supplements Necessary for Fat Loss?': <SupplementsForFatLoss />,



    };

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        !activeItem ? (
            <Container>
                <p className='display-2 text-center mt-5'><b>{PageTitle}</b></p>
                <Row className='mt-5'>
                    {arr.map((item, index) => (
                        <Col key={index}>
                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src={item.Img} alt='Image of exercise or article' />
                                <Card.Body>
                                    <Card.Title className='text-center mt-3'><h3>{item.Name}</h3></Card.Title>
                                    <Card.Text className='mt-3'>
                                        {item.Description}
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => handleItemClick(item.Name)}>
                                        <h5> {ExerciseOrArticle === 'Exercise' ? 'View Exercise' : 'View Article'}</h5>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        ) : (
            <div className='content'>
                {SpecificExercisesAndArticles[activeItem]}
            </div>
        )
    );
};

export default ExercisesAndArticles;