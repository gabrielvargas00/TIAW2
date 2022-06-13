// declara um conjunto inicial de publicações
var db_informacoes_iniciais = {
    data: [
       {
            id       : 1,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Carla Almeida",
            email    : "carlaalmeida@email.com",
            site     : "https://bit.ly/engasgo_site",
            videoaula: "https://www.youtube.com/embed/tC-OiNlHpcI",
            descricao: "O vídeo trata sobre como proceder após o engasgo."
        },
        {
            id       : 2,
            acidente : "Infarto",
            tipo     : 7,
            medico   : "Tulio Alves",
            email    : "tulioalves@email.com",
            site     : "https://bit.ly/infarto_site",
            videoaula: "https://www.youtube.com/embed/xqxHybHpoDY",
            descricao: "Acesse os links disponíveis para prevenir e identificar o quadro de infarto."
        },
        {
            id       : 3,
            acidente : "Queda",
            tipo     : 8,
            medico   : "Joaquim Pereira",
            email    : "joaquimpereira@email.com",
            site     : "https://bit.ly/queda_site",
            videoaula: "https://www.youtube.com/embed/iUE0SaR8Dwo",
            descricao: "Aprenda como proceder em caso de queda em casa."
        },
        {
            id       : 4,
            acidente : "Choque",
            tipo     : 2,
            medico   : "Joana Fontes",
            email    : "joanafontes@email.com",
            site     : "https://bit.ly/choque_site",
            videoaula: "https://www.youtube.com/embed/lXsCD9dTr-E",
            descricao: "O vídeo trata sobre como proceder após choque elétrico."
        },
        {
            id       : 5,
            acidente : "Choque",
            tipo     : 2,
            medico   : "Joaquim Pereira",
            email    : "joaquimpereira@email.com",
            site     : "https://bit.ly/choque_site1",
            videoaula: "https://www.youtube.com/embed/duTAelb1E28",
            descricao: "O vídeo trata sobre como proceder após choque elétrico."
        },
        {
            id       : 6,
            acidente : "Convulsão",
            tipo     : 3,
            medico   : "Ana da Silva",
            email    : "anadasilva@email.com",
            site     : "https://bit.ly/convulsao_site",
            videoaula: "https://www.youtube.com/embed/bL9PROpCv9s",
            descricao: "Os vídeos mostram manobras a serem realizadas em caso de crises convulsivas."
        },
        {
            id       : 7,
            acidente : "Desmaio",
            tipo     : 4,
            medico   : "Giovanne Castro",
            email    : "giovannecastro@email.com",
            site     : "https://bit.ly/desmaio_site",
            videoaula: "https://www.youtube.com/embed/nZGdJwuxRiE",
            descricao: "Aprenda procedimentos para realizar em caso de desmaio."
        },
        {
            id       : 8,
            acidente : "AVC",
            tipo     : 1,
            medico   : "Ana da Silva",
            email    : "anasilva@email.com",
            site     : "https://bit.ly/avc_site",
            videoaula: "https://www.youtube.com/embed/uHkpYIhSWb4",
            descricao: "Acessando o site, você terá informações sobre o Acidente Vascular Cerebral (AVC)."
        },
        {
            id       : 9,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Giovanne Castro",
            email    : "giovannecastro@email.com",
            site     : "https://bit.ly/engasgo_site1",
            videoaula: "https://www.youtube.com/embed/5kyyABzEy_k",
            descricao: "Aprenda procedimentos para realizar em caso de engasgo"
        },
        {
            id       : 10,
            acidente : "Fratura",
            tipo     : 6,
            medico   : "Tulio Alves",
            email    : "tulioalves@email.com",
            site     : "https://bit.ly/fratura_site",
            videoaula: "https://www.youtube.com/embed/66L2rJ9S5nk",
            descricao: "Aprenda como proceder em casos de fraturas."
        },
        {
            id       : 11,
            acidente : "Queimadura",
            tipo     : 9,
            medico   : "Pedro Marques",
            email    : "pedromarques@email.com",
            site     : "https://bit.ly/queimadura_site",
            videoaula: "https://www.youtube.com/embed/Eqh54bTu_P0",
            descricao: "Sabia que não pode passar qualquer produto em queimaduras? Compreenda o porquê."
        },        
        {
            id       : 12,
            acidente : "Queda",
            tipo     : 8,
            medico   : "Pedro Marques",
            email    : "pedromarques@email.com",
            site     : "https://bit.ly/queda_site1",
            videoaula: "https://www.youtube.com/embed/KCotLUYIdF0",
            descricao: "Aprenda como proceder em caso de queda em casa."
        },
        {
            id       : 13,
            acidente : "Convulsão",
            tipo     : 3,
            medico   : "Giovanne Castro",
            email    : "giovannecastro@email.com",
            site     : "https://bit.ly/engasgo_site1",
            videoaula: "https://www.youtube.com/embed/wlRIoesIiv8",
            descricao: "Aprenda procedimentos para realizar em caso de convulsão."
        },
        {
            id       : 14,
            acidente : "Fratura",
            tipo     : 6,
            medico   : "Joana Fontes",
            email    : "joanafontes@email.com",
            site     : "https://bit.ly/fratura_site1",
            videoaula: "https://www.youtube.com/embed/VWJwSfOxZdE",
            descricao: "Não se desespere! Saiba o que fazer em caso de fratura."
        },
        {
            id       : 15,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Tulio Alves",
            email    : "tulioalves@email.com",
            site     : "https://bit.ly/engasgo_site3",
            videoaula: "https://www.youtube.com/embed/FUEXLFbvAjY",
            descricao: "Aprenda procedimentos para realizar em caso de engasgo."
        },
        {
            id       : 16,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Sandra Rodrigues",
            email    : "sandrarodriguess@email.com",
            site     : "https://bit.ly/engasgo_site2",
            videoaula: "https://www.youtube.com/embed/FUEXLFbvAjY",
            descricao: "Aprenda procedimentos para realizar em caso de engasgo."
        },
        {
            id       : 17,
            acidente : "Queimadura",
            tipo     : 9,
            medico   : "Sandra Rodrigues",
            email    : "sandrarodrigues@email.com",
            site     : "https://bit.ly/queimadura_site1",
            videoaula: "https://www.youtube.com/embed/wOM9tgiYPZs",
            descricao: "Aprenda procedimentos para realizar em caso de queimadura."
        }
    ]
}

