import React, { Component } from 'react';
import TopCardArea from "./components/TopCardArea";
import FooterBar from "../components/FooterBar";
import { List, Avatar } from 'antd';
import "./dashboard.css";

class Index extends Component {
	render() {
		const data = [
			{
				content: 'Revenue(ttm)',
				size: '77.86B'
			},
			{
				content: 'Revenue Per Share(ttm)',
				size: '86.79'
			},
			{
				content: 'Quarterly Revenue Growth (yoy)',
				size: '-4.20%'
			},
			{
				content: 'Gross Profit (ttm)',
				size: '36.94B'
			},
		];

		return (
			<div className="shadow-radius">
				<div className="top_card_row">
					<TopCardArea
						CreditImage="team"
						CreditText="Employees"
						CreditNum="305"
						UpdateState="Last Update"
						UpdateTime="2019.08.21"
					/>
					<TopCardArea
						CreditImage="gold"
						CreditText="Products"
						CreditNum="3"
						UpdateState="Last Update"
						UpdateTime="2019.08.21"
					/>
					<TopCardArea
						CreditImage="mail"
						CreditText="Messages"
						CreditNum="1228"
						UpdateState="Last month"
						UpdateTime="Normal"
					/>
					<TopCardArea
						CreditImage="heart"
						CreditText="Followers"
						CreditNum="+1234K"
						UpdateState="Update now"
						UpdateTime="Update"
					/>
				</div>
				<div className="statistics_list">
					<List
						className="demo-loadmore-list"
						header={<div className="header_text">Income Statement</div>}
						itemLayout="horizontal"
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2963223448,2918607601&fm=15&gp=0.jpg" />}
									description={item.content}
								/>
								<div className="size_text">{item.size}</div>
							</List.Item>
						)}
					/>
					<List
						className="demo-loadmore-list"
						header={<div className="header_text">Income Statement</div>}
						itemLayout="horizontal"
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2963223448,2918607601&fm=15&gp=0.jpg" />}
									description={item.content}
								/>
								<div className="size_text">{item.size}</div>
							</List.Item>
						)}
					/>
					<List
						className="demo-loadmore-list"
						header={<div className="header_text">Income Statement</div>}
						itemLayout="horizontal"
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2963223448,2918607601&fm=15&gp=0.jpg" />}
									description={item.content}
								/>
								<div className="size_text">{item.size}</div>
							</List.Item>
						)}
					/>
				</div>
				<FooterBar />
			</div>
		);
	}
}

export default Index;
