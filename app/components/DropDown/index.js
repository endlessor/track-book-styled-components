import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/fa';
import { DDWrapper, DDHeader, DDList, DDListItem, StyledP13 } from './styles';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  assignNode(node) {
    this.node = node;
  }

  render() {
    const { list } = this.props;
    const { listOpen } = this.state;
    return (
      <DDWrapper ref={node => this.assignNode(node)}>
        <DDHeader onClick={() => this.toggleList()}>
          <FaCog size={16} color="#5eb7f1" />
          <StyledP13>Customize</StyledP13>
        </DDHeader>
        {listOpen && (
          <DDList className="dd-list">
            {list.map(item => (
              <DDListItem key={item}>{item}</DDListItem>
            ))}
          </DDList>
        )}
      </DDWrapper>
    );
  }
}

DropDown.propTypes = {
  list: PropTypes.array,
};

export default DropDown;
