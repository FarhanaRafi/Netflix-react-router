import CardSet from "./CardSet";

const AllCards = () => {
  return (
    <>
      <CardSet search="harry%20potter" title="Harry Potter Series" />
      <CardSet search="matrix" title="Matrix" />
      <CardSet search="spider-man" title="Spider Man" />
      <CardSet search="marvel" title="Marvel Universe" />
    </>
  );
};

export default AllCards;
