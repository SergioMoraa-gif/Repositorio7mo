require('dotenv').config();
const dns = require('dns');
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

// El resolver DNS de Windows a veces rechaza las consultas SRV que
// necesita "mongodb+srv://"; forzar el DNS de Google evita el
// error "querySrv ECONNREFUSED".
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("Falta MONGODB_URI en el archivo .env");
    process.exit(1);
}

const client = new MongoClient(uri);

async function conectarMongoDB() {
    try{
        await client.connect();
        console.log("Conectado a MongoDB");
        return client.db("sample_mflix");
    } catch(erro){
        console.error("Error en la conexion a mongoDB", erro);
        process.exit(1);
    }
}

const app=express();
const port = 4000;

app.use(express.json());
app.use(cors());

let db;

conectarMongoDB().then(
    database => {
        db=database;
        console.log("Base de datos lista...");
    }
);

app.get("/movies", async ( req,res)=>{
    try{
        const movies = await db.collection("movies").find(
            {},{projection:{poster:1, title:1, fullplot:1}}
        ).limit(50).toArray();
        res.json(movies);
    } catch(error){
        res.status(500).json({mensaje:"Error al obtener los datos de la colección"});
    }
});

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:4000");
})