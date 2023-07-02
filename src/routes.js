
const multer = require('multer');
const authController = require('../controllers/login/authController');
const atasController = require('../controllers/institucional/atasController');
const consorcioController = require('../controllers/institucional/consorcioController');
const contratosRateioController = require('../controllers/institucional/contratosRateioController');
const andamentoController = require('../controllers/licitacoes/andamentoController');
const licitacoesController = require('../controllers/licitacoes/licitacoesController');
const municipiosController = require('../controllers/consorcio/municipiosController');
const newsConsorcioCategoryController = require('../controllers/news/newsConsorcioCategoryController');
const newsConsorcioController = require('../controllers/news/newsConsorcioController');
const polosController = require('../controllers/consorcio/polosController');
const categoriesPsController = require('../controllers/processo-seletivo/categoriesPsController');
const processoSeletivoController = require('../controllers/processo-seletivo/processoSeletivoController');
const transparencyConsorcioController = require('../controllers/consorcio/transparencyConsorcioController');
const userController = require('../controllers/login/userController');
const headerController = require('../controllers/header/headerController');
const homeController = require('../controllers/home/homeController');
const videosController = require('../controllers/consorcio/videosController');
const lrfController = require('../controllers/lrf-contas-publicas/lrfController');
const leisController = require('../controllers/lrf-contas-publicas/leisController');
const configuracoesController = require('../controllers/configuracoes/configuracoesController');
const arquivosPoloController = require('../controllers/consorcio/arquivosPoloController');
const estatutoController = require('../controllers/institucional/estatutoController');
const protocoloIntencoesController = require('../controllers/institucional/protocoloIntencoesController');
const router = require('express').Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

/*--------------------------- (CONSORCIO) - ROTAS DO HEADER ---------------------------*/
//cadastra o header
router.post('/register-header', multer(headerController).fields([
    {name: 'logo'},
    {name: 'background'},
]), headerController.registerHeader);
//obtem dados do header
router.get('/header', headerController.geHeader);
//atualiza o header
router.patch('/update-header/:id', multer(headerController).fields([
    {name: 'logo'},
    {name: 'background'},
]), headerController.updateHeader);

/*--------------------------- (CONSORCIO) - ROTAS DA HOME ---------------------------*/
//cadastra a home
router.post('/register-home', multer(homeController).fields([
    {name: 'banner1'},
    {name: 'banner2'},
    {name: 'banner3'},
    {name: 'banner4'},
    {name: 'banner5'},
    {name: 'banner6'}
]), homeController.registerHome);
//obtem dados da home
router.get('/home', homeController.getHome);
//atualiza a home
router.patch('/update-home/:id', multer(homeController).fields([
    {name: 'banner1'},
    {name: 'banner2'},
    {name: 'banner3'},
    {name: 'banner4'},
    {name: 'banner5'},
    {name: 'banner6'}
]), homeController.updateHome);

/*--------------------------- (CONSORCIO) - ROTAS DE VÌDEOS ---------------------------*/
//adiciona um novo video
router.post('/new-video', videosController.newVideo);
//obtem todos os videos
router.get('/all-videos', videosController.getVideos);
//atualiza o video
router.patch('/update-video/:id', videosController.updateVideo);
//deleta o video
router.delete('/delete-video/:id', videosController.deleteVideo);

/*--------------------------- (CONSORCIO) - ROTAS DE LRF ---------------------------*/
//adiciona uma nova LRF
router.post('/new-lrf',  multer(lrfController).array('file'), lrfController.newLrf);
//obtem todas as LRF
router.get('/all-lrf', lrfController.getAllLrf);
//atualiza a LRF
router.patch('/update-lrf/:id', multer(lrfController).array('file'), lrfController.updateLrf);
//deleta a LRF
router.delete('/delete-lrf/:id', lrfController.deleteLrf);

/*--------------------------- (CONSORCIO) -  ROTAS DE LEIS ---------------------------*/
//adiciona uma nova LEI
router.post('/new-lei',  multer(leisController).array('file'), leisController.newLei);
//obtem todas as LEI
router.get('/all-leis', leisController.getAllLeis);
//atualiza a LEI
router.patch('/update-lei/:id', multer(leisController).array('file'), leisController.updateLei);
//deleta a LEI
router.delete('/delete-lei/:id', leisController.deleteLei);

/*--------------------------- (CONSORCIO) - ROTAS DE MUNICIPIOS  ---------------------------*/
//adiciona um novo municipio
router.post('/new-county', multer(municipiosController).array('file'), municipiosController.newCounty);
//obtem todos os municipios
router.get('/all-county', municipiosController.getCounty);
//atualiza o municipio
router.patch('/update-county/:id', multer(municipiosController).array('file'), municipiosController.updateCounty);
//deleta o municipio
router.delete('/delete-county/:id', municipiosController.deleteCounty);

