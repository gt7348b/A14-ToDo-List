/* global describe, it */

(function () {
  'use strict';

  describe('task object', function () {
    describe('task stuff', function () {

      var task;

      beforeEach(function(){
        task = new Task();
      });
        console.log(1)

      it('should be an instance of Task', function () {
        expect(task).to.be.an.instanceof(Task)
        console.log(2)
      });
      it('should have a default status of incomplete',function(){
        expect(task.status).to.equal('incomplete');
        console.log(3)
      });
      it('should have a status',function(){
        expect(task).to.have.property('status');
        console.log(4)
      });
      it('should change status to complete on click',function(){
        expect(task.status).to.equal('incomplete');
        task.click(task);
        expect(task.status).to.equal('complete');
        console.log(5)
      });
    });
  });
})();
