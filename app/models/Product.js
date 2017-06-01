var mongoose = require('mongoose');

var schema = mongoose.Schema ({
  name : {
    type: String,
    required: true
  },
  brand : {
    type : String,
    required: true
  }
});

mongoose.model('Product', schema, 'Product');
