import styled from 'styled-components';

export const DDWrapper = styled.div`
  position: relative;
  z-index: 999;
  width: 128px;
  margin-right: 5px;
`;

export const DDHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
`;

export const DDList = styled.ul`
  list-style-type: none;
  width: 128px;
  padding: 0;
  position: absolute;
  padding: 23px 12px 13px 20px;
  border-radius: 2px;
  box-shadow: 2px 4px 12px 0 rgba(186, 190, 197, 0.35);
  background-color: #ffffff;
  margin-top: 20px;
`;

export const DDListItem = styled.li`
  padding: 5px;
  font-family: 'Libre Franklin';
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.14;
  color: #393a3d;
`;

export const StyledP13 = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.69;
  text-align: right;
  margin: 0;
  color: #424242;
`;
