import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const Training = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Training Articles"
      arr={[
        {Name: "A Beginner's Guide to Starting Your Fitness Journey", Description: "This article offers essential tips and steps tailored for newcomers embarking on their path to fitness, ensuring a smooth and informed start to achieving health goals.", Img: require("../../../images/placeholder-image.png")},
        {Name: "The Importance of Strength Training", Description: "Discover the benefits of strength training, including increased muscle mass, improved metabolism, and enhanced overall health. This article provides insights into why strength training is crucial for everyone.", Img: require("../../../images/placeholder-image.png")},
        {Name: "How to Create an Effective Workout Plan", Description: "Learn how to design a workout plan that suits your goals and lifestyle. This article covers key elements such as setting objectives, balancing exercise types, and staying consistent with your routine.", Img: require("../../../images/placeholder-image.png")}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default Training;
