import styled from 'styled-components';
import { ParentOval } from '../components/Stepper/Oval';
import { PositionedAbsoluteContainer } from '../../../components';

const FusionLogo = styled.h1`
  // font-family: AvantGarde;
  font-size: 42px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #0077c5;
  &::first-letter {
    color: #83d478;
  }
`;

const AcknowText = styled.h1`
  font-size: 42px;
  color: #df8e2d;
`;
const DashedDiv = styled.div`
  & {
    position: relative;
    height: 100%;
    width: 10px;
    margin-left: 234px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari */
    transform: rotate(45deg);
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0px;
    border-left: 2px dashed #babec5;
  }
`;

const PaymentOval = styled(ParentOval)`
  top: calc(50vh - 12px);
  left: -9px;
`;
const AcknowContainer = styled(PositionedAbsoluteContainer)`
  top: 88px;
  right: -25px;
  overflow: hidden;
  padding: 10px;
`;

const FusionContainer = styled(PositionedAbsoluteContainer)`
  bottom: -25px;
  left: -24px;
  overflow: hidden;
  padding: 10px;
`;
const RingImg = styled.img`
  height: 8px;
  margin-top: 8px;
`;

export {
  RingImg,
  FusionContainer,
  AcknowContainer,
  PaymentOval,
  DashedDiv,
  AcknowText,
  FusionLogo,
};
