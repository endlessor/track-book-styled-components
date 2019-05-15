import React from 'react';
import PropTypes from 'prop-types';
import Oval from './Oval';
import { TabContainer, Label, Number } from './styles';

function SyncTab(props) {
  const { label, color, selectTab, selectedTab, id, count } = props;
  const active = selectedTab === id;
  return (
    <TabContainer active={active} onClick={() => selectTab(id)}>
      <Oval color={color} />
      <Label>{label}</Label>
      <Number color={color}>{count}</Number>
    </TabContainer>
  );
}

SyncTab.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  selectTab: PropTypes.func,
  id: PropTypes.number,
  selectedTab: PropTypes.number,
  count: PropTypes.number,
};
export default SyncTab;
