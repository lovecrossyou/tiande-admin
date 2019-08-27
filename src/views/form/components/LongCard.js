import React from "react";
import "./LongCard.css"

export default class CreditImageText extends React.Component {

    render() {
        const { ImgSrc, TopTitle, BottomText } = this.props;
        return <div className="long_card_area">
            <img src={ImgSrc} className="long_left_icon" alt=''/>
            <div className="long_right_area">
                <div className="long_top_title">{TopTitle}</div>
                <div className="long_bottom_text">{BottomText}</div>
            </div>
        </div>
    }
}