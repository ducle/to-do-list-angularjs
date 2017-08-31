import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.tasks = [];
    this.newTask = {};
  }
  hasSelected(){
    for(var i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].selected){
        return true
      }
    }
    return false
  }
  addTask(){
    this.tasks.push({name: this.newTask.name, featured: this.newTask.featured});
    this.newTask = {};
  }

  toggleAll(vl){
    angular.forEach(this.tasks, function(task){
      task.selected = vl
    })
  }
  removeSelected(){
    for(var i = this.tasks.length-1; i >= 0; i--){
      if(this.tasks[i].selected){
        this.tasks.splice(i, 1);
      }
    }
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('todoApp', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
