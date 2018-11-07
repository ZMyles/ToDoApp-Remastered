"use strict"

const inputs = {
  template: `
  <h1>TO DO LIST</h1>
  
  <span>A place to store the things you need to do!</span>

  <input type="text" placeholder="Filter you're list.">

  <form >
      
      <ol >
        <li ng-repeat="item in $ctrl.toDoList"> 
          <span>{{item.task}}</span>
        <button>Completed</button> <div>X</div></li>

       
      </ol>

      
  </form>

  <input type="text" placeholder="Add to list." ng-model="task"> <button ng-click="$ctrl.addTask(task) task=''">Add</button>
  `, controller: [function toDoController() {
    const vm = this;
    vm.toDoList = [ {
      task:"Do my homework.",
      classes:{completed: false}
    },
    
    {
      task: "Go to store.",
      classes: {completed: true}
    },

    {
      task: "Breath",
      classes: {completed: true}
    }

  ]

  console.log(vm.toDoList)

  //Remove from list
  vm.removeTask = (index) => {
    vm.toDoList.splice(index,1);
  }

  vm.addTask = (newTask) => {
    vm.toDoList.push({
      task: newTask,
      classes: {completed: false}
    })
    
  }
  }]

  
}

angular.module("App")
        .component("inputs", inputs);