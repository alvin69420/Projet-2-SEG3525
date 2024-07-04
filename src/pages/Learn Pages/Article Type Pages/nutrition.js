import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const Nutrition = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Nutrition Articles"
      arr={[
        {Name: "First Article", Description: "This is a description of the first article", Img: require("../../../images/placeholder-image.png")},
        {Name: "Second Article", Description: "This is a description of the second article", Img: require("../../../images/placeholder-image.png")},
        {Name: "Third Article", Description: "This is a description of the third article", Img: require("../../../images/placeholder-image.png")}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default Nutrition;
