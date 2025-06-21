const BASE_URL = 'http://localhost:3000/api';

export const api = {
	async getProducts() {
		const response = await fetch(`${BASE_URL}/products`);
		return response.json();
	},

	async createOrder(orderData: any) {
		const response = await fetch(`${BASE_URL}/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderData),
		});
		return response.json();
	},
};