/*--------------------------- (CONSORCIO) - ROTAS DE POLOS  ---------------------------*/
//adiciona um novo polo
router.post('/new-polo', multer(polosController).array('file'), polosController.newPolo);
//obtem todos os polos
router.get('/all-polos', polosController.getPolos);
//atualiza o polo
router.patch('/update-polo/:id', multer(polosController).array('file'), polosController.updatePolo);
//deleta o polo
router.delete('/delete-polo/:id', polosController.deletePolo);

/*--------------------------- (CONSORCIO) - ROTAS DE ARQUIVOS DE POLO ---------------------------*/
//adiciona uma novo arquivo
router.post('/new-arquivo',  multer(arquivosPoloController).array('file'), arquivosPoloController.newArquivo);
//obtem todas os arquivos
router.get('/all-arquivos', arquivosPoloController.getAllArquivos);
//atualiza o arquivo
router.patch('/update-arquivo/:id', multer(arquivosPoloController).array('file'), arquivosPoloController.updateArquivo);
//deleta arquivo
router.delete('/delete-arquivo/:id', arquivosPoloController.deleteArquivo);

/*--------------------------- (CONSORCIO) - ROTAS DE CONSORCIO ---------------------------*/
//adiciona dados da consorcio
router.post('/new-consorcio', consorcioController.newConsorcio);
//obtem dados da consorcio
router.get('/all-consorcio', consorcioController.getConsorcio);
//atualiza dados da consorcio
router.patch('/update-consorcio/:id', consorcioController.updateConsorcio);

/*--------------------------- (CONSORCIO) - ROTAS DE CATEGORIAS DE NOTÍCIAS ---------------------------*/
//adiciona uma nova categoria
router.post('/new-consorcio-category', newsConsorcioCategoryController.newConsorcioCategory);
//obtem todos as categorias
router.get('/all-consorcio-categories', newsConsorcioCategoryController.getConsorcioCategories);
//atualiza a categoria
router.patch('/update-consorcio-category/:id', newsConsorcioCategoryController.updateConsorcioCategory);
//deleta a categpria
router.delete('/delete-consorcio-category/:id', newsConsorcioCategoryController.deleteConsorcioCategory);

/*--------------------------- (CONSORCIO) - ROTAS DE NOTÍCIAS ---------------------------*/
//adiciona uma nova noticia
router.post('/new-consorcio-news', multer(newsConsorcioController).array('file'), newsConsorcioController.newConsorcioNews);
//obtem todos as noticias
router.get('/all-consorcio-news', newsConsorcioController.getConsorcioNews);
//atualiza a noticia
router.patch('/update-consorcio-news/:id', multer(newsConsorcioController).array('file'), newsConsorcioController.updateConsorcioNews);
//deleta a noticia
router.delete('/delete-consorcio-news/:id', newsConsorcioController.deleteConsorcioNews);

/*--------------------------- (CONSORCIO) - ROTAS DE PROCESSO SELETIVO ---------------------------*/
//adiciona uma novo Processo Seletivo
router.post('/new-processo-seletivo',  multer(processoSeletivoController).array('file'), processoSeletivoController.newProcessoSeletivo);
//obtem todas os Processo Seletivo
router.get('/all-processo-seletivo', processoSeletivoController.getAllProcessoSeletivo);
//atualiza o Processo Seletivo
router.patch('/update-processo-seletivo/:id', multer(processoSeletivoController).array('file'), processoSeletivoController.updateProcessoSeletivo);
//deleta o Processo Seletivo
router.delete('/delete-processo-seletivo/:id', processoSeletivoController.deleteProcessoSeletivo);

/*--------------------------- (CONSORCIO) - ROTAS DE CATEGORIAS DE PROCESSO SELETIVO ---------------------------*/
//adiciona uma nova categoria de processo seletivo
router.post('/new-ps-category', categoriesPsController.newPsCategory);
//obtem todos as categorias de processo seletivo
router.get('/all-ps-categories', categoriesPsController.getPsCategories);
//obtem todas as categorias de processo seletivo conforme busca
router.get('/search-ps-categories', categoriesPsController.getSearchCategories)
//atualiza a categoria de processo seletivo
router.patch('/update-ps-category/:id', categoriesPsController.updatePsCategory);
//deleta a categpria de processo seletivo
router.delete('/delete-ps-category/:id', categoriesPsController.deletePsCategory);

