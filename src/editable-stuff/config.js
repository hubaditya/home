// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aditya",
  middleName: "",
  lastName: "Srivastava",
  message: " Passionate about changing the world with technology. Let's contribute together, you and I for a better future.",
  icons: [
    {
      image: "fa fa-file fa-2x socialicons",
      url: "https://docs.google.com/document/d/1zinNLrrzlOzAqq01PaKBPwIsDs74gm3hMicrB3W2_-Q/edit?usp=sharing",
    },
    {
      image: "fa fa-envelope fa-2x socialicons",
      url: "mailto:srivaay@mail.uc.edu",
    },
    {
      image: "fab fa-github fa-2x socialicons",
      url: "https://github.com/hubaditya",
    },
    {
      image: "fab fa-linkedin fa-2x socialicons",
      url: "https://www.linkedin.com/in/adisrivastava1/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/dp.jpeg"),
  imageSize: 350,
  message:
    "I am an applied Data Scientist currently pursuing master's from the University of Cincinnati, Carl H. Lindner College of Business. I like working in ambitious environments upholding the true spirits of data insights meeting business decisions. Through my previous employments, I have a proven track record of applied analytics and product strategy where I have handled massive datasets for firms like Google with experience in creating data models, using predictive data modeling for visualization and analyzing with algorithms. My goal has always been to create a positive impact via machine learning to sustain a better future for everyone. I would love to be a part of an organization that not only assists me in giving vision to my goals but also excites me of the challenges that await in realizing them.",
  resume: "https://docs.google.com/document/d/1zinNLrrzlOzAqq01PaKBPwIsDs74gm3hMicrB3W2_-Q/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hubaditya", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Data-Science-Job-Recommendation-System", "Webpage-Traffic-Time-Series", "Spotify-Analysis", "Inshorts-Sentiment-Analysis"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "R", value: 80 },
    { name: "SQL", value: 85 },
    { name: "Tableau", value: 85 },
    { name: "Tensorflow", value: 70 },
    { name: "Predictive Modeling", value: 90 },
    { name: "Keras", value: 70 },
    { name: "Time Series", value: 85 },
    { name: "Recommendation Systems", value: 80 },
    { name: "NLP", value: 75 },
    { name: "Product Analytics", value: 90 },
    { name: "Neural Networks", value: 75 },
    { name: "Git", value: 80 },
    { name: "Google Cloud Platform", value: 75 },

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 95 },
    { name: "Collaboration", value: 85 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Spontaneity", value: 75 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 80 },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/cincinnatireds-icon.png"), 
      label: "Data Science Student Consultant, Cincinnati Reds", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/wiseradvisor-icon.png"), 
      label: "CRO Expert, WiserAdvisor", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"300",
    height:"400"
  }
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Analytics Executive - Data Science, Essence Global', 
      companylogo: require('../assets/img/essenceglobal-icon.png'),
      url: "https://essenceglobal.com/",
      date: 'Oct 2019 – July 2021',
    },
    {
      role: 'Data Analyst, Unyscape Infocom',
      companylogo: require('../assets/img/unyscape-icon.png'),
      url: "https://unyscape.com/",
      date: 'Jan 2018 – Oct 2019',
    },
  ]
}

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Say Hi!",
  message:
    "I'm currently looking for full-time Data Science or Machine Learning opportunities. If you know of any positions available or have any questions, or if you just want to say hi and want to know the greatest musical band of all time (hint: Pink Floyd), feel free to reach me at",
  email: "srivaay@mail.uc.edu",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, experiences, getInTouch };