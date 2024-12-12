
import http from 'http';
import app from './app';
import mongoose from 'mongoose';
import { env } from './config/env.config';

const port: number = env.PORT || 5000 
const server = http.createServer(app);

mongoose.connect(env.MONGO_DB_URL).then(() => {
    server.listen(port, () => {
        console.log(`server started at http:localhost:${port}`);
    })
}).catch((err) => console.error(err))
