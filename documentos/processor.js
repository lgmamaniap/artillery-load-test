const fs = require('fs');
const path = require('path');

module.exports = {
  addTimestamp: function (context, events, done) {
    // Leer el archivo JSON
    const jsonPath = path.resolve(__dirname, 'data.json');
    const requestBody = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    // Agregar un timestamp al campo específico
    const timestamp = Date.now();
    requestBody.nombre = `${requestBody.nombre}_${timestamp}`;
    requestBody.sigla  = `${requestBody.sigla}_${timestamp}`.substring(8, `${timestamp}`.length + 3);

    // Guardar el JSON modificado en el contexto de Artillery
    context.vars.requestBody = requestBody;

    return done();
  }
};
