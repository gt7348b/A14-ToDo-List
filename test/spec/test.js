/* global describe, it */

(function () {
  'use strict';

  describe('task object', function () {
    describe('task stuff', function () {

      var task;

      beforeEach(function(){
        task = new Task();
      });


      it('should be an instance of Task', function () {
        expect(task).to.be.an.instanceof(Task)

      });
      it('should have a default status of incomplete',function(){
        expect(task.status).to.equal('incomplete');

      });
      it('should have a status',function(){
        expect(task).to.have.property('status');

      });
      it('should change status to complete on click',function(){
        expect(task.status).to.equal('incomplete');
        task.click(task);
        expect(task.status).to.equal('complete');

      beforeEach(function(){
        task = new Task();
      });


      it('should be an instance of ', function(){

      //  var task = new Task();
        expect(task).to.be.an.instanceof(Task);


      });
      });
    });
  });

  describe('This is the number of tasks array', function(){
    var task;

    beforeEach(function(){
      task = new Task();
    });

    //all
    var tasks = [];
    //complete
    var completedTasks;

    it('Completed tasks array length', function (){
    expect(completedTasks.length).to.equal(_.filter(tasks,(task.status === 'complete')));
    });
  });

})();
