import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const Nutrition = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Nutrition Articles"
      arr={[
        {Name: "Essential Nutrition Tips for a Healthy Lifestyle", Description: "Learn essential nutrition tips that will help you maintain a healthy and balanced diet.", Img: require("../../../images/NutritionTipsImage.png"), alt: "Essential Nutrition Tips"},
        {Name: "The Importance of Macronutrients in Your Diet", Description: "Understand the role of macronutrients—proteins, carbohydrates, and fats—in your diet and how to balance them for optimal health.", Img: require("../../../images/MacronutrientsImage.jpg"), alt: "Importance of Macronutrients"},
        {Name: "How to Meal Prep for Success", Description: "Discover the benefits of meal prepping and get tips on how to get started to ensure you stay on track with your nutrition goals.", Img: require("../../../images/MealPrepImage.jpg"), alt: "Meal Prep for Success"}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default Nutrition;
