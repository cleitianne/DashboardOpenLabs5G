import { Fragment } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  count: number;
  mapPage?: boolean;
}

const Empty = (props: Props) => {
  return (
    <Alert variant="warning" className="text-center">
      <span>You have chosen {props.count} address(es). </span>
      {props.mapPage ? (
        "Please choose at least 3 to see results."
      ) : (
        <Fragment>
          Clique <Link to="/form#searchBox">aqui</Link> para escolher pelo menos 3 para ver os resultados.
        </Fragment>
      )}
    </Alert>
  );
};

export default Empty;
