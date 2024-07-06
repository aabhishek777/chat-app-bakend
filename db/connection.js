const mongoose = require('mongoose');

console.log(process.env.DB_USERNAME);
// const url = `mongodb+srv://${process.env.DB_USERNAME||abhisheksingh}:${process.env.DB_PASSWORD||1111}@cluster0.zw6hky5.mongodb.net/?retryWrites=true&w=majority`;


const url =`mongodb+srv://aabhishekksinghh:Vo43JtexrD8dAVRB@cluster0.srt9bqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// const url =abhisheksingh:1111
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))