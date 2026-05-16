const alunos = [
  { nome: "Luiz", nota: 8.5 },
  { nome: "Ana", nota: 4.2 },
  { nome: "Carlos", nota: 7.0 },
  { nome: "Mariana", nota: 5.8 },
  { nome: "Pedro", nota: 9.1 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7.0)

function calcularMediaTurma(alunos){
   const mediaTurma = alunos.reduce((acc,aluno) => acc + aluno.nota,0) / alunos.length
   return mediaTurma
}

console.log("\nAlunos Aprovados:", alunosAprovados);
console.log(`\nQuantidade de Alunos:\nAprovados: ${alunosAprovados.length} \nReprovados: ${alunos.length - alunosAprovados.length}`)
console.log("\nMédia total da Turma:", calcularMediaTurma(alunos).toFixed(2), ` - Total de Alunos: ${alunos.length}`);
