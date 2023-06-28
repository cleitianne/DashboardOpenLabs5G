import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2 className="text-center">Página não encontrada</h2>
      <Card>
        <Card.Header>Página não encontrada</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                Para voltar, clique <Link to="/home">aqui</Link>.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default NotFound;
