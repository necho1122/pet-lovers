import express, { Response } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (_, res: Response) => {
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Servidor React escuchando en el puerto ${PORT}`);
});
