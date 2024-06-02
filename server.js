import express from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const stripe = new Stripe('private-key-here', {
	apiVersion: '2022-11-15',
});

app.use(bodyParser.json());
app.use(cors());

app.post('/payment', async (req, res) => {
	const { token, amount } = req.body;

	try {
		const charge = await stripe.charges.create({
			amount: amount,
			currency: 'usd',
			source: token.id,
			description: 'Description of the purchase',
		});
		res.send({ success: true, charge });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

app.listen(3001, () => {
	console.log('Server running on port 3001');
});
