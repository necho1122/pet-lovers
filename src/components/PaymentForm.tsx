import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);
		if (!cardElement) {
			return;
		}

		const result = await stripe.createToken(cardElement);

		if (result.error) {
			console.log(result.error.message);
		} else {
			console.log(result.token);
			// Aquí envías el token a tu servidor
			try {
				const response = await fetch('http://localhost:3001/payment', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ token: result.token, amount: 2000 }), // El monto debe ser en centavos
				});

				const data = await response.json();
				if (data.success) {
					console.log('Pago realizado con éxito');
				} else {
					console.log(data.error);
				}
			} catch (error) {
				console.error('Error:', error);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button
				type='submit'
				disabled={!stripe}
			>
				Pagar
			</button>
		</form>
	);
};

const PaymentForm: React.FC = () => {
	const stripePromise = loadStripe(
		'pk_live_51NpxlhLQD4t0YcPTmL3N0z5upDeSCNvh6v8fCG1Lfa5N0Sh8qfxDOzury0xAt3U4gxfNCTQ5k46Wt3kwsoBmiIar00kZFHAiGh'
	);

	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};

export default PaymentForm;
