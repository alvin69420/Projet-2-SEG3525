import ExercisesAndArticles from '../../../components/Exercises and Articles/ExercisesAndArticles';

const Back = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Back Exercises"
      arr={[
        {Name: "Deadlift", Description: "A compound exercise involving lifting a barbell from the ground to hip level, targeting the lower back, glutes, and hamstrings", Img: require("../../../images/Deadlift.jpg")},
        {Name: "Pull-Up", Description: "A bodyweight exercise involving pulling the body up to a bar by bending the arms, targeting the upper back and biceps", Img: require("../../../images/Pull-up.webp")},
        {Name: "Bent Over Row", Description: "An exercise involving bending at the waist and pulling a barbell or dumbbells towards the torso, targeting the upper and middle back", Img: require("../../../images/Bent-over-row.jpg")}
      ]}
      ExerciseOrArticle="Exercise"
    />
  );
}

export default Back;
