import ExercisesAndArticles from '../../../components/ExercisesAndArticles';

const Back = () => {
  return (
    <ExercisesAndArticles 
    PageTitle="Back Exercises"
    Name1={"First Exercise"} 
    Name2={"Second Exercise"}
    Name3={"Third Exercise"}
    Description1={"This is a description of the first exercise"}
    Description2={"This is a description of the second exercise"}
    Description3={"This is a description of the third exercise"}
    ExerciseOrArticle="Exercise"/>
  );
}

export default Back;