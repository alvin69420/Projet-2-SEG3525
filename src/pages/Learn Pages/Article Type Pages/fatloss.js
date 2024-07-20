import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const FatLoss = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Fat Loss Articles"
      arr={[
        {Name: "Effective Fat Loss Strategies for Lasting Results", Description: "Explore effective strategies for losing fat and keeping it off, focusing on diet, exercise, and lifestyle changes.", Img: require("../../../images/FatLossStrategiesImage.webp"), alt: "Effective Fat Loss Strategies"},
        {Name: "The Role of Cardio in Fat Loss", Description: "Learn about the different types of cardio exercises and how they can help you achieve your fat loss goals.", Img: require("../../../images/CardioFatLossImage.jpg"), alt: "The Role of Cardio in Fat Loss"},
        {Name: "Debunking Myths About Fat Loss", Description: "Get the facts straight about common fat loss myths and misconceptions to make informed decisions about your fitness journey.", Img: require("../../../images/FatLossMythsImage.webp"), alt: "Debunking Myths About Fat Loss"}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default FatLoss;
