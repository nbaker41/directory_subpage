(function(){

    let con = angular.module("content", [
      
    ]);

    con.directive('datanType', function ($compile) {

        var testTemplate1 = `<img ng-src="../assets/visuals/images/gaTech_home.jpg" class="landimg"/>
                             <div class="caption">Georgia Tech</div>`;
        var testTemplate2 = `<img ng-src="../assets/visuals/images/atlanta_campus.jpg" class="landimg"/>
                             <div class="caption">Georgia Tech</div>`;
        var testTemplate3 = `<img ng-src="../assets/visuals/images/clough.jpg" class="landimg"/>
                             <div class="caption">Georgia Tech</div>`;

        var getTemplate = function(contentType){
            var template = '';

            switch(contentType){
                case 'test1':
                    template = testTemplate1;
                    break;
                case 'test2':
                    template = testTemplate2;
                    break;
                case 'test3':
                    template = testTemplate3;
                    break;
            }

            return template;
        }; 

        var linker = function(scope, element, attrs){
          element.html(getTemplate(attrs.content));
          $compile(element.contents())(scope);
          
        };

        return {
            restrict: "E",
            replace: true,
            link: linker,
            scope: {
                content:'='
            }
        };

    

    


            





            




        

    });

})();