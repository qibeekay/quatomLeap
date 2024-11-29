import { useLocation } from "react-router-dom";
import { Footer, Header, TalentCategory } from "../../components";

const TalentsPage = () => {
  const location = useLocation();
  const category = location.state?.category;
  return (
    <div>
      <Header
        btext={category}
        ath={"Athletes"}
        size="text-[61px]"
        smsize="text-[30px]"
      />
      <TalentCategory />
      <Footer />
    </div>
  );
};

export default TalentsPage;
