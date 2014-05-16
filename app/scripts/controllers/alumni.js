//Customized carousel template
angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">\n" +
    "    <ol class=\"carousel-indicators\" ng-show=\"slides().length > 1\">\n" +
    "        <li ng-repeat=\"slide in slides()\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
    "    </ol>\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides().length > 1\"><span class=\"arrow\"><</span></a>\n" +
    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides().length > 1\"><span class=\"arrow\">></span></a>\n" +
    "</div>\n" +
    "");
}]);

//Controller
angular.module('ttsApp')
.controller('AlumniCtrl', ['$scope', function($scope){

  $scope.myInterval = 5000;
  var slides = $scope.slides = [
	  {
	  	'image': 'assets/img/Alumni/Jenny.jpg',
	  	'text': "I loved the fact that we built real projects and learned by doing."
	  }, 
	  {
	  	'image': 'assets/img/Alumni/Roberto.jpg',
	  	'text': "\"The combination of people from different backgrounds with the same purpose - learning to code - and the awesome teaching skills and experience of our instructor made the whole program my favorite part.\""
	  }, 
	  {
	  	'image': 'assets/img/Alumni/Aaron.jpg',
	  	'text': "\"My favorite part of the program was getting to know Ruby on Rails.\""
	  },
	  {
	  	'image': 'assets/img/Alumni/Sarah.jpg',
	  	'text': "\"I enjoyed every second of the program. From the awesome people to the great instructor, I had an all around experience of a lifetime. Best decision I ever made!\""
	  },
    {
      'image': 'assets/img/Alumni/megan.jpg',
      'text': "\"I feel like I am now on the inside of the tech community. I can speak the language, I am growing my skills and I know what my business needs.\""
    },
    {
      'image': 'assets/img/Alumni/adia.png',
      'text': "\"The world is changing and being a part of this tech boom is extremely important to the next generation. The journey with TTS was the greatest decision of my life.\""
    },
    {
      'image': 'assets/img/Alumni/cj.jpg',
      'text': "\"Learning to code helps the mission and goals of my business by enabling me to make my clients’ vision come to life.\""
    }
  ];

  $scope.alumnis = [
  	{
  		'name': "Jenny Grace",
  		'img': "assets/img/Alumni/Jenny-sq.jpg",
  		'bio': "I was completely changing careers and TTS bootcamp was a way to get a concentrated development education without being out of the work force for years.  I loved the fact that we built real projects and learned by doing.  I am a software development intern now at the fabulous creative design/dev shop, Toolbox No. 9, doing front-end and server-side work and I am loving it!"
  	},
  	{
  		'name': "Roberto Rivera",
  		'img': "assets/img/Alumni/Roberto-sq.jpg",
  		'bio': "I can’t say there was a specific favorite part (of the program) [that was my favorite], but the combination of people from different backgrounds with the same purpose - learning to code - and the awesome teaching skills and experience of our instructor made the whole program my favorite part. I really liked that the program encourages students to participate in activities outside the classroom. I participated in every activity I could get in, like Atlanta Startup Village, Startup Weekend, SW Next,  just to say some. In the next few weeks I will be joining a startup in Germany as a Rails Developer intern. Along with that, pretty soon I will be launching an app under Code For America to help citizens in Puerto Rico visualize where crimes are happening, so they can know what’s going on in their communities and act according to their situations."
  	},
  	{
  		'name': "Aaron Groch",
  		'img': "assets/img/Alumni/Aaron-sq.jpg",
  		'bio': "Aaron came to TTS after leaving the CS program at GSU to focus on web development. His favorite part of the program was getting to know Ruby on Rails. Aaron is currently in an internship with Toolbox No. 9, an awesome ATL web dev shop."
  	},
  	{
  		'name': "Sarah Hudson",
  		'img': "assets/img/Alumni/Sarah-sq.jpg",
  		'bio': "Sarah Hudson is a native Charlottean and a long-time 'techy.' With a background in Web Technologies and Design, she started out as a graphic and web designer for local Charlotte product development company Little Idea and went on to work as the lead graphic designer at Enventys. Eager to learn more about the web and software development side of things, Sarah joined the first TTS crew to learn Ruby on Rails in Atlanta. Now she works as a web and software developer at CheckAppointments, a SaaS company in Charlotte."
  	},
    {
      'name': "Adia",
      'img': "assets/img/Alumni/adia-sq.jpg",
      'bio': "Learning how to code is a skill set that’s ever-evolving. I believe having the knowledge of Tech Talent South’s code program is a plus for personal and professional growth. The world is changing and being a part of this tech boom is extremely important to the next generation. The journey with TTS was the greatest decision of my life."
    },
    {
      'name': "Chris Jones",
      'img': "assets/img/Alumni/cj-sq.jpg",
      'bio': "Learning to code helps the mission and goals of my business by enabling me to make my clients’ vision come to life. I’m in the business of creative problem solving, so if a client solution entails a web app that, for instance, needs to help them locate customers in a particular area, I now have the knowledge to either offer that service or to effectively communicate with an experienced developer in their own language in order to collaborate or bring them in on the project."
    },
    {
      'name': "Megan Rhinehart",
      'img': "assets/img/Alumni/megan-sq.jpg",
      'bio': "I feel like I am now on the inside of the tech community. I can speak the language, I am growing my skills and I know what my business needs. I learned how to generate Rails apps, understand the structure of an app and how to search for answers as I debug, which is often! I learned how to collaborate on projects in Github (which I hope to add to one day) and find gems that are relevant to my project.My classmates and teacher were awesome. We continue to support each other and think of the program as the beginning of our tech endeavors, which I hear can be the hardest part!"
    },
  ];

}])