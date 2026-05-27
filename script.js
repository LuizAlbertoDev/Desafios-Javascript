// --- 1. SELEÇÃO DE ELEMENTOS (DOM) ---
// TODO: Selecione os elementos HTML necessários usando document.getElementById ou document.querySelector
const todoForm = null;     // Selecione o formulário (#todo-form)
const todoInput = null;    // Selecione o input de texto (#todo-input)
const todoList = null;     // Selecione a lista UL (#todo-list)
const taskCounter = null;  // Selecione o contador (#task-counter)

// Array que armazenará nosso estado (nossa lista de tarefas)
let tasks = [];

// --- 2. ATUALIZAR CONTADOR DE TAREFAS ---
function updateCounter() {
    const totalTasks = tasks.length;
    
    // TODO: Defina o textContent do elemento 'taskCounter' para mostrar a quantidade
    // Exemplo: "5 tarefas" ou "0 tarefas"
}

// --- 3. RENDERIZAR TAREFAS NA TELA ---
function renderTasks() {
    // Limpa a lista antes de renderizar para não duplicar
    if (todoList) {
        todoList.innerHTML = '';
    }

    // Percorre o array de tarefas
    tasks.forEach(task => {
        // Criar o elemento principal da li
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.classList.add('completed');
        }

        // Criar o container do conteúdo (texto + checkbox customizado)
        const contentDiv = document.createElement('div');
        contentDiv.className = 'task-content';
        
        // Criar o checkbox visual
        const checkbox = document.createElement('div');
        checkbox.className = 'custom-checkbox';

        // Criar o texto da tarefa
        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.text;

        // Juntar os elementos de conteúdo
        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(textSpan);

        // TODO: Adicionar um evento de clique no 'contentDiv' que chama a função toggleTask(task.id)
        
        // Criar o botão de deletar (um simples 'X')
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '✕';
        
        // TODO: Adicionar um evento de clique no 'deleteBtn' que chama a função deleteTask(task.id)

        // Adicionar tudo dentro da li
        li.appendChild(contentDiv);
        li.appendChild(deleteBtn);

        // Adicionar a li na lista (UL)
        if (todoList) {
            todoList.appendChild(li);
        }
    });

    // Atualiza o contador de tarefas
    updateCounter();
}

// --- 4. ADICIONAR UMA NOVA TAREFA ---
function addTask(text) {
    // Cria um objeto de tarefa com id único e estado 'completed' falso
    const newTask = {
        id: Date.now(), // gera um ID único usando o timestamp
        text: text,
        completed: false
    };

    // TODO: Adicione a 'newTask' no array 'tasks'
    
    // Renderiza novamente a tela
    renderTasks();
}

// --- 5. ALTERAR ESTADO DA TAREFA (CONCLUÍDA / PENDENTE) ---
function toggleTask(id) {
    // TODO: Encontre a tarefa correspondente no array 'tasks' pelo ID recebido
    // E inverta o valor da propriedade 'completed' (se for true vira false, se for false vira true)

    // Renderiza novamente para aplicar os estilos CSS de concluído
    renderTasks();
}

// --- 6. DELETAR UMA TAREFA ---
function deleteTask(id) {
    // TODO: Filtre o array 'tasks' para remover a tarefa com o ID fornecido
    // Dica: use o método .filter() do array

    // Renderiza novamente
    renderTasks();
}

// --- 7. ESCUTAR O FORMULÁRIO ---
if (todoForm) {
    todoForm.addEventListener('submit', function(event) {
        // Impede o formulário de recarregar a página ao dar submit
        event.preventDefault();

        const taskText = todoInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            
            // TODO: Limpe o valor do input (todoInput.value = '') para o usuário poder digitar outra
        }
    });
}
