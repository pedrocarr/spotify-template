import server from "./server.js";


server.listen(3000)
.on('listening', () => console.log('listening on port 3000'));
