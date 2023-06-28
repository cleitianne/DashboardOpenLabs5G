import { Card } from "react-bootstrap";
import AddressTable from "../components/address/AddressTable";
import Result from "../components/result/Result";
import { useAppSelector } from "../store/hooks";
import classes from "./Results.module.scss";

const Results = () => {
  const addressState = useAppSelector((state) => state.address);
  const hasMinimumAddresses = addressState.count >= 3;

  return (
    <section>
      <Card>
        <Card.Header>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-12">
              <AddressTable resultPage={true} />
            </div>
          </div>
        </Card.Body>
      </Card>
      {hasMinimumAddresses && (
        <Card className="mt-5">
          <Card.Header>
            <b>Resultados</b>{" "}
            <span className={classes.legend}>
              ({" "}
              <span className={classes.green}>verde</span> mais próximo, e{" "}
              <span className={classes.red}>vermelho</span> mais distante)
            </span>
            <span className={classes.legend}>
              
            </span>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-12">
                <Result />
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </section>
  );
};

export default Results;
