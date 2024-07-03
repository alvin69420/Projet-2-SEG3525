import ExercisesAndArticles from "../../components/ExercisesAndArticles";

const Training = () => {
  return (
    <ExercisesAndArticles 
    PageTitle="Training Articles"
    Name1={"First Article"} 
    Name2={"Second Article"}
    Name3={"Third Article"}
    Description1={"This is a description of the first article"}
    Description2={"This is a description of the second article"}
    Description3={"This is a description of the third article"}
    ExerciseOrArticle="Article"/>
  );
}

export default Training;