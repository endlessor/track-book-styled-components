import styled from 'styled-components';

const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid ${props => (props.color ? props.color : '#eb8e0e')};
`;
export default Oval;
