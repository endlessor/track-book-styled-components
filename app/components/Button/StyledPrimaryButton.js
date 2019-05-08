import styled from 'styled-components';
import Button from '@atlaskit/button';
import buttonStyles from './buttonStyles';
import buttonTextStyles from './buttonTextStyles';

const StyledPrimaryButton = styled(Button)`
  ${buttonStyles};
  ${buttonTextStyles};
`;

export default StyledPrimaryButton;
