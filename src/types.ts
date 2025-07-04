export interface Product {
	id: number;
	name: string;
	price: number;
}

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface CartState {
	items: CartItem[];
	total: number;
}

export type Data = {
	dogs: Birds;
	gatos: Gatos;
	birds: Birds;
	pets: Pets;
};

export type Birds = {
	food: Accesorio[];
	accesorios: Accesorio[];
};

export type Accesorio = {
	id: string;
	descripcion: string;
	foto: string;
	precio: number;
	raza?: Raza;
};

export enum Raza {
	Bird = 'bird',
	Cachorro = 'cachorro',
	Gato = 'gato',
}

export type Gatos = {
	comida: Accesorio[];
	accesorios: Accesorio[];
};

export type Pets = {
	adoption: Accesorio[];
};
