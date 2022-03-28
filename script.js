console.log('JS OK')


/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
    - Stampare all'interno di una lista, un item per ogni todo.
    - Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
    - Visualizzare a fianco ad ogni item ha una "x": 
    - cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
    - Predisporre un campo di input testuale e un pulsante "aggiungi": 
    - cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/


const todoList = [
    {
        text: 'Fare la spesa',
        done: 'Fatto',
    },
    {
        text: 'Andare in palestra',
        done: 'Fatto',
    },
    {
        text: 'Andare al cinema',
        done: 'Fatto',
    }
];

console.log(todoList);

// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const app = new Vue (
    {
    el: '#root',
    data: { 
        todoList,
        doneList: [],
        newItem: '',
    },
    methods: {
        isDone (todoListIndex) {
            console.log(todoListIndex);
            this.doneList.push(todoListIndex);
            console.log('doneList', todoListIndex);
            this.doneList.push(this.todoList.done);
        },
        addItems(){

            const newItem = this.newItem.trim();

            if (newItem.length > 0) {
                this.todoList.unshift(newItem);
                this.newItem = '';
            }
            
        }
    }
    }
);

