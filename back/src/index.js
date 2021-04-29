/**
 * First, we import the function we need from the Node `http` library
 * This library is included by default with Node 
 **/
 import { createServer } from 'http'
 import app from './app'

 
 const whenRequestReceived = (request /* the request sent by the client*/, response /* the response we use to answer*/) => {
  
   response.writeHead(200, { 'Content-type': `text/plain` });
   
   response.write(`Hello`);
   
   response.end( );
 }
 
 
 const server = createServer(whenRequestReceived)
 

 server.liapp.get( '/', (req, res) => res.send("ok") );
 app.listen( 8080, () => console.log('server listening on port 8080') )
