import React from 'react';
import { connect } from 'react-redux';
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

import { fetchAccounts } from '../../../../../actions/accountsActions';

class LeftDrawer extends React.Component {
  componentDidMount() {
    const { fetchAccounts_ } = this.props;
    fetchAccounts_();
  }

  render() {
    const { onClose, isOpen, accounts } = this.props;
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

          {accounts.map((item, index) => (
            <FlexRowContainer
              key={item.id}
              backgroundColor={index % 2 === 0 ? '#ffffff' : 'transparent'}
              alignItem="center"
              padding="12px 25px 12px 37px"
            >
              <FlexContainer>
                <StyledP14>{item.name}</StyledP14>
                <StyledP14 color="#8d9096">{item.region}</StyledP14>
              </FlexContainer>
              {item.status === 'Active' ? <TickOval /> : <OvalEmpty />}
            </FlexRowContainer>
          ))}
        </DrawContent>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
});

const mapDispatchToProps = dispatch => ({
  fetchAccounts_: () => {
    dispatch(fetchAccounts());
  },
});

LeftDrawer.propTypes = {
  accounts: PropTypes.array,
  fetchAccounts_: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftDrawer);
