import ExercisesAndArticles from '../../../components/Exercises and Articles/ExercisesAndArticles';

const Leg = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Leg Exercises"
      arr={[
        {Name: "Squat", Description: "A compound exercise involving lowering the body by bending the knees and hips, targeting the quadriceps, hamstrings, and glutes", Img: require("../../../images/Squat.jpg")},
        {Name: "Lunge", Description: "An exercise involving stepping forward and lowering the body by bending both knees, targeting the quadriceps and glutes", Img: require("../../../images/Lunges.jpg")},
        {Name: "Leg Press", Description: "An exercise performed on a machine where the legs push weight away from the body, targeting the quadriceps, hamstrings, and glutes", Img: require("../../../images/Leg-Press-Exercise.jpg")}
      ]}
      ExerciseOrArticle="Exercise"
    />
  );
}

export default Leg;
