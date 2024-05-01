import Col from './Col';
import Row from './Row';

type GridType = {
  Row: typeof Row;
  Col: typeof Col;
};

const Grid: GridType = { Row, Col };

export default Grid;
