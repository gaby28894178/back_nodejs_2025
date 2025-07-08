import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';    
import managerRouter from './routers/index.routes.js';
const PORT = 3001

const app = express();
app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);


const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "public")));


app.use('/api',managerRouter);


app.listen(PORT, () => {
    console.log("Server running");
    console.log(`Server on http://localhost:${PORT}`)
});






