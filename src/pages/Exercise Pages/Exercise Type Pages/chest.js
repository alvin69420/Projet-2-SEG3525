import ExercisesAndArticles from '../../../components/ExercisesAndArticles';

const Chest = () => {
  return (
    <ExercisesAndArticles 
    PageTitle="Chest Exercises"
    Name1={"First Exercise"} 
    Name2={"Second Exercise"}
    Name3={"Third Exercise"}
    Description1={"This is a description of the first exercise"}
    Description2={"This is a description of the second exercise"}
    Description3={"This is a description of the third exercise"}
    ExerciseOrArticle="Exercise"/>
  );
}

export default Chest;