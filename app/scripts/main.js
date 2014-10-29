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
};

var render_task = _.template($('#add_task').html()),
    task,
    list_to_do = [];
    console.log(list_to_do);


$('#taskInput').submit( function(event){
  //console.log('submitted');
  event.preventDefault();

  event.name = $('#input_task').val();
  console.log(event.name);

  task = new Task(event);
  console.log(task);

  $('.list_items').append(render_task(task));
  list_to_do.push(task);
  console.log(list_to_do);

  return list_to_do;
});


var num_items = $('.list_items').length;
console.log(num_items);
