const home = async (req,res) =>{
    try{
        const imagePath = path.join(__dirname, '../uploads/aboutpic.jpg');
        res.status(200).sendFile('../uploads/aboutpic.jpg')
    }
    catch(err){
        res.status(500).send(err);
    }
}


module.exports = { home };