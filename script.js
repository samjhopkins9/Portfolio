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

let Project = (projlink, projname, projdesc, projid, projseas) => {
    return {
        projlink,
        projname,
        projdesc,
        projid,
        projseas
    }
}

document.querySelector("html").style.backgroundImage = "url(background.jpeg)";


let myname = "Sam Hopkins";
let degreetype = "BS";
let degreename = "Data Science & AI";
let university = "University of Miami";
let email = "samjhopkins9@gmail.com";
let phonenumber = "415-480-9033";
let linkedin = "https://www.linkedin.com/in/sam-hopkins-6656a6205/";
let bio = `Lifelong musician with a passion for programming and data analysis. I am skilled in a diverse set of programming languages including Python, R, C++, Java, Bash, JavaScript, HTML and CSS. My interests include data analytics, machine learning, audio software development and sound design.
    <br>
    <br>
    I was born in Boston, experienced my earliest memories living in Hong Kong, and primarily grew up in Mill Valley, CA, right outside of San Francisco. Now, I am at the University of Miami pursuing a B.S. in Data Science and Artificial Intelligence with minors in Math and Music, and am seeking an internship in Data Analytics for summer of 2024.
    <br>
    I spent my first two and a half years in Miami pursuing a degree in Music Production/Engineering in the Frost School of Music. I decided to change my course after I learned to code via online courses during the summer of 2022 and quickly found myself immersed in it and driven to learn as much as I could. I have realized that the aspects of computer science that appeal to me the most are the data-driven ones. I would be happy in any position where I can gather, inspect, clean, crunch, and interpret data. `;

let skills = ['Python', 'R', 'C++', 'Java', 'Bash Scripting', 'JavaScript', 'HTML', 'CSS', 'Swift', 'Statistics', 'Quantitative Finance', 'Microsoft Excel', 'Ableton Live', 'Logic Pro X', 'Avid Pro Tools', 'DJing', 'Drums', 'Spanish', 'Customer Service'];

let jobs = [
    Job("Busser/Dishwasher/Food Runner", "The Contented Sole", "Pemaquid, ME",
        "Bussed tables, ran food, and washed dishes in a fast-paced seasonal dockside restaurant in Pemaquid, ME.",
        "15-25", "June-August 2018"),
    Job("Host/Busser", "The Cantina", "Mill Valley, CA",
        "Bussed tables, stocked items, took phone orders and sat customers in a full-service Mexican restaurant in Mill Valley, CA.",
        "15-25", "June-August 2020/2021, June-July 2022"),
    Job("Music Producer", "Self-employed", "Ongoing",
        "Writer and producer of electronic music, working under the name REDWAVE. I have released two 4-song EPs so far this year. I released 4 singles and a 4-song EP under the name Blue Heights in 2020, and before that released 3 songs under the name SMJH.",
        "", ""),
    Job("Computer Programmer", "Self-employed", "Ongoing",
        "Completed several self-directed projects, including: A Black-Scholes-based option price calculator with an attached chart section and market newsfeed, within an html-based UI; a random forest-based regression model to predict salaries; a classifier for written characters; and a classifier of real/fake banknotes.",
        "", "")
];

let schools = [
    School("Marin Academy", "San Rafael, CA", "Class of 2020."),
    School("University of Miami", "Coral Gables, FL", "BS in Data Science & Artificial Intelligence, minors in Math and Music. Founding Father of Zeta Beta Tau Fraternity, Alpha Omega Chapter. ")
];

let courses = [
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
    Project('https://whoisredwave.com', 'REDWAVE.',
            "Current EDM production/DJing project.", 'redwave', "Ongoing"),
    Project("https://samjhopkins9.github.io/SalaryModel_RF/", "Regression Model for Predicting Salary (R)",
            "This project uses a dataset downloaded from Kaggle to create a regression model to predict an individual's salary based on their age, years of experience, education level, and gender.", "salarymodel", "Spring 2024"),
    Project("https://samjhopkins9.github.io/Options-Calculator-Market-Newsfeed", "Black-Scholes Options Price Calculator & Market Newsfeed (JavaScript/HTML/CSS)",
            "This page displays news, some simple charts, and some basic information pertaining to a volatility of the given stock or ETF using minutely data over the last 2 weeks. It also uses the Black-Scholes formula to calculate the price of short-term options contracts with strike prices near the underlying, at various levels of implied volatility, with time decay measured after a certain amount of minutes, and the underlying price taken at three points: its current price, plus, and minus a specified percentage movement. This was largely created for the purpose of calculating fluctuations in high-volume daily contracts on ETFs.", 'interface', "Summer 2023"),
    Project("https://samjhopkins9.github.io/Character-Classifier/", "Image Classifier for Written Characters (Python)",
            "This project uses mnist data from python's scikit-learn module to create a model which identifies images of written characters a-z and 0-9.", "imagemodel", "Spring 2024"),
    Project("https://samjhopkins9.github.io/Banknote-Classifier/", "Classifier for Real/Fake Banknotes (Python)",
            "This project uses .csv data to classify banknotes as real or fake based on several given attributes.", "notemodel", "Spring 2024"),
    Project('https://www.youtube.com/watch?v=dembujuTyI4', "Spacegoat", "Contemporary jazz and neo-soul band of which I was the drummer during my junior year at Marin Academy. We recorded this video for the Marin Independent Journal in February 2019, and played in the showcase of their selection of Marin County's best high school musicians in April of that same year.", 'space', "Fall 2018 - Spring 2019")
    
];

function loadHTML(){
    document.getElementById('headshotp').innerHTML = `<img src="headshot2.jpeg" id="headshot"></img>`;
    document.getElementById('title').innerHTML = myname;
    document.getElementById('name').innerHTML = myname;
    document.getElementById('description').innerHTML = `${degreetype} in ${degreename} at ${university}`;
    document.getElementById('bio').innerHTML = bio;
    
    let jobshtml = "";
    for (let i=jobs.length-1; i>=0; i--){
        jobshtml += `<li>${jobs[i].position} \@${jobs[i].employer}, ${jobs[i].location}</li>
                        <p class="jobdesc">${jobs[i].jobdescription}</p>
                        <p class="timedesc">${jobs[i].hours_week} hours/week, ${jobs[i].months_worked}</p> \n`;
    }
    document.getElementById('jobslist').innerHTML = jobshtml;
    
    let schoolshtml = "";
    for (let i=schools.length-1; i>=0; i--){
        schoolshtml += `<li>${schools[i].school}, ${schools[i].location}</li>
                            <p class="jobdesc">${schools[i].timedescription}</p> \n`;
    }
    document.getElementById('schoolslist').innerHTML = schoolshtml;
    
    let courseshtml = "";
    for (let i=0; i<courses.length; i++){
        courseshtml += `<li><a href=${courses[i].certificate} target="_blank">${courses[i].coursename}</a> (${courses[i].coursesite})</li> \n`;
    }
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
    }
    document.getElementById('projectslist').innerHTML = projectshtml;
    
    document.getElementById('email').innerHTML = `Email: ${email}`;
    document.getElementById('phone').innerHTML = `Phone: ${phonenumber}`;
    document.getElementById('linkedin').innerHTML = `<a href="${linkedin}">Linkedin</a>`;
}

loadHTML();
