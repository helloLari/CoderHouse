function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}

Produto.prototype.calcularTotal = function () {
    return this.preco * this.quantidade;
};

function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

Pessoa.prototype.apresentar = function () {
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}.`;
};

function Livro(titulo, autor, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
}

Livro.prototype.info = function () {
    return `${this.titulo} escrito por ${this.autor}, gênero: ${this.genero}.`;
};

// Exemplo de utilização dos objetos
const produto1 = new Produto("Camiseta", 25, 5);
console.log(produto1.calcularTotal()); 

const pessoa1 = new Pessoa("João", 30, "Masculino");
console.log(pessoa1.apresentar());

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
console.log(livro1.info()); 
