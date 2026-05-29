import ClientForm from "./components/client";

const home = () => {
  // console.log shows on the client but no cause it ran there but bc it was shared by next
  console.log("yo");
  return (
    <div>
      <p>home</p>
      <ClientForm />
    </div>
  );
};

export default home;
