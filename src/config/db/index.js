const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_f8');
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect Failed');
        console.error(error);
    }
}

module.exports = { connect };
