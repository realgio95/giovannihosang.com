/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name": "Giovanni HoSang",
    "role": "Software Developer",
    "contacts": {
        "mobile": "604-862-3795",
        "email": "giovanni.hosang@gmail.com",
        "github": "realgio95",
        "twitter": "dappastar1995",
        "location": "Vancouver, BC, Canada"
    },
    "welcomeMessage": "Where Development meets personality",
    "skills": ["Javascript", "ReactJS", "Java", "C++", "C", "Java", "Python"] ,
    "interests": ["Soccer", "Cricket", "Reggae", "Soca", "Cricket"],
    "biopic": "",
    "display": 	"function(){}"
}

 var work = {
	"jobs": [{
			"employer": "SAP Labs",
			"title": "Agile Developer Intern",
			"location": "Vancouver, Canada",
			"dates": "2017",
			"description": "Worked in teh Charting Team on the SAP Analytics Cloud Business Intelligence Solution" 
		},{
			"employer": "GraceKennedy Financial Group",
			"title": "Social Media Manager",
			"location": "Kingston, Jamaica",
			"dates": "2015",
			"description": "Managed the Facebook Marketing Strategy for the SchoolBoy Cricket competitions" 
		},{
			"employer": "Intcomex",
			"title": "Computer Technician Intern",
			"location": "Kingston, Jamaica",
			"dates": "2013",
			"description": "Worked to fix various computer issues ranging from hardware to software issues" 
		}]
}
 var projects = {
	"projects": [{
			"title": "Giovanni HoSang's Website ",
			"dates": "2018",
			"description": "This is an online Resume highlightingh my skills and technical experience. Visit www.giovannihosang.com",
			"images": [""]
		}, {
			"title": "SmartStrument",
			"dates": "2017",
			"description": "SmartStrument is an IOT application where Arduino was used to scare musical notes and render them to an LED that's used to teach people how to play a pianio",
			"images": [""]
		}, {
			"title": "EndItNow",
			"dates": "2017",
			"description": "EndItNow was created at the Nwhacks 2017 at University of British Columbia. Enditnow  is a platform for Activism against cyber bullyism to fight harrasment using positive campaigns and trends around the world.",
			"images": [""]
		}, {
			"title": "StartNow",
			"dates": "2016",
			"description": "StartNow is a web-application targeting Simon Fraser University students who want to work on projects outside of the classroom. Users of our application will be able to log in, create profiles, create project profiles, seek other people with the appropriate skillsets, join existing project groups, post on a project discussion board, create meeting locations, and communicate with fellow users using the chat feature to begin their collaborative process. These features will be discussed further in a latter section.",
			"images": ""
		}
	],	
	"display": 	"function(){}"
}
 var education = {
    "schools": [
      {
        "name": "Simon Fraser University",
        "location": "Vancouver, Canada",
        "degree": "BSc. in Computer Science Candidate",
        "majors": "Computer Science",
        "dates": 2019,
        "url": "https://www.sfu.ca"
  
      },{
        "name": "University of the West Indies, Mona Campus",
        "location": "Kingston, Jamaica",
        "degree": "BSc. in Computer Science (Transferred)",
        "majors": "Computer Science",
        "dates": 2015,
        "url": "https://www.uwimona.edu.jm"
      },
      {
        "name": "Ardenne High School",
        "location": "Kingston, Jamaica",
        "degree": "CAPE Associate Degree in Computing",
        "majors": "Physics, Computer Science, Math",
        "dates": 2014,
        "url": "https://www.ardennehighschool.edu.jm"
      }
    ],
    "onlineCourses": [
      {
        "title": "Harvard CS50",
        "school": "Harvard University Online",
        "date" : 2015,
        "url": "https://cs50.harvard.edu/"
      },
      {
        "title": "Harvard CS50",
        "school": "Harvard University Online",
        "date" : 2015,
        "url": "https://cs50.harvard.edu/"
      }
    ]
  }


var formattedbio = .replace("%data", bioName);

 alert(bio.name);