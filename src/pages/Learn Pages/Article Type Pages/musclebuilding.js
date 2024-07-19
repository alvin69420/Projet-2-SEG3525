import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const MuscleBuilding = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Muscle Building Articles"
      arr={[
        {Name: "Effective Strategies for Building Muscle Mass", Description: "Learn the most effective strategies for building muscle mass, including tips on workout routines, nutrition, and recovery.", Img: require("../../../images/MuscleBuildingStrategiesImage.jpg")},
        {Name: "Top Muscle-Building Exercises You Should Be Doing", Description: "Discover the top exercises that are proven to help you build muscle efficiently and safely.", Img: require("../../../images/TopMuscleBuildingExercisesImage.webp")},
        {Name: "Common Mistakes to Avoid When Trying to Build Muscle", Description: "Understand the common mistakes people make when trying to build muscle and how to avoid them to maximize your gains.", Img: require("../../../images/MistakesMuscleBuildingImage.webp")}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default MuscleBuilding;
