var app = require('./config/custom-express')();
require('./config/custom-database')('kauecastro:Zener47kaue@ds161931.mlab.com:61931/apijwt');

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
