
// Função auxiliar para imprimir no HTML
function print(msg) {
    var saida = document.getElementById("saida");
    saida.textContent += msg + "\n";
}
// ================= MODEL =================
var Aluno = /** @class */ (function () {
    function Aluno(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
    return Aluno;
}());
var AlunoModel = /** @class */ (function () {
    function AlunoModel() {
        this.alunos = [];
    }
    AlunoModel.prototype.adicionarAluno = function (aluno) {
        this.alunos.push(aluno);
    };
    AlunoModel.prototype.listarAlunos = function () {
        return this.alunos;
    };
    return AlunoModel;
}());
// ================= VIEW =================
var AlunoView = /** @class */ (function () {
    function AlunoView() {
    }
    AlunoView.prototype.mostrarAlunos = function (alunos) {
        print("=== Lista de Alunos ===");
        alunos.forEach(function (aluno) {
            print("ID: " + aluno.id + " | Nome: " + aluno.nome + " | Idade: " + aluno.idade);
        });
        print("========================");
    };
    AlunoView.prototype.mostrarMensagem = function (msg) {
        print("[INFO]: " + msg);
    };
    return AlunoView;
}());
// ================= CONTROLLER =================
var AlunoController = /** @class */ (function () {
    function AlunoController(model, view) {
        this.model = model;
        this.view = view;
    }
    AlunoController.prototype.cadastrarAluno = function (id, nome, idade) {
        var novoAluno = new Aluno(id, nome, idade);
        this.model.adicionarAluno(novoAluno);
this.view.mostrarMensagem(`Aluno "${nome}" cadastrado com sucesso!`);
    };
    AlunoController.prototype.exibirAlunos = function () {
        var alunos = this.model.listarAlunos();
        this.view.mostrarAlunos(alunos);
    };
    return AlunoController;
}());
// ================= TESTE DIDÁTICO =================
var model = new AlunoModel();
var view = new AlunoView();
var controller = new AlunoController(model, view);
// 👇 Aqui estão os dados editados
controller.cadastrarAluno(1, "Iago Batista", 17);
controller.exibirAlunos();
