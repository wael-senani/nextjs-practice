import React from "react";
interface Props {
  params: { id: string };
}
const page = async ({ params: { id } }: Props) => {
  return <div>requested user id is {id}</div>;
};
//or
/**const page = async (props: Props) => {
  console.log(props);
  const propParams = await props.params;
  console.log(propParams);
  return <div>requested user id is {propParams.id}</div>;
};*/
export default page;
