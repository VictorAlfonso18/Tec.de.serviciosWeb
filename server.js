const express = require('express');
const app = express();

app.use(express.json());

// Ruta raíz para verificar el servidor
app.get('/', (req, res) => {
    res.send('¡Servidor Node.js funcionando correctamente!');
});

// Endpoint POST para transacciones
app.post('/transactions', (req, res) => {
    const transaction = req.body;
    res.status(201).send({ message: 'Transaction saved successfully!' });
});

// Endpoint GET para obtener existencias
app.get('/stock', (req, res) => {
    const { productId, warehouseId } = req.query;
    res.status(200).send({ stock: 100 });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => console.log('Server running on port 3000'));