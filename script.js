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
X MILESTONE 2
    - Visualizzare a fianco ad ogni item ha una "x": 
    - cliccando su di essa, il todo viene rimosso dalla lista.
X MILESTONE 3
    - Predisporre un campo di input testuale e un pulsante "aggiungi": 
    - cliccando sul pulsante, il testo digitato viene letto e 
    utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
X 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, 
invertire il valore della proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)
*/


const array = [
    {
        text: 'Fare la spesa',
        done: false,
    },
    {
        text: 'Andare in palestra',
        done: false,
    },
    {
        text: 'Andare al cinema',
        done: false,
    }
];

console.log(array);
console.log(array[0].done); // stampa il primo gruppo di graffe

// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const app = new Vue (
    {
    el: '#root',
    data: { 
        todoList: array,
        doneList: [],
        newItems: '',


    },
    methods: {
        isDone (todoListIndex) {
            this.doneList.push(todoListIndex);
            if((this.todoList[0].done)===true){
                console.log(array[0].done);
            }; 
        },

        addItems(){

            const newItem = this.newItems.trim();

            if (newItem.length > 0) {
                this.todoList.push({text: newItem, done: false});
                this.newItems = '';
                console.log(this.todoList);
            }
            
        }

    }
    }
);

// console.log(teams.nome); // se fosse solo object

// console.log([0]) // mi stampa 0

// console.log(teams[0]); // stampa il primo gruppo di graffe

// console.log((teams[0].nome)); // stampare solo il primo nome 