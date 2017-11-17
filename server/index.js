var express = require('express');
let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function formatDate(){
    currentDate = new Date().toLocaleDateString();
    formattedDate = currentDate.split("-");
    finished = '';
    formattedDate = formattedDate.reverse();
    for(var i=0;i<formattedDate.length;i++){
        if(i!= (formattedDate.length-1)){
        finished += formattedDate[i] + "/";
        }
        else{
            finished += formattedDate[i];
        }
    }
    return finished;
}

app.get('/books',(req,res)=>{
    date = formatDate();

    res.json({
        data:[
        {Title: 'Harry Potter', Date: date, Author: 'J.K Rowling'},
        {Title: 'Consequences', Date: date, Author: 'Aleatha Romig'},
        {Title: 'On Dublin Street', Date: date, Author: 'Samantha Young'}
    ]})
})

app.listen(8000, () => console.log('Listenning on port 8000!'));