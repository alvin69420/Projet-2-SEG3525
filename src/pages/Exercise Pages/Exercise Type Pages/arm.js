import ExercisesAndArticles from '../../../components/Exercises and Articles/ExercisesAndArticles';

const Arm = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Arm Exercises"
      arr={[
        {Name: "Bicep Curl", Description: "An exercise involving lifting a dumbbell by curling the arm towards the shoulder, targeting the bicep muscles", Img: require("../../../images/Bicep-Curls.jpg")},
        {Name: "Tricep Extension", Description: "An exercise involving extending the arm behind the head with a dumbbell, targeting the tricep muscles", Img: require("../../../images/Tricep-Extension.jpg")},
        {Name: "Hammer Curl", Description: "An exercise similar to the bicep curl but with a neutral grip, targeting the brachialis muscle", Img: require("../../../images/Hammer-Curl.webp")}
      ]}
      ExerciseOrArticle="Exercise"
    />
  );
}

export default Arm;
