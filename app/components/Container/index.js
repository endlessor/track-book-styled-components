import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: ${props => props.height};
  min-height: 100vh;
  margin: 0;
`;

export default Container;
