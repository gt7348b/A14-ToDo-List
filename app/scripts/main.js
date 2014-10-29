var Task = function(options){
  options = options || {};
  this.name = options.name;
  this.status = options.status || 'incomplete';
  this.click = function(){
    if(this.status === 'incomplete'){
      this.status = 'complete';
      console.log(this);
    } else if (this.status === 'complete'){
      this.status = 'incomplete';
      console.log(this);
    }
  };
};


var render_existing = _.template($('#existing').html()),
    render_task = _.template($('#add_task').html()),
    render_tot = _.template($('#total').html()),
    render_com = _.template($('#complete').html()),
    task,
    list_to_do = [],
    server = 'http://tiy-atl-fe-server.herokuapp.com/collections/mjtodo';
    console.log(list_to_do);

$.getJSON(server).done(function(items){
  console.log(items);

    list_to_do = items;

    _.each(items, function(todo){
    $('#items').append(render_task(todo));
  });

});


$('#taskInput').submit( function(event){
  //console.log('submitted');
  event.preventDefault();

  event.name = $('#input_task').val();
  //console.log(event.name);

  task = new Task(event);
  //console.log(task);

  $.ajax({
    type: 'POST',
    url:  server,
    data: task

  }).done(function(thisitem){
      $('.list_items').append(render_task(thisitem));
      list_to_do.push(thisitem);
      console.log(list_to_do);
      //$.push(list_src, list_to_do);

  });




  var num_items = $(list_to_do).length;
  console.log(num_items);

  $('.total').append(render_tot(num_items));
document.getElementById("taskInput").reset();
  return list_to_do;
  //return num_items;

});


var num_items = $(list_to_do).length;
console.log(num_items);
