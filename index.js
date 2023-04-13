const produtos = [
  {
    id: "001",
    item: "Camiseta Rosa",
    price: 50.5,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/blusa-rosa.png",
  },
  {
    id: "002",
    item: "Camiseta Preta",
    price: 50.0,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/blusa- preta.png",
  },
  {
    id: "003",
    item: "Camiseta Verde",
    price: 50.0,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/blusa-verde.png",
  },
  {
    id: "004",
    item: "Blusa de Frio - rosa",
    price: 99.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Blusa de Frio",
    imagem: "./img/produtos/blusao-rosa.png",
  },
  {
    id: "005",
    item: "Blusa de Frio - verde",
    price: 99.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Blusa de Frio",
    imagem: "./img/produtos/blusao-verde.png",
  },
  {
    id: "006",
    item: "Blusa de Frio - preta e rosa",
    price: 149.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Blusa de Frio",
    imagem: "./img/produtos/Black_Hood2ie_Mockup.png",
  },
  {
    id: "007",
    item: "Blusa de Frio - preta e verde",
    price: 149.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Blusa de Frio",
    imagem: "./img/produtos/Black_Hoodie_Mockup.png",
  },
  {
    id: "008",
    item: "Blusa exclusiva Cris",
    price: 69.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/exclusivo.colorido.cris.png",
  },
  {
    id: "009",
    item: "Blusa exclusiva Mari Moura",
    price: 69.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/exclusivo.colorido.mari.png",
  },
  {
    id: "0010",
    item: "Blusa exclusiva Fabiola",
    price: 69.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/exclusivo.colorido-fabiola.png",
  },
  {
    id: "0011",
    item: "Exclusivo Cris Street",
    price: 69.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/exclusivo-cris.png",
  },
  {
    id: "0012",
    item: "Exclusivo Mari Moura Street",
    price: 69.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/exclusivo-mari.png",
  },
  {
    id: "0013",
    item: "Lets Roll",
    price: 69.9,
    qtd: 5,
    descritivo:
      "Produto exclusivo Trick Girl, criado pela Designer AnneKarolle",
    alt: "Produto Trick Girl Exclusivo",
    section: "Camiseta",
    imagem: "./img/produtos/exclusivo-patins.png",
  },
];

let valorTotal = 0;
let quantidadeProdutos = 0;
const total = document.getElementById("precoTotal");
const qtd = document.getElementById("quantidade");
const mensagemCarrinho = document.getElementById("mensagemCarrinho");
mensagemCarrinho.innerHTML = "Carrinho Vazio";

const sectionListaProduto = document.getElementById("lista-produtos");
const interior = document.getElementById("interior-carrinho");

function renderizaProdutos(produtos) {
  sectionListaProduto.innerHTML = "";
  for (let i = 0; i < produtos.length; i++) {
    const listaProdutos = criaCard(produtos[i]);
    sectionListaProduto.appendChild(listaProdutos);
  }
}
renderizaProdutos(produtos);

function obterProdutosSection(section) {
  let produtosSelecionados = [];

  for (let i = 0; i < produtos.length; i++) {
    const sectionProdutos = produtos[i].section;
    if (sectionProdutos.includes(section)) {
      produtosSelecionados.push(produtos[i]);
    }
  }
  return produtosSelecionados;
}

function obterProdutosItem(itemBuscado) {
  console.log(`buscando produto - ${itemBuscado}`);
  let produtosSelecionados = [];

  for (let i = 0; i < produtos.length; i++) {
    const itemProduto = produtos[i].item;

    if (
      itemProduto.toLocaleUpperCase().includes(itemBuscado.toLocaleUpperCase())
    ) {
      produtosSelecionados.push(produtos[i]);
    }
  }
  return produtosSelecionados;
}

