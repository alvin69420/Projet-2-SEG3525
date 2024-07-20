import ExercisesAndArticles from "../../../components/Exercises and Articles/ExercisesAndArticles";

const Supplements = () => {
  return (
    <ExercisesAndArticles 
      PageTitle="Supplements Articles"
      arr={[
        {Name: "A Beginner's Guide to Supplements", Description: "Get an introduction to dietary supplements, including what they are, how they work, and which ones might benefit your fitness goals.", Img: require("../../../images/SupplementsImage.jpg"), alt: "Beginner's Guide to Supplements"},
        {Name: "Top Supplements for Muscle Growth", Description: "Discover the top supplements that can help you build muscle more effectively and support your training regimen.", Img: require("../../../images/MuscleBuildingSupplementsImage.webp"), alt: "Top Supplements for Muscle Growth"},
        {Name: "Are Supplements Necessary for Fat Loss?", Description: "Learn about the role of supplements in fat loss and whether they are necessary to achieve your weight loss goals.", Img: require("../../../images/FatLossSupplementsImage.webp"), alt: "Supplements Necessary for Fat Loss"}
      ]}
      ExerciseOrArticle="Article"
    />
  );
}

export default Supplements;
