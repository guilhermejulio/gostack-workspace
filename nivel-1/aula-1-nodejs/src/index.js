const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());

app.listen(2398, () => {
    console.log('Back-end started! ')
});

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
* Tipos de parâmetros:
* 
* Query Params: Filtros e paginação
* Route Params: Identificar recursos (Atualizar/Deletar)
* Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
*/

/**
 * Middleware:
 * 
 * Interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição.
 */


const projects = [];

//Middleware - Interceptador que mostra qual rota está sendo chamada e com qual metodo
function logRequests(request, response, next){
    const { method, url } = request;

    /**
   * O método "toUppercase" precisa ser chamado sem os parênteses para que não 
   * apresente erro no insomnia, por exemplo
   * 
   * Antes:
   * const logLabel = `[${method.toUppercase()} ${url}]`;
   * 
   * Depois:
   * const logLabel = `[${method.toUppercase} ${url}]`;
   */

    const logLabel = `[${method.toUppercase} ${url}]`;
    
    console.time(logLabel);

    next(); //Proximo middleware

    console.timeEnd(logLabel);
}

//validando se o id é um id valido
function validateProjectId(request,response,next){
    const { id } = request.params;
    if(!isUuid(id)){
        return response.status(400).json({error: 'Invalid project ID.'});
    }

    return next();
}


app.use(logRequests);
app.use('/projects/:id', validateProjectId);
app.get('/projects', (request, response) => {
    const {title} = request.query;

    //criando um filtro pelo titulo
    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner} = request.body;

    const project = { id:uuid(), title, owner }
    projects.push(project); //adicionando o projeto

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'})
    }

    const project = { 
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;
    return response.json(project);
});

app.delete('/projects/:id',(request, response) => {
    const { id } = request.params;
    
    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'})
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

