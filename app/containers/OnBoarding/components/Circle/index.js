import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background-color: #5eb7f1;
`;

export default Circle;
