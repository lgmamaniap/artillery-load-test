const fs = require('fs');
const path = require('path');

module.exports = {
  getDocumentData: function (context, events, done) {
    // Leer el archivo JSON
    const jsonPath = path.resolve(__dirname, 'documento.json');
    const documentBody = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    const timestamp = Date.now();
    documentBody.nombre = `${documentBody.nombre}_${timestamp}`;

    // Guardar el JSON modificado en el contexto de Artillery
    context.vars.documentBody = documentBody;

    return done();
  }
};
