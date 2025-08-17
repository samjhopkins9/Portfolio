let Job = (position, employer, location, jobdescription, hours_week, months_worked) => {
    return {
        position,
        employer,
        location,
        jobdescription,
        hours_week,
        months_worked
    }
}

let School = (school, location, timedescription) => {
    return {
        school,
        location,
        timedescription
    }
}

let Course = (certificate, coursename, coursesite) => {
    return {
        certificate,
        coursename,
        coursesite
    }
}

let Project = (projlink, projname, projdesc, projid, projseas, addLinks = null) => {
    return {
        projlink,
        projname,
        projdesc,
        projid,
        projseas,
        addLinks
    }
}

// document.querySelector("html").style.backgroundImage = "url(background.jpeg)";
let myname = "Sam Hopkins";
let degreetype = "Dual BS";
let degreename = "Data Science & AI + Computer Science Fundamentals";
let university = "University of Miami";
let email = "samjhopkins9@gmail.com";
let phonenumber = "415-480-9033";
let linkedin = "https://www.linkedin.com/in/sam-hopkins-6656a6205/";
let bio = `Lifelong musician with a passion for programming and data analysis. I am skilled in a diverse set of programming languages including Python, R, C++, Java, Bash, JavaScript, HTML and CSS. My interests include data analytics, machine learning, audio software development and sound design.
    <br>
    <br>
    I was born in Boston, experienced my earliest memories living in Hong Kong, and primarily grew up in Mill Valley, CA, right outside of San Francisco. Now, I am at the University of Miami pursuing a B.S. in Data Science and Artificial Intelligence with minors in Math and Music.
    <br>
    I spent my first two and a half years in Miami pursuing a degree in Music Production/Engineering in the Frost School of Music. I decided to change my course after I learned to code via online courses during the summer of 2022 and quickly found myself immersed in it and driven to learn as much as I could. I have realized that the aspects of computer science that appeal to me the most are the data-driven ones. I would be happy in any position where I can gather, inspect, clean, crunch, and interpret data. `;

let skills = ['Object Oriented Programming', 'Python', 'R', 'C++', 'Java', 'Bash', 'JavaScript', 'HTML', 'CSS', 'Swift', 'Git', 'Linear Algebra', 'Statistics', 'Probability', 'Quantitative Finance', 'Excel', 'Ableton Live', 'DJing', 'Drums', 'Logic Pro X', 'Avid Pro Tools', 'Spanish', 'Customer Service'];

let jobs = [
    Job("Busser/Dishwasher/Food Runner", "The Contented Sole", "Pemaquid, ME",
        "Bussed tables, ran food, and washed dishes in a fast-paced seasonal dockside restaurant in Pemaquid, ME.",
        "15-25 hours/week, ", "June-August 2018"),
    Job("Host/Busser", "The Cantina", "Mill Valley, CA",
        "Bussed tables, stocked items, took phone orders and sat customers in a full-service Mexican restaurant in Mill Valley, CA.",
        "15-25 hours/week, ", "June-August 2020/2021, June-July 2022"),
    Job("Music Producer", "Self-employed", "Ongoing",
        "Writer and producer of electronic music, working under the name REDWAVE. I have released four 4-5 song EPs this year.",
        "", ""),
    Job("Computer Programmer", "Self-employed", "Ongoing",
        "Completed several self-directed projects, including: A convolutional neural network for predicting vehicle position in a garage, along with a set of c++ header files for data handling, machine learning and multilayer perceptron in c++; a Black-Scholes-based option price calculator with an attached chart section and market newsfeed, within an html-based UI; a random forest-based regression model to predict salaries; a classifier for written characters; and a classifier of real/fake banknotes.",
        "", ""),
    Job("Server", "King Eider's Pub", "Damariscotta, ME",
         "Waited on tables, which involved taking food/drink orders, delivering food, bussing tables, and restocking items in a pub-style restaurant in Damariscotta, ME.",
         "30-35 hours/week, ", "June-August 2025")
];

let schools = [
    School("Marin Academy", "San Rafael, CA", "Class of 2020."),
    School("University of Miami", "Coral Gables, FL", "Dual BS in Data Science & Artificial Intelligence + Computer Science Fundamentals, minors in Math and Music. Founding Father of Zeta Beta Tau Fraternity, Alpha Omega Chapter. Expected graduation December 2026.")
];