function criaCard(produto) {
  let objetoCarrinho = [];

  const h5 = produto.section;
  const paragrafo = produto.descritivo;
  const h4 = produto.price;
  const h3 = produto.item;
  const imagem = produto.imagem;
  const alt = produto.imagem;
  const width = "250";

  const liContainerProduto = document.createElement("li");
  const divContainerImagem = document.createElement("div");
  const imagemProduto = document.createElement("img");
  const divDescritivoProduto = document.createElement("div");
  const divTitutloSecao = document.createElement("div");
  const divSecaoRoupas = document.createElement("div");
  const h5TituloDaSecao = document.createElement("h5");
  const divInformacaoProduto = document.createElement("div");
  const h3TituloDaSecao = document.createElement("h3");
  const paragraoDescritivo = document.createElement("p");
  const h4preco = document.createElement("h4");
  const buttonAdicionar = document.createElement("button");
  buttonAdicionar.classList.add("buttonAdicionar");

  divContainerImagem.appendChild(imagemProduto);
  divSecaoRoupas.appendChild(h5TituloDaSecao);
  divTitutloSecao.appendChild(divSecaoRoupas);
  divDescritivoProduto.appendChild(divTitutloSecao);
  divDescritivoProduto.appendChild(h3TituloDaSecao);
  divDescritivoProduto.appendChild(paragraoDescritivo);
  divDescritivoProduto.appendChild(h4preco);
  divDescritivoProduto.appendChild(buttonAdicionar);
  liContainerProduto.appendChild(divContainerImagem);
  liContainerProduto.appendChild(divDescritivoProduto);

  liContainerProduto.classList.add("container-produto");
  divContainerImagem.classList.add("container-imagemProduto");
  divDescritivoProduto.classList.add("descritivo-produto");
  divTitutloSecao.classList.add("titulo-secao");
  divSecaoRoupas.classList.add("secao-roupa");
  divInformacaoProduto.classList.add("informacao-produto");
  h4preco.classList.add("preco");

  h5TituloDaSecao.innerHTML = `${h5}`;
  h3TituloDaSecao.innerHTML = `${h3}`;
  paragraoDescritivo.innerHTML = `${paragrafo}`;
  h4preco.innerHTML = `${formatarMoeda(h4)}`;
  imagemProduto.src = `${imagem}`;
  imagemProduto.alt = `${alt}`;
  imagemProduto.width = `${width}`;
  buttonAdicionar.innerHTML = "Adicione ao Carrrinho";

  buttonAdicionar.addEventListener("click", (event) => {
    document.getElementById("interior-carrinho").style.display = "flex";
    addItemCarrinho(produto);
    mensagemCarrinho.innerHTML = "";
    objetoCarrinho.push(produto.price);
    quantidadeProdutos += 1;
    valorTotal += produto.price;

    total.innerHTML = `Valor Total: ${formatarMoeda(valorTotal)}`;
    qtd.innerHTML = ` Quantidade: ${quantidadeProdutos}`;
  });

  return liContainerProduto;
}

function addItemCarrinho(produto) {
  const imagemCarrinho = produto.imagem;
  const tituloProduto = produto.item;
  const preco = produto.price;

  const produtosCarrinho = document.createElement("li");
  const h4Titulo = document.createElement("h4");
  const h5preco = document.createElement("h5");
  const containerImagemCarrinho = document.createElement("div");
  const imagem = document.createElement("img");
  const informacaoProdutoCarrinho = document.createElement("div");
  const buttonRemover = document.createElement("button");

  produtosCarrinho.classList.add("produtos-carrinhos");
  informacaoProdutoCarrinho.classList.add("info-produtos-carrinho");
  buttonRemover.classList.add("buttonRemover");
  containerImagemCarrinho.classList.add("containerImagemCarrinho");

  informacaoProdutoCarrinho.appendChild(h4Titulo);
  informacaoProdutoCarrinho.appendChild(h5preco);
  informacaoProdutoCarrinho.appendChild(buttonRemover);
  containerImagemCarrinho.append(imagem);
  produtosCarrinho.appendChild(containerImagemCarrinho);
  produtosCarrinho.appendChild(informacaoProdutoCarrinho);
  interior.appendChild(produtosCarrinho);

  imagem.src = ` ${imagemCarrinho}`;
  h4Titulo.innerHTML = ` ${tituloProduto}`;
  h5preco.innerHTML = `${formatarMoeda(preco)}`;
  buttonRemover.innerHTML = `Remover Produto`;

  buttonRemover.addEventListener("click", (event) => {
    produtosCarrinho.remove();
    quantidadeProdutos -= 1;
    valorTotal -= produto.price;
    total.innerHTML = `Valor Total: ${formatarMoeda(valorTotal)}`;
    qtd.innerHTML = ` Quantidade: 0${quantidadeProdutos}`;

    if (quantidadeProdutos === 0) {
      document.getElementById("interior-carrinho").style.display = "none";

      mensagemCarrinho.innerHTML = "Carrinho Vazio";
      total.innerHTML = "";
      qtd.innerHTML = "";
    }
  });
}

function somaTotal(array) {
  quantidadeProdutos++;
  valorTotal += array[i];

  total.innerHTML = `${valorTotal}`;
  qtd.innerHTML = `${quantidadeProdutos}`;

  const resumoCarrinho = document.getElementById("resumo-itens-carrinho");
  resumoCarrinho.appendChild(qtd);
  resumoCarrinho.appendChild(total);
  document.getElementById("carrinho-de-compras").appendChild(resumoCarrinho);
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

const button = document.getElementById("button-pesquisa");
button.addEventListener("click", busca);

function busca() {
  const input = document.querySelector("input");
  const valor = input.value;
  const itemsFiltrados = obterProdutosItem(valor);

  renderizaProdutos(itemsFiltrados);
}

const btnInscricao = document.getElementById("btn-inscricao");
btnInscricao.addEventListener("click", gerarInscricao);

function gerarInscricao(event) {
  const selectInscricao = document.getElementById("inscricao");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const result = document.getElementById("result");

  event.preventDefault();
  result.innerHTML = "";

  const modal = document.createElement("div");
  modal.classList.add("modal");
  const divContainer = document.createElement("div");
  divContainer.classList.add("container-report");
  const paragrafo = document.createElement("p");

  closeBtn.innerText = "Fechar";
  closeBtn.classList.add("btnClose");

  divContainer.append(paragrafo, closeBtn);
  modal.appendChild(divContainer);

  paragrafo.innerText = `
  Obrigada ${nome}, por fazer sua inscrição! Enviamos um email de confirmação para ${email}. Te aguardamos no ${selectInscricao}.
  Boa sorte!`
  ;

return modal;
}
