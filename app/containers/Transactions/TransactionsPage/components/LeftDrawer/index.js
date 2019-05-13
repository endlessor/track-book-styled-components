import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import TickOval from './TickOval';
import {
  DrawContent,
  StyledP18,
  StyledP14,
  AddButton,
  OvalEmpty,
} from './styles';

import { FlexRowContainer, FlexContainer } from '../../../../../components';

function LeftDrawer(props) {
  const { onClose, isOpen } = props;
  return (
    <Drawer
      onClose={onClose}
      visible={isOpen}
      placement="left"
      width={370}
      closable={false}
      style={{ marginTop: 70 }}
    >
      <DrawContent>
        <FlexRowContainer
          backgroundColor="#ffffff"
          alignItem="center"
          padding="28px 25px 20px 37px"
        >
          <StyledP18>Manage accounts</StyledP18>
          <AddButton appearance="primary">Add +</AddButton>
        </FlexRowContainer>
        <FlexRowContainer alignItem="center" padding="12px 25px 12px 37px">
          <FlexContainer>
            <StyledP14>Nexus Infotech</StyledP14>
            <StyledP14 color="#8d9096">USA</StyledP14>
          </FlexContainer>
          <TickOval />
        </FlexRowContainer>
        <FlexRowContainer
          backgroundColor="#ffffff"
          alignItem="center"
          padding="12px 25px 12px 37px"
        >
          <FlexContainer>
            <StyledP14>Nexus Infotech</StyledP14>
            <StyledP14 color="#8d9096">Europe</StyledP14>
          </FlexContainer>
        </FlexRowContainer>
        <FlexRowContainer alignItem="center" padding="12px 25px 12px 37px">
          <FlexContainer>
            <StyledP14>Nexus Infotech</StyledP14>
            <StyledP14 color="#8d9096">India</StyledP14>
          </FlexContainer>
          <OvalEmpty />
        </FlexRowContainer>
        <FlexRowContainer
          backgroundColor="#ffffff"
          alignItem="center"
          padding="12px 25px 12px 37px"
        >
          <FlexContainer>
            <StyledP14>Opt Software</StyledP14>
            <StyledP14 color="#8d9096">India</StyledP14>
          </FlexContainer>
        </FlexRowContainer>
        <FlexRowContainer
          backgroundColor="#ffffff"
          alignItem="center"
          padding="12px 25px 12px 37px"
        >
          <FlexContainer>
            <StyledP14>Opt Software</StyledP14>
            <StyledP14 color="#8d9096">India</StyledP14>
          </FlexContainer>
        </FlexRowContainer>
      </DrawContent>
    </Drawer>
  );
}

LeftDrawer.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default LeftDrawer;