/*--------------------------- (CONSORCIO) - ROTAS DE CONTRATOS DE RATEIO ---------------------------*/
//adiciona uma novo Contrato
router.post('/new-contrato',  multer(contratosRateioController).array('file'), contratosRateioController.newContrato);
//obtem todas os Contratos
router.get('/all-contratos', contratosRateioController.getAllContratos);
//obtem todas os Contratos conforme busca
router.get('/search-contratos', contratosRateioController.getSearchContratos);
//atualiza o Contrato
router.patch('/update-contrato/:id', multer(contratosRateioController).array('file'), contratosRateioController.updateContrato);
//deleta o Contrato
router.delete('/delete-contrato/:id', contratosRateioController.deleteContrato);

/*--------------------------- (CONSORCIO) - ROTAS DE ATAS ---------------------------*/
//adiciona uma nova ata
router.post('/new-ata',  multer(atasController).array('file'), atasController.newAta);
//obtem todas as atas
router.get('/all-atas', atasController.getAllAtas);
//obtem todas as atas conforme busca
router.get('/search-atas', atasController.getSearchAtas);
//atualiza a ata
router.patch('/update-ata/:id', multer(atasController).array('file'), atasController.updateAtas);
//deleta a ata
router.delete('/delete-ata/:id', atasController.deleteAta);

/*--------------------------- (CONSORCIO) - ROTAS DE TRANSPARÊNCIA ---------------------------*/
//adiciona dados da transparencia
router.post('/new-transparency-consorcio', transparencyConsorcioController.newTransparency);
//obtem dados da transparencia
router.get('/all-transparency-consorcio', transparencyConsorcioController.getTransparency);
//atualiza dados da transparencia
router.patch('/update-transparency-consorcio/:id', transparencyConsorcioController.updateTransparency);

/*--------------------------- (CONSORCIO) - ROTAS DE LICITAÇÕES ---------------------------*/
//adiciona uma nova licitacao
router.post('/new-licitacao',  multer(licitacoesController).array('file'), licitacoesController.newLicitacao);
//obtem todas as licitacoes
router.get('/all-licitacoes', licitacoesController.getAllLicitacoes);
//obtem todas as licitacoes conforme busca
router.get('/search-licitacoes', licitacoesController.getSearchLicitacoes)
//atualiza a licitacao
router.patch('/update-licitacao/:id', multer(licitacoesController).array('file'), licitacoesController.updateLicitacao);
//deleta a licitacao
router.delete('/delete-licitacao/:id', licitacoesController.deleteLicitacao);

/*--------------------------- (CONSORCIO) - ROTAS DE ANDAMENTO DA LICITAÇÃO ---------------------------*/
//adiciona dados do andamento
router.post('/new-progress', andamentoController.newProgress);
//obtem dados do andamento
router.get('/all-progress', andamentoController.getProgress);

/*--------------------------- (CONSORCIO) -  ROTAS DE USUÁRIO ---------------------------*/
//adiciona um novo usuário
router.post('/register', userController.register);
//login do usuário
router.post('/login', userController.login);
//obtem o usuário autenticado
router.get('/user', authController.verifyToken, userController.getUser);
//obtem todos os usuários
router.get('/user-all', userController.getUserAll);
//fazer logout
router.post('/logout', userController.logout);

/*--------------------------- (CONSORCIO) - ROTAS DE CONFIGURAÇÕES ---------------------------*/
//adiciona dados da configurações
router.post('/new-configuracoes', configuracoesController.novaConfiguracao);
//obtem dados da configurações
router.get('/all-configuracoes', configuracoesController.getConfiguracoes);
//atualiza dados da configurações
router.patch('/update-configuracoes/:id', configuracoesController.updateConfiguracoes);

/*--------------------------- (CONSORCIO) - ROTAS DE ESTATUTO ---------------------------*/
//adiciona uma novo estatuto
router.post('/new-estatuto',  multer(estatutoController).array('file'), estatutoController.newEstatuto);
//obtem todas os estatutos
router.get('/all-estatutos', estatutoController.getAllEstatuto);
//atualiza o estatuto
router.patch('/update-estatuto/:id', multer(estatutoController).array('file'), estatutoController.updateEstatuto);
//deleta o estatuto
router.delete('/delete-estatuto/:id', estatutoController.deleteEstatuto);

/*--------------------------- (CONSORCIO) - ROTAS DE PROTOCOLO DE INTENÇÕES ---------------------------*/
//adiciona uma novo protocolo
router.post('/new-protocolo-intencoes',  multer(protocoloIntencoesController).array('file'), protocoloIntencoesController.newProtocoloIntencoes);
//obtem todas os protocolos
router.get('/all-protocolos-intencoes', protocoloIntencoesController.getAllProtocoloIntencoes);
//atualiza o protocolo
router.patch('/update-protocolo-intencoes/:id', multer(protocoloIntencoesController).array('file'), protocoloIntencoesController.updateProtocoloIntencoes);
//deleta o protocolo
router.delete('/delete-protocolo-intencoes/:id', protocoloIntencoesController.deleteProtocoloIntencoes);

module.exports = router;