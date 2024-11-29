import { useLocation } from "react-router-dom";
import { Footer, Header, ViewTalentsResult } from "../../../components";

const ViewtalentsPage = () => {
  const location = useLocation();
  const category = location.state?.category;
  const level = location.state?.level;
  const gender = location.state?.gender;

  console.log("gender", gender);
  console.log("category", category);
  console.log("level", level);
  return (
    <div>
      <Header
        btext="Quantum leap sport Talents"
        size="text-[61px]"
        smsize="text-[40px]"
      />
      <ViewTalentsResult level={level} gender={gender} category={category} />
      <Footer />
    </div>
  );
};

export default ViewtalentsPage;
