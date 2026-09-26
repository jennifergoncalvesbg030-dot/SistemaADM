import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; 
import servicoRoutes from './routes/servicoRoute.js'; 
import animalRoutes from './routes/animalRoute.js'; 
import tutorRoutes from './routes/tutorRoute.js'; 
import funcionarioRoutes from './routes/funcionarioRoute.js'; 

const PORT = 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

app.use(routes)
app.use(servicoRoutes)
app.use(animalRoutes)
app.use(tutorRoutes)
app.use(funcionarioRoutes)
app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});

export default app;
