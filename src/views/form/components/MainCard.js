import React from "react";
import { Icon } from 'antd';
import "./MainCard.css"

export default class CreditImageText extends React.Component {

    render() {
        const { ImgSrc, TopTitle, BottomText } = this.props;
        return <div className="card_area">
            {/* <img src={ImgSrc} className="left_icon" alt=''/> */}
            <Icon type={ImgSrc} className="left_icon"/>
            <div className="right_area">
                <div className="top_title">{TopTitle}</div>
                <div className="bottom_text">{BottomText}</div>
            </div>
        </div>
    }
}