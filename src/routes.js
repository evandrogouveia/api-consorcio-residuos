const agentsController = require('../controllers/agentsController');
const rolesController = require('../controllers/rolesController');
const multer = require('multer');
const newsCategoryController = require('../controllers/newsCategoryController');
const newsController = require('../controllers/newsController');
const router = require('express').Router();
var cors = require('cors');

router.use(cors());

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

/*--------------------------- ROTAS DE CARGOS ---------------------------*/
//adiciona um novo cargo
router.post('/new-role', rolesController.newRole);
//obtem todos os cargos
router.get('/all-roles', rolesController.getRoles);
//atualiza o cargo
router.patch('/update-role/:id', rolesController.updateRole);
//deleta o cargo
router.delete('/delete-role/:id', rolesController.deleteRole);


/*--------------------------- ROTAS DE AGENTES ---------------------------*/
//adiciona um novo agente
router.post('/new-agent', cors(), multer(agentsController).array('file'), agentsController.newAgent);
//obtem todos os agentes
router.get('/all-agents', agentsController.getAgents);
//atualiza o agente
router.patch('/update-agent/:id', multer(agentsController).array('file'), agentsController.updateAgent);
//deleta o agente
router.delete('/delete-agent/:id', agentsController.deleteAgent);

/*--------------------------- ROTAS DE CATEGORIAS DE NOTÍCIAS ---------------------------*/
//adiciona uma nova categoria
router.post('/new-category', newsCategoryController.newCategory);
//obtem todos as categorias
router.get('/all-categories', newsCategoryController.getCategories);
//atualiza a categoria
router.patch('/update-category/:id', newsCategoryController.updateCategory);
//deleta a categpria
router.delete('/delete-category/:id', newsCategoryController.deleteCategory);

/*--------------------------- ROTAS DE NOTÍCIAS ---------------------------*/
//adiciona uma nova noticia
router.post('/new-news', multer(newsController).array('file'), newsController.newNews);
//obtem todos as noticias
router.get('/all-news', newsController.getNews);
//atualiza a noticia
router.patch('/update-news/:id', newsController.updateNews);
//deleta a noticia
router.delete('/delete-news/:id', newsController.deleteNews);

module.exports = router;