let courses = [
    Course('', 'Computer Organization & Architecture', 'University of Miami'),
    Course('', 'Data Structures & Algorithms', 'University of Miami'),
    Course('', 'Neural Networks', 'University of Miami'),
    Course('', 'Statistical Learning with Applications', 'University of Miami'),
    Course('', 'Intro to Python for Scientists', 'University of Miami'),
    Course('', 'Computer Programming II', 'University of Miami'),
    Course('', 'Linear Algebra', 'University of Miami'),
    Course('', 'Probability & Statistics', 'University of Miami'),
    Course('', 'Discrete Mathematics', 'University of Miami'),
    Course('', 'Calculus III', 'University of Miami'),
    
    Course('Certificates/C++.pdf', 'Learn C++', 'Codecademy'),
    Course('Certificates/C++2.pdf', 'C++ for Programmers', 'Codecademy'),
    Course('Certificates/Python.pdf', 'Learn Python', 'Codecademy'),
    Course('Certificates/CommandLine.pdf', 'Learn the Command Line', 'Codecademy'),
    Course('Certificates/BashScripting.pdf', 'Learn Bash Scripting', 'Codecademy'),
    Course('Certificates/JS.pdf', 'Learn JavaScript', 'Codecademy'),
    Course('Certificates/HTML.pdf', 'Learn HTML', 'Codecademy'),
    Course('Certificates/CSS.pdf', 'Learn CSS', 'Codecademy'),
    Course('Certificates/ResponsiveDesign.pdf', 'Learn CSS: Responsive Design', 'Codecademy'),
    Course('Certificates/NavigationDesign.pdf', 'Learn Navigation Design', 'Codecademy'),
    Course('Certificates/Swift.pdf', 'Learn Swift', 'Codecademy')
];

let projects = [
    
    Project("https://github.com/samjhopkins9/CSI-Prediction-Models", "Convolutional Neural Network to Predict Vehicle Position (Python) + Data Handling, Machine Learning and Multilayer Perceptron Algorithm Design (C++)",
            "This project uses a dataset containing channel state information from a remote radio unit receiving signals from cars parked in various locations around a garage to predict: a) the position of a vehicle, and b) and whether or not the vehicle is within line of sight from the remote radio unit. The most effective models were convolutional neural networks written in python using tensorflow. This project also contains manually written implementations of linear/logistic regression, KNN, and multilayer perceptron in c++, and a written proof of the gradient update rule in a multilayer perceptron.",
            "nnpr1", "October - November 2024"),
    
    Project("https://samjhopkins9.github.io/SalaryModel_RF/docs/Report.html", "Regression Model for Predicting Salary (R)",
            "This project uses a dataset downloaded from Kaggle to create a regression model to predict an individual's salary based on their age, years of experience, education level, and gender.", "salarymodel", "February - May 2024", ["https://samjhopkins9.github.io/SalaryModel_RF/src/Project1.html"]),
    Project("https://samjhopkins9.github.io/Character-Classifier/", "Image Classifier for Written Characters (Python)",
            "This project uses mnist data from python's scikit-learn module to create a model which identifies images of written characters a-z and 0-9.", "imagemodel", "March 2024"),
    Project("https://samjhopkins9.github.io/Banknote-Classifier/", "Classifier for Real/Fake Banknotes (Python)",
            
            "This project uses .csv data to classify banknotes as real or fake based on several given attributes.", "notemodel", "March 2024"),
    


    Project("https://samjhopkins9.github.io/Options-Calculator-Market-Newsfeed", "Black-Scholes Options Price Calculator & Market Newsfeed (JavaScript/HTML/CSS)",
            "This desktop webpage displays news, some simple charts, and some basic information pertaining to a volatility of the given stock or ETF using minutely data over the last 2 weeks. It also uses the Black-Scholes formula to calculate the price of short-term options contracts with strike prices near the underlying, at various levels of implied volatility, with time decay measured after a certain amount of minutes, and the underlying price taken at three points: its current price, plus, and minus a specified percentage movement. This was largely created for the purpose of calculating fluctuations in high-volume daily contracts on ETFs.", 'interface', "July 2023"),
    
    Project('https://whoisredwave.com', 'REDWAVE.',
    "Current EDM production/DJing project.", 'redwave', "September 2023 - Present")
    
];

