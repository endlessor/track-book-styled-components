import React from 'react';
import PropTypes from 'prop-types';
import Oval from './Oval';
import { TabContainer, Label, Number } from './styles';

function SyncTab(props) {
  const { label, color, selectTab, selectedTab, id } = props;
  const active = selectedTab === id;
  return (
    <TabContainer active={active} onClick={() => selectTab(id)}>
      <Oval color={color} />
      <Label>{label}</Label>
      <Number color={color}>780</Number>
    </TabContainer>
  );
}

SyncTab.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  selectTab: PropTypes.func,
  id: PropTypes.number,
  selectedTab: PropTypes.number,
};
export default SyncTab;
