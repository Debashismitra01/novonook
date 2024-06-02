const mongoose = require("mongoose");

const URI ="mongodb+srv://novoserver:novoserver@novonook.artplyh.mongodb.net/?retryWrites=true&w=majority&appName=Novonook"

const dbconnect = async() => {
    try{
        await mongoose.connect(URI);
        console.log("Database connected");
    }
    catch (err) {
       console.log(err);
        process.exit(0);
    }
}

module.exports = dbconnect;