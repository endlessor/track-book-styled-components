import styled from 'styled-components';
import { Checkbox } from '@atlaskit/checkbox';

const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  rect {
    width: 20px;
    height: 20px;
    x: 2px;
    y: 2px;
  }
`;

export default StyledCheckbox;