function loadHTML(){
    // document.getElementById('headshotp').innerHTML = `<img src="headshot2.jpeg" id="headshot"></img>`;
    document.getElementById('title').innerHTML = myname;
    document.getElementById('name').innerHTML = myname;
    document.getElementById('description').innerHTML = `${degreetype} in ${degreename} @ `;
    // document.getElementById('description').innerHTML += `${degree2type} in ${degree2name} <br>`;
    document.getElementById('description').innerHTML += `University of Miami`;
    document.getElementById('bio').innerHTML = bio;
    
    let jobshtml = "";
    for (let i=jobs.length-1; i>=0; i--){
        jobshtml += `<li>${jobs[i].position} \@${jobs[i].employer}, ${jobs[i].location}</li>
                        <p class="jobdesc">${jobs[i].jobdescription}</p>
                        <p class="timedesc">${jobs[i].hours_week} ${jobs[i].months_worked}</p> \n`;
    }
    document.getElementById('jobslist').innerHTML = jobshtml;
    
    let schoolshtml = "";
    for (let i=schools.length-1; i>=0; i--){
        schoolshtml += `<li>${schools[i].school}, ${schools[i].location}</li>
                            <p class="jobdesc">${schools[i].timedescription}</p> \n`;
    }
    document.getElementById('schoolslist').innerHTML = schoolshtml;
    
    let courseshtml = "";
    let certshtml = "";
    for (let i=0; i<courses.length; i++){
        if (courses[i].certificate === ''){
            courseshtml += `<li>${courses[i].coursename} (${courses[i].coursesite})</li> \n`;
            continue;
        } else {
            certshtml += `<li><a href=${courses[i].certificate} target="_blank">${courses[i].coursename}</a> (${courses[i].coursesite})</li> \n`;
        }
    }
    document.getElementById('certslist').innerHTML = certshtml;
    document.getElementById('courseslist').innerHTML = courseshtml;
    
    let skillshtml = "";
    for (let i=0; i<skills.length; i++){
        skillshtml += `<li>${skills[i]}</li> \n`;
    }
    document.getElementById('skillslist').innerHTML = skillshtml;
    
    let projectshtml = "";
    for (let i=0; i<projects.length; i++){
        projectshtml += `<li id="${projects[i].projid}"><a href='${projects[i].projlink}' target='_blank'>${projects[i].projname}</a></li>
                            <p>${projects[i].projseas}</p>
                            <p class="jobdesc">${projects[i].projdesc}</p>`;
        if (projects[i].projname === "Regression Model for Predicting Salary (R)"){
            for (link of projects[i].addLinks){
                projectshtml += `<a href="${link}" target="_BLANK">Source Notebook</a><br><br>`;
            }
        }
        if (projects[i].projname === "REDWAVE."){
            projectshtml += `<div id="musiclinks"><iframe width="50%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1805557528&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><iframe width="50%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1758975567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></div><br><br>`;
        }
    }
    document.getElementById('projectslist').innerHTML = projectshtml;
    
    document.getElementById('email').innerHTML = `<a href=mailto:${email} target="_BLANK">${email}</a>`;
    document.getElementById('phone').innerHTML = `${phonenumber}`;
    document.getElementById('linkedin').innerHTML = `<a href="${linkedin}">Linkedin</a>`;
}

let sectionIDs = ["biopar", "edu_exp", "education", "experience", "bulletpoints", "skills", "certifications", "courses", "projects"];

function loadSection(args){
    for ( s of sectionIDs ){
        if (args.includes(s)){
            document.getElementById(s).style.display = "flex";
        } else {
            document.getElementById(s).style.display = "none";
        }
    }
}

loadHTML();
document.getElementById("aboutbutton").addEventListener("click", function() {
    loadSection(["biopar"]);
});
document.getElementById("edubutton").addEventListener("click", function(){
    loadSection(["edu_exp", "education", "experience"]);
});
document.getElementById("skillbutton").addEventListener("click", function(){
    loadSection(["bulletpoints", "skills", "certifications", "courses"]);
});
document.getElementById("projbutton").addEventListener("click", function(){
    loadSection(["projects"]);
});


