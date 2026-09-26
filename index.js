import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; // rotas externas
import servicoRoutes from './routes/servicoRoute.js'; // rotas externas
import animalRoutes from './routes/animalRoute.js'; // rotas externas
import tutorRoutes from './routes/tutorRoute.js'; // rotas externas
import funcionarioRoutes from './routes/funcionarioRoute.js'; // rotas externas

const PORT = 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
app.use(routes)
app.use(servicoRoutes)
app.use(animalRoutes)
app.use(tutorRoutes)
app.use(funcionarioRoutes)
app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
// Exporta o handler compatível com Vercel
export default app;
