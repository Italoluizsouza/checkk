const aluno = require('./aluno');
const estudantes = require('./estudantes');

/* Micro desafio - Passo 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: 
nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
(um array composto pelos alunos criados no passo 1).*/

const curso = {
    nomeDoCurso: 'Excel Avançado',
    notaDeAprovacao:8,
    faltasMaximas: 4,
    listaEstudantes: estudantes,

/* Micro desafio - Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de 
estudantes do objeto curso.*/

    adicionarAluno(nome, qtdFaltas, notas) {
        let alunoNovo = new aluno(nome, qtdFaltas, notas);
        this.listaEstudantes.push(alunoNovo);
    },

/* Micro desafio - Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne 
true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média 
igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem 
que estar 10% acima da nota de aprovação.*/

    mediaAprovacao(aluno) {
        let mediaAluno = aluno.calcularMedia();
        if(aluno.qtdFaltas > this.faltasMaximas && mediaAluno < this.notaDeAprovacao*1.1){
            console.log(`O(a) estudante) ${aluno.nome} esta aprovado com média ${aluno.calcularMedia()}.`)
            return false;
        } else if(mediaAluno < this.notaDeAprovacao){
            console.log(`O(a) estudante) ${aluno.nome} esta reprovado com média ${aluno.calcularMedia()}.`)
            return false;
        } else {
            console.log(`O(a) estudante) ${aluno.nome} esta aprovado com média ${aluno.calcularMedia()}.`)
            return true;
        }
    },

/* Micro desafio - Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne 
um array de booleanos com os resultados se os alunos aprovaram ou não. */

    listaFinal() {
        for( let i = 0; i < this.listaEstudantes.length; i++ ) {
            curso.paraSerAprovado(this.listaEstudantes[i]);
    }
}    
}

console.log(`CURSO: ${curso.nomeDoCurso}`);
console.log('Relação de Aprovados ou Reprovados');
curso.listaFinal();