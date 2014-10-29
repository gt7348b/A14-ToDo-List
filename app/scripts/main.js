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


var render_task = _.template($('#add_task').html()),
    render_tot = _.template($('#total').html()),
    render_com = _.template($('#complete').html()),
    task,
    list_to_do = [],
    num_items,
    com_items,
    server = 'http://tiy-atl-fe-server.herokuapp.com/collections/mjtodo';


$.getJSON(server).done(function(items){
  console.log(items);

    list_to_do = items;

    num_items = list_to_do.length;

    _.each(items, function(todo){
    $('#items').append(render_task(todo));
  });

    console.log(tot_items);
    $('#tot_items').append(render_tot(num_items));

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

      num_items = list_to_do.length;

      console.log(num_items);
      $('#tot_items').html(render_tot(num_items));

  });

});


var num_items = $(list_to_do).length;
console.log(num_items);


// Delete Items

var item_delete;

$('#items').on('click', 'span', function(click){
  event.preventDefault();

  var id = $(this).attr('id');
  console.log(id);

  item_delete = _.findWhere(list_to_do, { _id: id});

  $.ajax({
    type: 'DELETE',
    url:  server + '/' + item_delete._id,
    data: item_delete
  }).done(function(){
    location.reload(true);
  });

  //location.reload(true);
  //$.getJSON(server).done(function(items){
    //console.log(items);

    //  list_to_do = items;

      //_.each(items, function(todo){
      //$('#items').append(render_task(todo));
    //});

//  });


});
