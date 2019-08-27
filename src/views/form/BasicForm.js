import React from "react";
import MainCard from "./components/MainCard";
import LongCard from "./components/LongCard";
import FooterBar from "../components/FooterBar";
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
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Industry"
					BottomText="Blockchain"
				/>
				<MainCard
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Company Type"
					BottomText="Normal"
				/>
				<MainCard
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Website"
					BottomText="www.tdchain.cn"
				/>
				<MainCard
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Representative"
					BottomText="Tsai"
				/>
			</div>
			<div className="blue_card_area">
				<div className="blue_wrapper">
					<img src="http://pw46mclen.bkt.clouddn.com/dyvms%20%E8%AF%AD%E9%9F%B3%E6%9C%8D%E5%8A%A1.png" className="left_img" alt='' />
					<div className="right_area">
						<div className="top_text">Address</div>
						<div className="bottom_font_text">北京市朝阳区</div>
					</div>
				</div>
				<div className="blue_two_wrapper">
					<img src="http://pw46mclen.bkt.clouddn.com/opensearch%20%281%29.png" className="left_img" alt='' />
					<div className="right_area">
						<div className="top_text">Address</div>
						<div className="bottom_font_text">北京市朝阳区</div>
					</div>
				</div>
				<div className="blue_three_wrapper">
					<img src="http://pw46mclen.bkt.clouddn.com/dyvms%20%E8%AF%AD%E9%9F%B3%E6%9C%8D%E5%8A%A1.png" className="left_img" alt='' />
					<div className="right_area">
						<div className="top_text">Address</div>
						<div className="bottom_font_text">北京市朝阳区</div>
					</div>
				</div>
			</div>
			<div className="bottom_template_row">
				<LongCard
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Industry"
					BottomText="Blockchain"
				/>
				<LongCard
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Company Type"
					BottomText="Normal"
				/>
				<LongCard
					ImgSrc="http://img2.imgtn.bdimg.com/it/u=4016587913,1535101933&fm=26&gp=0.jpg"
					TopTitle="Website"
					BottomText="www.tdchain.cn"
				/>
			</div>
			<FooterBar />
		</div>
	}
}