import { Fragment } from "react";

interface Props {
  mapPage: boolean;
}

const Header = (props: Props) => {
  return (
    <thead>
      <tr>
        <th className="text-center">#</th>
        <th>Descrição</th>
        {!props.mapPage && (
          <Fragment>
            <th>Latitude</th>
            <th>Longitude</th>
          </Fragment>
        )}
        {props.mapPage && <th className="text-center">Visualizar</th>}
        <th className="text-center">Remover</th>
      </tr>
    </thead>
  );
};

export default Header;
