import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PlanTraining = () => {
    const [goals, setGoals] = useState('');
    const [level, setLevel] = useState('');
    const [muscle, setMuscle] = useState('');
    const [trainingPlan, setTrainingPlan] = useState(null);

    const handleGeneratePlan = () => {
        const exercises = [
            { name: 'Push-ups', sets: 3, reps: 15, duration: null, equipment: 'Bodyweight', muscle: 'Chest', goal: 'Build Muscle' },
            { name: 'Squats', sets: 3, reps: 20, duration: null, equipment: 'Bodyweight', muscle: 'Legs', goal: 'Build Muscle' },
            { name: 'Plank', sets: null, reps: null, duration: '1 min', equipment: 'Bodyweight', muscle: 'Core', goal: 'Build Muscle' },
            { name: 'Lunges', sets: 3, reps: 20, duration: null, equipment: 'Bodyweight', muscle: 'Legs', goal: 'Build Muscle' },
            { name: 'Pull-ups', sets: 3, reps: 10, duration: null, equipment: 'Bodyweight', muscle: 'Back', goal: 'Build Muscle' },
            { name: 'Dumbbell Bench Press', sets: 3, reps: 12, duration: null, equipment: 'Dumbbells', muscle: 'Chest', goal: 'Build Muscle' },
            { name: 'Lat Pulldown', sets: 3, reps: 10, duration: null, equipment: 'Cable Machine', muscle: 'Back', goal: 'Build Muscle' },
            { name: 'Treadmill Run', sets: null, reps: null, duration: '20 mins', equipment: 'Cardio Machine', muscle: 'Cardio', goal: 'Lose Fat' },
            { name: 'Bicep Curls', sets: 3, reps: 15, duration: null, equipment: 'Dumbbells', muscle: 'Arms', goal: 'Build Muscle' },
            { name: 'Tricep Dips', sets: 3, reps: 15, duration: null, equipment: 'Bodyweight', muscle: 'Arms', goal: 'Build Muscle' },
            { name: 'Deadlifts', sets: 3, reps: 10, duration: null, equipment: 'Barbell', muscle: 'Legs', goal: 'Build Muscle' },
            { name: 'Jumping Jacks', sets: null, reps: null, duration: '10 mins', equipment: 'Bodyweight', muscle: 'Cardio', goal: 'Increase Endurance' },
            { name: 'Cycling', sets: null, reps: null, duration: '30 mins', equipment: 'Cardio Machine', muscle: 'Cardio', goal: 'Increase Endurance' },
            { name: 'Rowing', sets: null, reps: null, duration: '15 mins', equipment: 'Cardio Machine', muscle: 'Cardio', goal: 'Lose Fat' },
            { name: 'Burpees', sets: 3, reps: 15, duration: null, equipment: 'Bodyweight', muscle: 'Full Body', goal: 'Lose Fat' },
            { name: 'Mountain Climbers', sets: null, reps: null, duration: '10 mins', equipment: 'Bodyweight', muscle: 'Full Body', goal: 'Increase Endurance' },
        ];

        const adjustedExercises = exercises.map(exercise => {
            let adjustedExercise = { ...exercise };
            if (level === 'Beginner') {
                if (exercise.sets) {
                    adjustedExercise.sets = exercise.sets - 1 > 0 ? exercise.sets - 1 : exercise.sets;
                }
                if (exercise.reps) {
                    adjustedExercise.reps = exercise.reps - 5 > 0 ? exercise.reps - 5 : exercise.reps;
                }
                if (exercise.duration && exercise.duration.includes('min')) {
                    adjustedExercise.duration = `${parseInt(exercise.duration) - 5} mins`;
                }
            } else if (level === 'Intermediate') {
                adjustedExercise.sets = exercise.sets;
                adjustedExercise.reps = exercise.reps;
                adjustedExercise.duration = exercise.duration;
            } else if (level === 'Advanced') {
                if (exercise.sets) {
                    adjustedExercise.sets = exercise.sets + 1;
                }
                if (exercise.reps) {
                    adjustedExercise.reps = exercise.reps + 5;
                }
                if (exercise.duration && exercise.duration.includes('min')) {
                    adjustedExercise.duration = `${parseInt(exercise.duration) + 5} mins`;
                }
            }
            return adjustedExercise;
        });

        const plan = {
            goals,
            level,
            exercises: adjustedExercises.filter(exercise => {
                if (muscle && exercise.muscle !== muscle) return false;
                return exercise.goal === goals;
            })
        };

        setTrainingPlan(plan);
    };

    return (
        <Container>
            <h1 className="display-4 text-center mt-5"><b>Create Your Own Personalized Training Program</b></h1>
            <Form className="mt-5">
                <Form.Group>
                    <Form.Label className='h2 mt-2'>Goals</Form.Label>
                    <Form.Control as="select" value={goals} onChange={(e) => setGoals(e.target.value)} className='mt-2 w-25'>
                        <option value="" disabled>Select your goal</option>
                        <option value="Build Muscle">Build Muscle</option>
                        <option value="Lose Fat">Lose Fat</option>
                        <option value="Increase Endurance">Increase Endurance</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='h2 mt-3'>Current Level</Form.Label>
                    <Form.Control as="select" value={level} onChange={(e) => setLevel(e.target.value)} className='mt-2 w-25'>
                        <option value="" disabled>Select your level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Control>
                </Form.Group>
                {goals === 'Build Muscle' && (
                    <Form.Group>
                        <Form.Label className='h2 mt-3'>Targeted Muscle Group (optional)</Form.Label>
                        <Form.Control as="select" value={muscle} onChange={(e) => setMuscle(e.target.value)} className='mt-2'>
                            <option value="" >Full-Body Workout</option>
                            <option value="Chest">Chest</option>
                            <option value="Back">Back</option>
                            <option value="Legs">Legs</option>
                            <option value="Arms">Arms</option>
                            <option value="Core">Core</option>
                        </Form.Control>
                    </Form.Group>
                )}
                <Button variant="danger" size='lg' onClick={handleGeneratePlan} className='mt-4'>Generate Training Plan</Button>
            </Form>
            {trainingPlan && (
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Title><h3>Your Personalized Training Plan</h3></Card.Title>
                        <Card.Text class='trainingProgramText'>
                            <b>Goals:</b> {trainingPlan.goals} <br />
                            <b>Level:</b> {trainingPlan.level} <br />
                            {muscle && goals === 'Build Muscle' && <><b>Targeted Muscle Group:</b> {muscle}<br /></>}
                        </Card.Text>
                        <ul class='trainingProgramText'>
                            {trainingPlan.exercises.map((exercise, index) => (
                                <li key={index}>
                                    <b>{exercise.name}:</b> {exercise.sets ? `${exercise.sets} sets of ${exercise.reps} reps` : `Duration: ${exercise.duration}`} 
                                    <i> (Equipment: {exercise.equipment})</i>
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default PlanTraining;
