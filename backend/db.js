const mongoose = require('mongoose');

mongoose.connect(
'mongodb+srv://iwp:study123@studyplanner.enpqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};