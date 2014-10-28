var Task = function(options){
  options = options || {};
  this.name = options.name;
  this.status = options.status || 'incomplete';
  this.click = function(){
    if(this.status === 'incomplete'){
      this.status = 'complete'
    } else if (this.status === 'complete'){
      this.status = 'incomplete'
    }
  };
}
