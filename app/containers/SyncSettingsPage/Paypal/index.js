import React, { Component } from 'react';
import { FaAward } from 'react-icons/fa';
import LineTo from 'react-lineto';
import FeesSetting from './components/FeesSetting';
import PaymentHowToImage from '../../../assets/images/payment_howto.png';
import {} from '../styles';

import {
  PaypalDiv,
  PaymentHowToimg,
  PaymentOptionDiv,
  OptionTitle,
  PaymentOptionItem,
  FirstCircle,
  SecondCircle,
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
    firstPoint: {
      x: 0,
      y: 0,
    },
    secondPoint: {
      x: 0,
      y: 0,
    },
  };

  componentDidMount() {
    this.setState({
      firstPoint: {
        x: this.first.getBoundingClientRect().x,
        y: this.first.getBoundingClientRect().y,
      },
      secondPoint: {
        x: this.second.getBoundingClientRect().x,
        y: this.second.getBoundingClientRect().y,
      },
    });
  }

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
        return (
          <FeesSetting>
            <FirstCircle
              className="A"
              size="11px"
              ref={ref => {
                this.first = ref;
              }}
            />
            <LineTo
              from="A"
              to="B"
              borderColor="#8dd1fd"
              borderStyle="dashed"
            />
          </FeesSetting>
        );
      case 1:
        return (
          <FeesSetting>
            <FirstCircle
              className="A"
              size="11px"
              ref={ref => {
                this.first = ref;
              }}
            />
            <LineTo
              from="A"
              to="B"
              borderColor="#8dd1fd"
              borderStyle="dashed"
            />
          </FeesSetting>
        );
      case 2:
        return (
          <FeesSetting>
            <FirstCircle
              className="A"
              size="11px"
              ref={ref => {
                this.first = ref;
              }}
            />
            <LineTo
              from="A"
              to="B"
              borderColor="#8dd1fd"
              borderStyle="dashed"
            />
          </FeesSetting>
        );
      case 3:
        return (
          <FeesSetting>
            <FirstCircle
              className="A"
              size="11px"
              ref={ref => {
                this.first = ref;
              }}
            />
            <LineTo
              from="A"
              to="B"
              borderColor="#8dd1fd"
              borderStyle="dashed"
            />
          </FeesSetting>
        );
      case 4:
        return (
          <FeesSetting>
            <FirstCircle
              className="A"
              size="11px"
              ref={ref => {
                this.first = ref;
              }}
            />
            <LineTo
              from="A"
              to="B"
              borderColor="#8dd1fd"
              borderStyle="dashed"
            />
          </FeesSetting>
        );
      default:
        return (
          <FeesSetting>
            <FirstCircle
              className="A"
              size="11px"
              ref={ref => {
                this.first = ref;
              }}
            />
            <LineTo
              from="A"
              to="B"
              borderColor="#8dd1fd"
              borderStyle="dashed"
            />
          </FeesSetting>
        );
    }
  };

  render() {
    return (
      <StyledRow>
        <svg style={{ position: 'absolute' }}>
          <line
            x1={this.state.firstPoint.x}
            y1={this.state.firstPoint.y}
            x2={this.state.secondPoint.x}
            y2={this.state.secondPoint.y}
          />
        </svg>
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
            <PositionedRelativeContainer>
              <FlexEndContainer>
                <SecondCircle
                  className="B"
                  size="11px"
                  ref={ref => {
                    this.second = ref;
                  }}
                />
                <PaymentHowToimg src={PaymentHowToImage} alt="Payment How to" />
              </FlexEndContainer>
            </PositionedRelativeContainer>
          </PositionedRelativeContainer>
        </StyledCol>
      </StyledRow>
    );
  }
}

export default Paypal;
