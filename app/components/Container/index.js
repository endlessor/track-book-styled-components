import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height};
  margin: 0;
`;

export default Container;
