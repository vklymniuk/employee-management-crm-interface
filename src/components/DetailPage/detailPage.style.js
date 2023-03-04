import styled from 'styled-components';
import { borderRadius } from 'library/style-util';

export const DetailCard = styled.div`
  position: relative;
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;

  @media only screen and (max-width: 1120px) {
    align-items: center;
  }

  .ant-select {
    width: 100%;
  }

  .typeSelect {
    width: 140px;
    margin-left: 1em;
    flex-shrink: 0;
  }

  .ant-row {
    .ant-select-selection__rendered > ul > li {
      display: grid;
    }
  }

  .ant-list-footer {
    width: 100%;
    max-width: 100%;
  }

  .ant-list-item.technologiesListItem {
    justify-content: space-between;
  }

  .customListItem {
    position: relative;
    display: flex;
    font-size: 1.2em;
    justify-content: flex-end;
    padding: 5px 10px;
    flex-wrap: nowrap;

    .listEllipsisContent {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: left;
      width: 100%;
    }

    .dragArea {
      opacity: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: move;
    }
  }

  .actionDelete {
    margin-left: 15px;
    font-size: 25px;
    color: #A8AABC;
    cursor: pointer;
    z-index: 100;
  };

  .actionDisabled {
    color: gray;
    cursor: not-allowed;
  }

  .detailButton {
    border-radius: 3px;
    margin-left: 0.7em;
    padding: 0 10px;
    height: 30px;

    &.addSenderButton {
      @media (max-width: 524px) {
        margin: 10px 0 0 0;
      }
    }
  }

  .detailLabel {
    width: 180px;
    margin-right: 10px;
    flex-shrink: 0;

    &.contactsLabel {
      width: 70px;
    }

    @media (max-width: 524px) {
      width: 100px;
    }
  }

  .rightBlock {
    float: right;
    text-align: right;
    margin-left: 1em;
    margin-top: 10px;
    .dateText{
      font-size: 1.2em;
    }
  }

  .footerSelect {
    width: calc(100% - 165px);
    max-width: calc(100% - 165px);
    @media (max-width: 524px) {
      width: calc(100% - 105px);
      max-width: calc(100% - 105px);
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 325px;
  flex-direction: ${(props) => props.direction};

  @media (max-width: 850px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 989px) and (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const DetailBlock = styled.div`
  height: 37px;
  display: flex;
  align-items: center;
  max-width: 200px;

  button {
    ${borderRadius('17px')};
    top: 7px;
    bottom: 7px;
  }

  .ant-form-item-control {
    line-height: initial;
  }

  .switchContainer {
    height: 37px;
    .ant-switch {
      margin: 0;
    }
  }
