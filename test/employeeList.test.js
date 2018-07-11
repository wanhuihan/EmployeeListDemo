//
'use strict';

describe('Emplyee list component unit testing',function(){
    var scope;
    beforeEach(module('demo'));
    beforeEach(inject(function($rootScope,$controller){
        scope = $rootScope.$new();
        $controller('employeeList',{$scope:scope});
    }));
    // to get the employee id to test the click func for showing or hiding the personal description;
    var testFun = function(id) {
        it(' ===> Click testing for for Employee as '+ id,function(){
            scope.getEmployBio('employee_1');
            console.log('The data of ' + id + ' is showed, others are hide')
            expect(scope.currentEmployee).toBe('employee_1');
            scope.getEmployBio('employee_1');
            expect(scope.currentEmployee).toBe(null);
            console.log('The data of' + id + ' is hide')
        });
    }
    var testData = ['employee_1','employee_2','employee_3','employee_4'];

    for (var i = 0; i < testData.length; i++) {
        testFun(testData[i]);
    }
});
