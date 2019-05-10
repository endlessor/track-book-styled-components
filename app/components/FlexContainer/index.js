import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
`;

const FlexRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.alignItem ? props.alignItem : 'center')};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  position: relative;
`;

const FlexEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${props => props.margin};
`;

const FlexStartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: ${props => props.margin};
`;

export default FlexContainer;
export { FlexEndContainer, FlexRowContainer, FlexStartContainer };
