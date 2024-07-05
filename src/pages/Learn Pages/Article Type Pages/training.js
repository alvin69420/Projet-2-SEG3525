import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const Training = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Training Articles"
      arr={[
        {Name: "A Beginner's Guide to Starting Your Fitness Journey", Description: "This article offers essential tips and steps tailored for newcomers embarking on their path to fitness, ensuring a smooth and informed start to achieving health goals.", Img: require("../../../images/placeholder-image.png")},
        {Name: "Second Article", Description: "This is a description of the second article", Img: require("../../../images/placeholder-image.png")},
        {Name: "Third Article", Description: "This is a description of the third article", Img: require("../../../images/placeholder-image.png")}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default Training;
