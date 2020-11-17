const express = require('express');
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use(require('../rutas/users'))

//START SERVER  
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});