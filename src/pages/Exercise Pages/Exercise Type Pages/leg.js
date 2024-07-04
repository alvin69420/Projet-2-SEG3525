import ExercisesAndArticles from '../../../components/Exercises and Articles/ExercisesAndArticles';

const Leg = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Leg Exercises"
      arr={[
        {Name: "First Exercise", Description: "This is a description of the first exercise", Img: require("../../../images/placeholder-image.png")},
        {Name: "Second Exercise", Description: "This is a description of the second exercise", Img: require("../../../images/placeholder-image.png")},
        {Name: "Third Exercise", Description: "This is a description of the third exercise", Img: require("../../../images/placeholder-image.png")}
      ]}
      ExerciseOrArticle="Exercise"
    />
  );
}

export default Leg;
