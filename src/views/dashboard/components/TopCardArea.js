import React from "react";
import "./TopCardArea.css";
import { Icon } from 'antd';

export default class CreditImageText extends React.Component {

  render() {
    const {CreditImage, CreditText, CreditNum, UpdateState, UpdateTime } = this.props;
    return <div className="card_wrapper">
      <div className="top_data_area">
        <div className="credit_image_wrapper">
        <Icon type={CreditImage} style={{ fontSize: '30px', color: '#36a2f5' }} className="center_icon" />
        </div>
        <div className="right_data_info">
          <div className="data_title">{CreditText}</div>
          <div className="data_num">{CreditNum}</div>
        </div>
      </div>
      <div className="bottom_update_area">
        <div className="bottom_update_state">{UpdateState}</div>
        <div className="bottom_update_time">{UpdateTime}</div>
      </div>
    </div>
  }
}