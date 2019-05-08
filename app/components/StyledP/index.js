import styled from 'styled-components';

const StyledP = styled.p`
  object-fit: contain;
  font-size: ${props => props.fontSize}
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #8d9096;
  margin: ${props => (props.margin ? props.margin : '0')};
`;

export default StyledP;
