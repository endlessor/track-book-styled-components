import React, { Component } from 'react';
import { FaAward } from 'react-icons/fa';
import FeesSetting from './components/FeesSetting';
import PaymentHowToImage from '../../../assets/images/payment_howto.png';
import {} from '../styles';

import {
  PaypalDiv,
  PaymentHowToimg,
  PaymentOptionDiv,
  OptionTitle,
  PaymentOptionItem,
} from './styles';

import {
  FlexRowContainer,
  FlexEndContainer,
  DropDown,
  StyledRow,
  StyledCol,
  PositionedRelativeContainer,
  StyledP,
} from '../../../components';

class Paypal extends Component {
  state = {
    optionKey: 0,
  };

  setOptionKey = key => {
    this.setState({
      optionKey: key,
    });
  };

  renderPaymentOptions = () =>
    ['Sales', 'Products & Services', 'Tax', 'Fees', 'Expenses'].map(
      (item, index) => (
        <PaymentOptionItem
          active={index === this.state.optionKey}
          key={item}
          onClick={() => this.setOptionKey(index)}
        >
          <FaAward color="#8dd1fd" size={25} />
          <OptionTitle active={index === this.state.optionKey}>
            {item}
          </OptionTitle>
        </PaymentOptionItem>
      ),
    );

  renderSettings = () => {
    switch (this.state.optionKey) {
      case 0:
        return <FeesSetting />;
      case 1:
        return <FeesSetting />;
      case 2:
        return <FeesSetting />;
      case 3:
        return <FeesSetting />;
      case 4:
        return <FeesSetting />;
      default:
        return <FeesSetting />;
    }
  };

  render() {
    return (
      <StyledRow>
        <StyledCol xs={12} md={8}>
          <PaypalDiv>
            <FlexEndContainer>
              <DropDown list={['Expense', 'Invoice', 'Payment']} />
            </FlexEndContainer>
            <FlexRowContainer alignItem="flex-start">
              <PaymentOptionDiv>{this.renderPaymentOptions()}</PaymentOptionDiv>
              {this.renderSettings()}
            </FlexRowContainer>
          </PaypalDiv>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <PositionedRelativeContainer backgroundColor="#f4f5f8">
            <StyledP fontSize="20px" margin="39px 12.4% 10px" color="#393a3d">
              Here it is how it looks like in Acknow
            </StyledP>
            <StyledP fontSize="14px" margin="12px 12.4% 24px" color="#393a3d">
              Choose the method you have chosen in your Acknow account
            </StyledP>
            <FlexEndContainer>
              <PaymentHowToimg src={PaymentHowToImage} alt="Payment How to" />
            </FlexEndContainer>
          </PositionedRelativeContainer>
        </StyledCol>
      </StyledRow>
    );
  }
}

export default Paypal;
