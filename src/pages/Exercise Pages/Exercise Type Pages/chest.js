import ExercisesAndArticles from '../../../components/Exercises and Articles/ExercisesAndArticles';

const Chest = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Chest Exercises"
      arr={[
        {Name: "Bench Press", Description: "A compound exercise involving pressing a barbell or dumbbells away from the chest while lying on a bench, targeting the pectoral muscles", Img: require("../../../images/Bench-Press.jpg"), alt: "Bench Press"},
        {Name: "Chest Fly", Description: "An exercise involving spreading the arms out wide and bringing them back together while holding dumbbells, targeting the pectoral muscles", Img: require("../../../images/Chest-Fly.jpg"), alt: "Chest Fly"},
        {Name: "Push-Up", Description: "A bodyweight exercise involving lowering and raising the body by bending the arms while in a prone position, targeting the pectoral muscles, triceps, and shoulders", Img: require("../../../images/Push-Up.jpg"), alt: "Push-Up"}
      ]}
      ExerciseOrArticle="Exercise"
    />
  );
}

export default Chest;
