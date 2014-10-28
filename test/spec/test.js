/* global describe, it */

(function () {
  'use strict';

  describe('Task Object', function () {
    describe('Here the task', function () {
      var task;

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
})();
