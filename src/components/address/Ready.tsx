import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  count: number;
}

const Ready = (props: Props) => {
  return (
    <Alert variant="success" className="text-center">
      Você escolheu {props.count} endereços. Clique{" "}
      <Link to="/result">aqui</Link> para ver os resultados.
    </Alert>
  );
};

export default Ready;
