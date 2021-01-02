var todoApp = new Vue({
    el: '#todoApp',
    data: {
        message: 'Welcome to Todo App',
        addTodoInput :'',
        lists: [],
        hasError: false  // <-- to handle errors
    },
    computed: {
        filterLists: function(){
            return _.orderBy(this.lists, ['isComplete', false])
        }
    },
    methods: {
        addTask: function(){
            if(!this.addTodoInput){ // <--- If no value then we are setting error to `true`
                this.hasError = true;
                return;               // <--- stops here
            }else{
                this.hasError = false; // <--- If textbox is filled then setting error to `false`
            };
            this.lists.push({
                id: this.lists.length+1,
                title: this.addTodoInput,
                isComplete: false
            });
            this.addTodoInput = '';
        },
        updateTask: function(e, list){
            e.preventDefault();
            list.title = e.target.innerText;
            e.target.blur();
        },
        completeTask: function(list){
            list.isComplete = !list.isComplete;
        },
        removeTask: function(list){
            var index = _.findIndex(this.lists, list);
            this.lists.splice(index, 1);
        }
    }
})
  