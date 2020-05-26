(function(){

    let floor = angular.module("floor", [
       
    ]);

   floor.component("floor", {
       controller: "floorCtrl",
       controllerAs: "floor",
       templateUrl: "components/floor/floor.html"
   });

    floor.controller(
    "floorCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let floor = this;


    floor.floors= [
            {
            id: 1,
            rooms: [
                {
                    id: 'hall',
                    data: `<polygon id="hall" class="st2" points="1055.2,145.8 1055.2,370.6 768.3,370.6 768.3,685.2 312.9,685.2 312.9,370.6 29.5,370.6 29.5,145.8 313.5,145.8 313.5,215.7 767.1,215.7 767.1,145.8 "/>"`,
                    department: "Admissions",
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 101,
                    data: `<rect id="" x="29.5" y="370.6" class="st2" width="283.4" height="314.6"/>`,
                    department: "Admissions",
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 102,
                    data: `<rect id="102" x="768.3" y="370.6" class="st2" width="286.9" height="314.6"/>`,
                    department: "Mechanical Engineering",
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 103,
                    data: `<rect id="103" x="29.5" y="18" class="st2" width="130.8" height="127.8"/>`,
                    department: "Computer Lab",
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 104,
                    data: `<rect id="104" x="160.3" y="18" class="st2" width="153.1" height="127.8"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 105,
                    data: `<rect id="105" x="767.1" y="18" class="st2" width="148.7" height="127.8"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 106,
                    data: `<rect id="106" x="915.9" y="18" class="st2" width="139.3" height="127.8"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 107,
                    data: `<rect id="107" x="313.5" y="18" class="st2" width="453.6" height="197.7"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                }
            ]
        },
        {
            id:2,
            rooms: [
                {
                    id:'main',
                    data:`<polygon id="main" class="st2 roomHighlight" points="1055.2,520.6 1055.2,685.2 29.5,685.2 29.5,371.8 197.6,371.8 197.6,138.7 371.9,138.7 371.9,219 
                    859.4,219 859.4,520.6 "/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 201,
                    data:`<polygon id="201" class="st2 roomHighlight" points="371.9,18 371.9,138.7 197.6,138.7 197.6,371.8 29.5,371.8 29.5,18 "/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 202,
                    data:`<rect id="202" x="371.9" y="18" class="st2 roomHighlight" width="131.2" height="201"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 203,
                    data:`<rect id="203" x="503.1" y="18" class="st2 roomHighlight" width="285.8" height="201"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 204,
                    data:`<rect id="204" x="788.9" y="18" class="st2 roomHighlight" width="127.3" height="201"/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                {
                    id: 205,
                    data:`<polygon id="205" class="st2 roomHighlight" points="1055.2,18 1055.2,520.6 859.4,520.6 859.4,219 916.2,219 916.2,18 "/>`,
                    department: null,
                    club:"Chess Club",
                    icon: null
                },
                { 
                    id: 'BR',
                    data:`<rect x="859.5" y="520.6" class="st2" width="195.7" height="164.6"/>`,
                    department: null,
                    club:"Chess Club",
                    icon:`<g>
                    <path d="M918.7,573c-2.8,0-3.8,1.1-3.8,3.8c0.1,20.5,0.1,41,0,61.5c0,2.8,1.1,3.8,3.9,3.8c11.4-0.1,22.8-0.1,34.1,0
                        c2.9,0,3.9-1.1,3.9-4c-0.1-10.2,0-20.4,0-30.6c0-10.2-0.1-20.4,0-30.6c0-2.7-0.7-3.9-3.6-3.9C941.6,573.1,930.1,573.1,918.7,573z
                         M921.9,624.2c1.4,0.2,3.1,1.4,3.7,2.7c0.8,2-0.4,3.7-2.5,4.4c-0.5,0.1-1,0.2-1.8,0.4c0,1.6,0.2,3.1-0.1,4.5c0,0.1,0,0.2-0.1,0.2
                        c-0.4,1.2-2.2,1.1-2.5-0.1c0-0.1,0-0.2,0-0.3c-0.1-2.8-0.1-5.5,0.1-8.3C918.8,625.7,919.8,623.9,921.9,624.2z"/>
                    <path d="M972.4,574.5c10.2,1,18.6,5.9,24.2,15c6.9,11.2,7.1,22.8,0.5,34.2c-5.6,9.5-14.2,14.7-24.8,15.7
                        C981.3,617.6,981.3,596.2,972.4,574.5z"/>
                    <path d="M1022.2,587.7c0.6-0.1,1.9,1.3,2,2c0.1,11.6,0.1,23.1,0,34.7c0,0.7-1.6,2-2.4,1.9c-6.9-0.5-13.8-1.3-21.3-2.1
                        c5.7-11.4,6-22.6,0.1-34.3C1008.2,589.1,1015.2,588.3,1022.2,587.7z"/>
                    <path d="M909.1,572.5c0.5,0,1.1,0.1,1.6,0.1c0.3,1.2,0.9,2.5,0.9,3.8c0.1,20.7,0.1,41.4,0,62.1c0,1.2-0.6,2.5-0.9,3.7
                        c-0.5,0.1-1,0.1-1.5,0.2c-1.2-3.6-3.4-7.2-3.5-10.9c-0.4-16-0.4-32,0-47.9C905.9,579.9,908,576.2,909.1,572.5z"/>
                    <path d="M968.7,577.1c3.6,0,7.5,13.1,7.5,29.4c0,16.3-3.9,29.5-7.5,29.5s-6.5-13.2-6.5-29.4S965.1,577.1,968.7,577.1z"/>
                </g>`
                }
            ]
        }
    ]

    floor.rooms=[
        {
            points=`"1055.2,145.8 1055.2,370.6 768.3,370.6 768.3,685.2 312.9,685.2 312.9,370.6 29.5,370.6 29.5,145.8 313.5,145.8 313.5,215.7 767.1,215.7 767.1,145.8"`
        }
       
]

    });

})();