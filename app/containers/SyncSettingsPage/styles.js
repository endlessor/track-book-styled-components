import styled from 'styled-components';
import { Tabs } from 'antd';
import {
  H1,
  P,
  StyledPrimaryButton,
  StyledNormalButton,
  FlexRowContainer,
} from '../../components';
const { TabPane } = Tabs;

export const AccountTabs = styled(Tabs)`
  height: 100%;
  .ant-tabs-bar {
    margin: 0;
  }
  .ant-tabs-content {
    height: 100%;
    .ant-tabs-tabpane {
      overflow: auto;
    }
  }
  .ant-tabs-nav-container {
    padding: 0 39px;
    .ant-tabs-nav {
      .ant-tabs-tab.ant-tabs-tab-active {
        color: #393a3d;
        font-size: 16px;
        font-weight: 700;
      }
      .ant-tabs-tab {
        color: #8d9096;
        font-size: 16px;
        font-weight: 500;
      }
      .ant-tabs-ink-bar {
        background-color: #2ca01c;
        height: 4px;
      }
    }
  }
`;
export const AccountTabPane = styled(TabPane)``;

export const PlanDiv = styled(FlexRowContainer)`
  border-radius: 10px;
  border: 1px solid #b5e0fd;
`;

export const UpgradeButton = styled(StyledPrimaryButton)`
  height: 45px !important;
  min-width: 122px !important;
`;

export const UpdateButton = styled(StyledNormalButton)`
  height: 45px !important;
  min-width: 122px !important;
  border-radius: 3px;
  border: 1px solid #8d9096 !important;
  background: transparent !important;
`;

export const CancelButton = styled(StyledNormalButton)`
  height: 45px !important;
  min-width: 122px !important;
  background: transparent !important;
  span {
    color: #0077c5 !important;
  }
`;

export const LeftNormalButton = styled(StyledNormalButton)`
  height: 45px !important;
  min-width: 122px !important;
  padding-left: 0 !important;
  background: transparent !important;
  span {
    margin-left: 0 !important;
    color: #0077c5 !important;
  }
`;

export const StyledH1 = styled(H1)`
  font-size: 18px;
  font-weight: 500;
  line-height: 0.89;
  color: #393a3d;
`;

export const StyledP22 = styled(P)`
  font-size: 22px;
  line-height: 1.59;
  color: #393a3d;
  margin: 0;
`;

export const StyledP24 = styled(P)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.46;
  color: #393a3d;
  margin: 0;
`;

export const StyledP18 = styled(P)`
  font-size: 18px;
  line-height: 1.94;
  color: #393a3d;
  margin: 0;
`;

export const StyledP16 = styled(P)`
  font-size: 16px;
  line-height: 1.63;
  color: ${props => (props.color ? props.color : '#8d9096')};
  margin: 0;
`;
export const StyledP12 = styled(P)`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.83;
  color: #b0b3b8;
  margin: 0;
`;