// Caso os dados já estejam no Local Storage; caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_informacao'));
if (!db) {
    db = db_informacoes_iniciais
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertInformacao(informacao) {
    // Calcula novo Id
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;


    // Obtem numero do tipo de acordo com o acidente
    // Tentar montar em switch ao inves de if / else
    let   novoTipo  = 0;

    if      ( informacao.acidente == "AVC"         ) novoTipo = 1;
    else if ( informacao.acidente == "Choque"      ) novoTipo = 2;
    else if ( informacao.acidente == "Convulsão"   ) novoTipo = 3;
    else if ( informacao.acidente == "Desmaio"     ) novoTipo = 4;
    else if ( informacao.acidente == "Engasgo"     ) novoTipo = 5;
    else if ( informacao.acidente == "Fratura"     ) novoTipo = 6;    
    else if ( informacao.acidente == "Infarto"     ) novoTipo = 7;
    else if ( informacao.acidente == "Queda"       ) novoTipo = 8;
    else if ( informacao.acidente == "Queimadura"  ) novoTipo = 9;

    // obtem as informacoes 
    let novoInformacao = {
        id        : novoId,
        acidente  : informacao.acidente,
        tipo      : novoTipo,
        medico    : informacao.medico,
        email     : informacao.email,
        site      : informacao.site,
        videoaula : informacao.videoaula,
        descricao : informacao.descricao
    };

    // Insere o novo objeto no array
    db.data.push(novoInformacao);
    displayMessage("Informação inserida com sucesso.");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}

function updateInformacao(id, informacao) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].acidente  = informacao.acidente,
    db.data[index].tipo      = novoTipo,
    db.data[index].medico    = informacao.medico,
    db.data[index].email     = informacao.email,
    db.data[index].site      = informacao.site,
    db.data[index].videoaula = informacao.videoaula,
    db.data[index].descricao = informacao.descricao,

    displayMessage("Informação alterada com sucesso.");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}

function deleteInformacao(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { 
        return element.id != id 
    });

    displayMessage("Informação removida com sucesso.");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}
