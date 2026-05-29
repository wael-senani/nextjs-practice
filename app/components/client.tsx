"use client";

const ClientForm = () => {
  // this logs on the server even though its a client side comp
  // cause server comps are server rendered only
  // but cliet components are pre-rendered on server 1st
  // server renders any components that doesnt require interactivity or isnt dependent on the browser and leaves those exeptions as placeholders
  // then those exeptions are filled in the browser on the client side
  // yap session concluded

  console.log("client comp");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button type="submit">submit</button>
    </form>
  );
};

export default ClientForm;
