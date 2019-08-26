
export const menus = [
	{
		path: '/dashboard',
		title: 'Dashboard',
		icon: 'home'
	},
	{
		path: '/icon',
		title: 'News',
		icon: 'file'
	},
	{
		path: '/form',
		title: 'Company Info',
		icon: 'form',
		children: [
			{
				path: '/form/basic',
				title: 'info'
			},
			{
				path: '/form/editor',
				title: 'Employee'
			},
			{
				path: '/form/markdown',
				title: 'vendor'
			},
			{
				path: '/form/editor1',
				title: 'Customer'
			},
			{
				path: '/form/markdown1',
				title: 'products'
			}
		]
	},
	{
		path: '/menu',
		title: 'Financial',
		icon: 'menu',
		children: [
			{
				path: '/menu/level',
				title: 'Income statement',
			},
			{
				path: '/menu/level1',
				title: 'Balance Sheet',
			},
			{
				path: '/menu/level2',
				title: 'Cash Flow',
			}
		]
	},
	{
		path: '/table',
		title: 'Bank',
		icon: 'table',
	},
	
	{
		path: '/account',
		title: 'Accounting',
		icon: 'copyright'
	},
	
	{
		path: '/receipt',
		title: 'Receipts',
		icon: 'copyright'
	},
	
	{
		path: '/payment',
		title: 'Payment',
		icon: 'copyright'
	}
];
