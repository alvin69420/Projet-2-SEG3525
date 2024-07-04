import ExercisesAndArticles from '../../../components/Exercises and Articles/ExercisesAndArticles';

const Shoulder = () => {

    return (
      <ExercisesAndArticles 
      PageTitle={"Shoulder Exercises"}
      arr = {[
        {Name: "Seated Dumbbell Press", Description: "A shoulder exercise where you sit, lift dumbbells overhead, and lower them back down.", Img : require("../../../images/placeholder-image.png")}, 
        {Name: "Dumbbell Lateral Raise", Description: "A shoulder exercise involving lifting dumbbells to the sides until arms are parallel to the ground, targeting shoulder muscles", Img : require("../../../images/placeholder-image.png")},
        {Name: "Seated Barbell Shoulder Press", Description: "A shoulder-strengthening exercise where a barbell is pressed upward from shoulder height to arms fully extended, primarily targeting the deltoid muscles.", Img : require("../../../images/placeholder-image.png")}
      ]}

      ExerciseOrArticle = "Exercise"
      />
    )
}

export default Shoulder; 
