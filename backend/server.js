const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const productRoutes = require('./routes/product.routes'); // Importa las rutas de producto

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conectado a la base de datos de MongoDB');

    // Puerto del servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
})
.catch(err => {
    console.error('Error al conectar con la base de datos:', err.message);
    process.exit(1);
});

// Rutas de la API
app.get('/', (req, res) => {
    res.send('API de Backend funcionando!');
});

// Usa las rutas de productos bajo el prefijo /api/products
app.use('/api/products', productRoutes);