import styled from 'styled-components';

const StyledP = styled.p`
  object-fit: contain;
  font-family: 'Libre Franklin';
  font-size: ${props => props.fontSize};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => (props.color ? props.color : '#8d9096')};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => props.width};
`;

export default StyledP;
