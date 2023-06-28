import { Card } from "react-bootstrap";
import MapWrapper from "../components/map/Wrapper";
import AddressTable from "../components/address/AddressTable";

const Form = () => {
  return (
    <section>
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-12">
            </div>
            <div className="col-md-6 mb-3">
              <MapWrapper />
            </div>
            <div className="col-md-6">
              <AddressTable mapPage={true} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Form;
