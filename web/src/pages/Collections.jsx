import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CollectionTable from '../features/collections/CollectionTable';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Collections</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CollectionTable />
      </Row>
    </>
    
  );
}

export default Cabins;
