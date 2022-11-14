var app = new Vue({
    el: '#root',
    data: {
        inputText: "",
        todoList: [
            {
                text: 'Studiare le slides di Boolean',
                bool: false
            },
            {
                text: 'Fare gli esercizi di Boolean',
                bool: false
            },
            {
                text: 'Buttarsi dal balcone a causa di Boolean',
                bool: false
            }
        ],
        todoEnd: []
    },
    beforeUpdate() {
        this.todoList.forEach((elem, index) => {
            if (elem.bool == true) {
                this.todoEnd.push(elem);
                this.todoList.splice(index, 1);
            }
        });
    },
    methods: {
        rimozioneElemento(index, elem) {
            if (elem.bool == true) {
                this.todoEnd.splice(index, 1);
            } else {
                this.todoList.splice(index, 1);
            }
        },
        aggiuntaBarra(index, elem) {
            if (elem.bool == false) {
                elem.bool = true;
            } else {
                elem.bool = false;
            }
        },
        aggiuntaTodo() {
            let todoNew = { text: this.inputText, bool: false }
            if(this.inputText == '' ){
                alert ("Inserisci una nuova Todo") 
            } else{
                this.todoList.push(todoNew);
            }            
            this.inputText = '';
        }
    }
})