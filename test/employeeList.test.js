//
'use strict';

describe('Emplyee list component unit testing',function(){
    let scope;
    beforeEach(module('demo'));
    beforeEach(inject(function($rootScope,$controller){
        scope = $rootScope.$new();
        $controller('employeeList',{$scope:scope});
    }));
    // testing data for employee list;
    let testData = ['employee_1','employee_2','employee_3','employee_4'];

    let testFun = function(id) {
        // testing the click on the name of each employee, the $scope.currentEmployee value will be the releated employee id;
        it('click the name of employee as id' + id , function() {
            scope.getEmployBio(id);
            expect(scope.currentEmployee).toBe(id);
        })
        // testing alert or show the current employee bio content as the current employee id;
        it('alert the employee bio content as id ' + id, function() {
            scope.EmployBioAlert(id);
            expect(scope.currentEmployeeData.id).toBe(id);
        })
        // testing hide the current employee bio content when the $scope.currentEmployee is null, means that none of employee name clicked;
        it('hide the employee bio content as id ' + id, function() {
            scope.getEmployBio(id);
            if (scope.currentEmployee == null) {
                expect(scope.currentEmployee).toBe(null);
            }
        })
    }

    for (var i = 0; i < testData.length; i++) {

        describe('===> employee ID as ' + testData[i], function() {

            describe(' testing->', function() {
                // click
                testFun(testData[i])
            })
        })
    }

});
