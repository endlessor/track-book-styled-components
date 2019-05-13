import styled from 'styled-components';

const PaddedContainer = styled.div`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
`;

export default PaddedContainer;
