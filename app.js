require("dotenv").config();
const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(process.env.uri);

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


app.get('/', async function (req, res) {
    client.connect;
    //databasesList = await client.db().admin().listDatabases();
    //console.log("Databases:");
    //databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    const collection = client.db("myFirstDatabse").collection("posts");
    console.log('connected!');
       
    const result = await collection.find().toArray();
    
    console.log(result);
            
    //res.send(result);

    res.render('index' ,{ players : result    })
    
 app.post('/players', (req, res) => {
 console.log(req.body); 
    client.connect;
    const collection = client.db("myFirstDatabse").collection("posts");
    collection.insertOne(req.body)
    .then(result => {
      res.redirect('/')
     })
    .catch(error => console.error(error))
})


          
});
    




app.listen(process.env.PORT || 3000,
  () => console.log(`server is running on port: ${process.env.PORT}` ));
