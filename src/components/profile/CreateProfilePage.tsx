import { CreateForm, CreateInfo, Footer, Header } from "../../components";
const CreateProfilePage = () => {
  return (
    <div>
      <Header
        btext={"Elevate Your Game"}
        size="text-[61px]"
        smsize="text-[30px]"
      />
      <CreateInfo />
      <CreateForm />
      <Footer />
    </div>
  );
};

export default CreateProfilePage;
