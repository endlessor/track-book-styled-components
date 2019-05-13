import React from 'react';
import {
  FaAngleDown,
  FaChartBar,
  FaExchangeAlt,
  FaBell,
  FaCog,
  FaUserCircle,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FlexRowContainer, FlexContainer } from '../../../components';

import {
  LogoHeader,
  NavigationMenu,
  AccountHeader,
  AccountSubHeader,
} from './styles';
class Header extends React.Component {
  pushLocation = pathname => {
    const { history } = this.props;
    history.push(pathname);
  };

  render() {
    const { openDrawer, history } = this.props;
    const { pathname } = history.location;
    return (
      <FlexRowContainer backgroundColor="#393a3d" padding="14px 38px 15px 41px">
        <FlexRowContainer>
          <LogoHeader>TrackBook</LogoHeader>
          <FlexContainer margin="0 0 0 35px" onClick={() => openDrawer()}>
            <FlexRowContainer alignItems="center">
              <AccountHeader>Nexus Infotech, USA</AccountHeader>
              <FaAngleDown color="#ffffff" size={16} />
            </FlexRowContainer>

            <AccountSubHeader>Credits ( 100/500)</AccountSubHeader>
          </FlexContainer>
        </FlexRowContainer>
        <FlexRowContainer>
          <FlexRowContainer
            style={{ cursor: 'pointer' }}
            onClick={() => this.pushLocation('/transactions')}
          >
            <FaExchangeAlt
              size={30}
              color={pathname === '/transactions' ? '#ffffff' : '#b0b3b8'}
            />
            <NavigationMenu active={pathname === '/transactions'}>
              Trasactions
            </NavigationMenu>
          </FlexRowContainer>
          <FlexRowContainer
            style={{ cursor: 'pointer' }}
            onClick={() => this.pushLocation('/analytics')}
            margin="0 0 0 72px"
          >
            <FaChartBar
              size={30}
              color={pathname === '/analytics' ? '#ffffff' : '#b0b3b8'}
            />
            <NavigationMenu active={pathname === '/analytics'}>
              Analytics
            </NavigationMenu>
          </FlexRowContainer>
        </FlexRowContainer>
        <FlexRowContainer>
          <FaBell size={30} color="#b0b3b8" />
          <div style={{ width: '20px' }} />
          <FaCog
            style={{ cursor: 'pointer' }}
            onClick={() => this.pushLocation('/sync-settings')}
            size={30}
            color="#b0b3b8"
          />
          <div style={{ width: '20px' }} />
          <FaUserCircle
            style={{ cursor: 'pointer' }}
            onClick={() => this.pushLocation('/accounts')}
            size={30}
            color="#b0b3b8"
          />
        </FlexRowContainer>
      </FlexRowContainer>
    );
  }
}

Header.propTypes = {
  openDrawer: PropTypes.func,
  history: PropTypes.object,
};
export default Header;
