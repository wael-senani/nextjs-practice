interface Props {
  params: { slug: string[] };
}

const itemsSlug = async (props: Props) => {
  const params = await props.params;
  console.log(params);
  return <div>request slug is {params.slug.join("/")}</div>;
};

export default itemsSlug;
