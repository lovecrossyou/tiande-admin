import React from "react";
import "./TopCardArea.css"

export default class CreditImageText extends React.Component {

  render() {
    const { CreditImage, CreditText, CreditNum, UpdateState, UpdateTime } = this.props;
    return <div className="card_wrapper">
      <div className="top_data_area">
        <div className="credit_image_wrapper">
          <img src={CreditImage} className="credit_image" alt=''/>
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