import React from "react";
import MainCard from "./components/MainCard";
import LongCard from "./components/LongCard";
import FooterBar from "../components/FooterBar";
import { Icon } from 'antd';

import "./BasicForm.css"

export default class CreditImageText extends React.Component {

	render() {
		return <div className="basic_wrapper">
			<div className="company_info">
				<div className="company_name">北京天德科技有限公司</div>
				<div className="company_basic_info">4553165112554545854575855575757555555</div>
				<div className="company_info_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem odit esse quae, et praesentium eligendi, corporis minima repudiandae similique voluptatum dolorem temporibus doloremque.</div>
			</div>
			<div className="template_row">
				<MainCard
					ImgSrc="global"
					TopTitle="Industry"
					BottomText="Blockchain"
				/>
				<MainCard
					ImgSrc="gold"
					TopTitle="Company Type"
					BottomText="Normal"
				/>
				<MainCard
					ImgSrc="link"
					TopTitle="Website"
					BottomText="www.tdchain.cn"
				/>
				<MainCard
					ImgSrc="user-add"
					TopTitle="Representative"
					BottomText="Tsai"
				/>
			</div>
			<div className="blue_card_area">
				<div className="blue_wrapper">
					<Icon type="environment" className="left_img" style={{ fontSize: '30px', color: '#fff' }} />
					<div className="right_area">
						<div className="top_text">Address</div>
						<div className="bottom_font_text">北京市朝阳区</div>
					</div>
				</div>
				<div className="blue_two_wrapper">
					<Icon type="phone" className="left_img" style={{ fontSize: '30px', color: '#fff' }} />

					<div className="right_area">
						<div className="top_text">Address</div>
						<div className="bottom_font_text">北京市朝阳区</div>
					</div>
				</div>
				<div className="blue_three_wrapper">
					<Icon type="mail" className="left_img" style={{ fontSize: '30px', color: '#fff' }} />

					<div className="right_area">
						<div className="top_text">Address</div>
						<div className="bottom_font_text">北京市朝阳区</div>
					</div>
				</div>
			</div>
			<div className="bottom_template_row">
				<LongCard
					ImgSrc="switcher"
					TopTitle="Industry"
					BottomText="Blockchain"
				/>
				<LongCard
					ImgSrc="profile"
					TopTitle="Company Type"
					BottomText="Normal"
				/>
				<LongCard
					ImgSrc="mail"
					TopTitle="Website"
					BottomText="www.tdchain.cn"
				/>
			</div>
			<FooterBar />
		</div>
	}
}