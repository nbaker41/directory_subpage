(function () {

	let app = angular.module("app", [
		// AJS modules
		"ui.router",
		//routes
		"info",
		"form",
		"levels",
        "directory",
        "home",
        "camp",
        "tbar",

		//components
		"sidebar",
		"floor",
		//directive
		"search"
		// "roomInfo"

	]);



	app.config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("home");

	});



    
	app.controller(
		"appCtrl",
		function ($scope, $transitions, $rootScope) {
			this.example = "Hello from AJS";
			let app = this;




			app.images = "../assets/visuals/images/";
			app.icons = "../assets/visuals/icons/";
			app.maps = "../assets/visuals/svg/"


			

            // app.hero = function() {
            //     var parent = document.getElementById("hero");
            //     var imgTag = document.createElement("img");

            // }



			
           



            app.show ='All';



			  app.faculty = [
               
                    {
                        id:01,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:02,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:03,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:04,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:05,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:06,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					},
					{
                        id:07,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:08,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:09,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:10,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:11,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:12,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					},
					{
                        id:13,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:14,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:15,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:16,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:17,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:18,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					},
					{
                        id:19,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:20,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:21,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:22,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:23,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:24,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
                    },
                    {
                        id:01,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:02,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:03,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:04,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:05,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:06,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					},
					{
                        id:07,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:08,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:09,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:10,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:11,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:12,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					},
					{
                        id:13,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:14,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:15,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:16,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:17,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:18,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					},
					{
                        id:19,
                        name:{
                            first: 'Felicia',
                            middle: 'Ashley',
                            last: 'Williams',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,

                        }
                    },
                    {
                        id:20,
                        name:{
                            first: 'Philip',
                            middle: 'Gerald',
                            last: 'Banks',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:201,
                            
                        }
                    },
                    {
                        id:21,
                        name:{
                            first: 'Vincent',
                            middle: 'Skye',
                            last: 'Carter',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:105,
                            
                        }
                    },
                    {
                        id:22,
                        name:{
                            first: 'Kevin',
                            middle: 'Lawrence',
                            last: 'Durring',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:101,
                            
                        }
                    },
                    {
                        id:23,
                        name:{
                            first: 'Kristen',
                            middle: 'Diane',
                            last: 'McDowell',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Office of the Arts",
                            team: null,
                            role:"Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:107,
                            
                        }
                    },
                    {
                        id:24,
                        name:{
                            first: 'Andre',
                            middle: 'X',
                            last: 'Irvin',
                            full: function() {
                                return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                            },
                        },
                        name_short:'',
                        department: {
                            name:"Admissions",
                            team: null,
                            role:"Admissions Counsellor",
                        },
                        bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
                        sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
                        address:{
                            street:'1234 Main Street',
                            city:'Atlanta',
                            zip:'30024',
                            building:null
                        },
                        contact:{
                            phone:'012.345.6789',
                            email:'fwilliams@example.com',
                            other:null
                        },
                        office: {
                            number:203,
                            
                        }
                
					}
                    
					
					
        ]


			

			// app.global.Data = {showData: true};

			// transitions
			$transitions.onSuccess({}, function ($transition) {
				app.route = {};
				app.route.from = $transition.$from().name;
				app.route.to = $transition.$to().name;
				app.route.params = $transition.params().name;

				app.pageClass = app.route.to;
			});

		});



})();