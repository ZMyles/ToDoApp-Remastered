"use strict"

const inputs = {
  template: `
  <h1>TO DO LIST</h1>
  
  <span>A place to store the things you need to do!</span>

  <form>
      <input type="text" placeholder="Filter you're list.">
      <ol>
        <li> <button>Completed</button> <div>X</div>

        <input type="text" placeholder="Add to list.">
      </ol>

      
  </form>
  `, controller: function() {
    const vm = this;
    vm.toDolist = [ {
      task:"Do my homework.",
      classes:{completed: false}
    },
    
    {
      task: "Go to store.",
      classes: {completed: true}
    }
  ]

  console.log(vm.toDolist)
  //Remove from list
  vm.removeTask = (index) => {
    vm.toDolist.splice(index,1);
  }
  }

  
}

angular.module("App")
        .component("inputs", inputs);