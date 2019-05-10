import styled from 'styled-components';

const PositionedRelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  overflow: hidden;
  padding: ${props => props.padding};
`;

export default PositionedRelativeContainer;
