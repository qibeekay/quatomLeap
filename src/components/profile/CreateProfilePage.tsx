import {
  CreateForm,
  CreateInfo,
  Footer,
  Header,
  Navbar,
} from "../../components";
const CreateProfilePage = () => {
  return (
    <div>
      {/* <Header
        btext={"Elevate Your Game"}
        size="text-[61px]"
        smsize="text-[30px]"
      /> */}
      <Navbar />
      <CreateInfo />
      <CreateForm />
      <Footer />
    </div>
  );
};

export default CreateProfilePage;