`;

export const AddItem = styled.div`
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  .itemSelect {
    width: calc(100% - 250px);
    max-width: calc(100% - 250px);
  }

  .itemSelect.projectItemSelect {
    width: 100%;
  }

   .resourceItemSelect {
    width: 100%;
    max-width: calc(100% - 260px);
  }

  @media (max-width: 524px) {
    justify-content: space-between;

    .itemSelect, .resourceItemSelect {
      width: 100%;
      max-width: 100%;
      margin-bottom: 5px;
    }

    .typeSelect {
      width: 80%;
      max-width: calc(100% - 80px);
      margin-left: 0px;
    }
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  @media (max-width: 524px) {
    flex-wrap: wrap;
  }
`;

export const SpinWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 180px;

    .ant-spin {
      position: relative;
      top: calc(50% - 8px);
      left: calc(50% - 8px);

      .ant-spin-dot {
        width: initial;
        height: initial;

        .ant-spin-dot-item {
          width: 15px;
          height: 15px;
        }
      }
    }
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
`;

export const BoxInfoTitle = styled(BoxTitle)`
  justify-content: flex-end;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};
  flex-shrink: 0;
  margin-right:  20px;
  margin-left: inherit;

 @media only screen and (min-width: 989px) and (max-width: 1400px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

 @media (max-width: 850px) {
    margin: 5px auto;
  }

 .isoLogoImage {
    width: 70px;
    height: 70px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    overflow: hidden;
    ${borderRadius('5px')};

   .avatar-uploader {
      width: 100%;
      height: 100%;

     .avatarContainer {
       position: relative;

       .avatarUploadOverflow {
         display: none;

         p {
           color: #ffffff;
           font-weight: 500;
         }
       }

       &:hover .avatarUploadOverflow {
         display: flex;
         cursor: pointer;
         position: absolute;
         background-color: rgba(13, 13, 13, 0.6);
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         border-radius: 50%;
         align-items: center;
         justify-content: center;
       }
     }
    }

   img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .uploadBtn {
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.5em;
    text-align: center;

    .uploadIcon {
      font-size: 2.5em;
    }
  }
`;

export const ContentHolder = styled.div`
  display: block;
  flex-direction: column;
  margin-top: 0;
  width: 100%;

  &.isoBoxWrapper {
    margin: 0 !important;
  }
`;

export const MailingContentHolder = styled.div`
    display: grid;
    grid-template-areas:
      "left right btn";
    grid-template-columns: 1fr 2fr 50px;
    grid-template-rows: 100%;

    @media (max-width: 998px) {
      grid-template-areas:
        "left btn"
        "right btn";
      grid-template-columns: 1fr 50px;
      grid-template-rows: 1fr;
    }

    &.mailingContentHolder {
      padding: 0;
    }

    .left {
      grid-area: left;
      width: 80%;

      @media (max-width: 768px) {
        width: 60%;
      }

      @media (max-width: 525px) {
        margin-top: 45px;
      }
    }

    .right {
      grid-area: right;
      width: 80%;

      @media (max-width: 998px) {
        width: 80%;
      }

      @media (max-width: 768px) {
        width: 60%;
      }
    }

    .doneBtn {
      grid-area: btn;

      border-radius: 3px;
      padding: 0 10px;
      position: absolute;
      right: 15px;
      top: 15px;
      z-index: 1;
    }
`;

export const InfoContentHolder = styled(ContentHolder)`
  width: ${(props) => props.contentWidth};
  max-width: ${(props) => props.contentWidth};
  @media (max-width: 850px) {
    width: 100%;
    max-width: 100%;
  }
  @media only screen and (min-width: 989px) and (max-width: 1400px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 524px) {
    flex-wrap:wrap;

    .detailLabel {
      width: 100%;
    }
  }

  &.mobileNowrap {
    @media (max-width: 524px) {
      flex-wrap: nowrap;
    }

    .detailLabel {
      width: 100px;
    }
  }

  &.mailingDetailRow {
    margin: 5px 10px;
    display: grid;
    grid-template-columns: 125px 100%;

    @media (max-width: 524px) {
      grid-template-columns: 105px 100%;
    }
  }

  .ant-form-item {
    margin-bottom: 0;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);


    @media (max-width: 768px) {
      width: calc(100% - 75px);
      max-width: calc(100% - 75px);
    }

    @media (max-width: 524px) {
      width: 100%;
      max-width: 100%;
    }

    &.mailingFormItem {
      width: 100%;
    }
  }

  .ant-input {
    margin-bottom: 0;
  }

  .ant-calendar-picker,
  .ant-input-number {
    width: 100%;
  }

  .isoInfoTextArea {
    min-height: 40px;
  }

  .addItemSelect {
    width: 100%;
    max-width: calc(100% - 65px);
  }

  .warningInput {
    .ant-form-item-children {
      position:relative;
      display: block;

      .anticon {
        position: absolute;
        right: 25px;
      }

      .warningIcon {
        position: absolute;
        right: 5px;
        top: 14px;
        background-color: white;
        cursor: pointer;
      }
    }

    .ant-calendar-picker-icon {
      right: 20px;
    }
    .ant-input {
      padding-right: 20px;
    }
  }
`;

export const DetailRowArea = styled(DetailRow)`
  align-items: start;
`;