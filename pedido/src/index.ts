import { Connection, createConnection } from 'typeorm';
import app from './app';

try{
    createConnection().then(connection => {
        app.listen(3333, () => {
            console.log('Running on port 3333')
        });
    }).catch(error => {
        console.log("N foi possivel conectar ao DB. ", error.message)
    })
    
}catch (error) {
    console.log(error);
}