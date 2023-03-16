let myname = "Sam Hopkins";
let degreetype = "BS";
let degreename = "Computer Science";
let university = "University of Miami";
let email = "samjhopkins9@gmail.com";
let phonenumber = "415-480-9033";
let linkedin = "https://www.linkedin.com/in/sam-hopkins-6656a6205/";
let bio = "Lifelong musician with a passion for programming and math. I am skilled in a diverse set of programming languages including C++, Python, Java, JavaScript, Bash, Swift, HTML and CSS. My interests include dataset management, web development and sound design. I was born in Boston, experienced my earliest memories living in Hong Kong, and primarily grew up in Mill Valley, CA, right outside of San Francisco. Now, I am at the University of Miami pursuing a B.S. in Computer Science and minors in Math, Music Business and Music, with an expected graduation of May 2025. I spent my first two years in Miami pursuing a degree in Music Production/Engineering in the Frost School of Music. I have been writing and producing original music since I was 12 and playing the drums since I was 4, so I entered the Frost School of Music with hopes of turning these passions into careers. I learned to code the summer after my Sophomore year of college in order to work on an algorithm for modeling the motion of stocks (another interest of mine) and performing operations on data, and absolutely fell in love with programming beyond the scope of just that one project. I made this website. I wrote a bash script that interfaces with python that allows me to organize my song files for DJing from terminal. I wrote simple swift scripts to track my assignments, to-dos and workouts, among other smaller programs. I switched my major to computer science during the Fall of 2022 when I realized that the idea of having a job in software engineering, and cultivating my knowledge of it as much as possible, was extremely appealing to me. Music will forever be a passion for me, but my newfound passion for code has been extremely exciting for me as of late and I would love nothing more than to spend all day at work writing programs. I want to be a software engineer because I want to be paid to do something I love, to work with others on larger, more detailed projects than those I can do by myself, and to be in an environment where I can always keep learning more about computers and code.";

let skills = ['C++', 'Python', 'Java', 'Shell/Bash', 'JavaScript', 'HTML', 'CSS', 'Swift', 'Microsoft Excel', 'Ableton Live', 'Logic Pro X', 'Avid Pro Tools', 'DJing', 'Drums', 'Spanish', 'Customer Service'];

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
let jobs = [
    Job("Busser/Dishwasher/Food Runner", "The Contented Sole", "Pemaquid, ME",
        "Bussed tables, ran food, and washed dishes in a fast-paced seasonal dockside restaurant in Pemaquid, ME.",
        "15-25", "June-August 2018"),
    Job("Host/Busser", "The Cantina", "Mill Valley, CA",
        "Bussed tables, stocked items, took phone orders and sat customers in a full-service Mexican restaurant in Mill Valley, CA.",
        "15-25", "June-August 2020/2021, June-July 2022")
];

let School = (school, location, timedescription) => {
    return {
        school,
        location,
        timedescription
    }
}
let schools = [
    School("Marin Academy", "San Rafael, CA", "Class of 2020."),
    School("University of Miami", "Coral Gables, FL", "BS in Computer Science, minors in Math, Music Business and Music. Zeta Beta Tau Fraternity.")
];

let Course = (certificate, coursename, coursesite) => {
    return {
        certificate,
        coursename,
        coursesite
    }
}

let courses = [
    Course('Certificates/C++.pdf', 'Learn C++', 'Codecademy'),
    Course('Certificates/C++_for_programmers.pdf', 'C++ for Programmers', 'Codecademy'),
    Course('Certificates/Python.pdf', 'Learn Python', 'Codecademy'),
    Course('Certificates/Swift.pdf', 'Learn Swift', 'Codecademy'),
    Course('Certificates/JavaScript.pdf', 'Learn JavaScript', 'Codecademy'),
    Course('Certificates/Command_Line.pdf', 'Learn the Command Line', 'Codecademy'),
    Course('Certificates/Bash_Scripting.pdf', 'Learn Bash Scripting', 'Codecademy'),
    Course('Certificates/HTML.pdf', 'Learn HTML', 'Codecademy'),
    Course('Certificates/CSS.pdf', 'Learn CSS', 'Codecademy')
];

let Project = (projlink, projname, projdesc, projid) => {
    return {
        projlink,
        projname,
        projdesc,
        projid
    }
}

let projects = [
    Project("https://github.com/samjhopkins9/DJ-File-Tool", "File Copier/Organizer/Searcher for DJs (Shell & Python)",
            "This tool is meant to help DJs keep up with the organization of a large database of songs. It contains two components. The organizer component loops through a folder of downloaded song files, checking all nested folders, and copies all files of a specified type into a single unorganized folder. Then, for each song, asks the user which folder(s) they would like it to, copies it into the specified folder(s), and deletes it from the unorganized folder. The searcher component looks through a spreadsheet of songs, inputted by the user, and automatically opens an Amazon tab searching for each one.", 'djtools'),
    Project('https://github.com/samjhopkins9/Stock-Motion-Model', 'Stock Motion Model (Python & Java)',
            "This program is meant to visually and numerically illustrate the randomness of the movements in stock prices. It contains two components. The chart model portion, written in Python, attempts to model the intra-day, week, and month movements in stock prices based on the \"Random Walk\" theory, which hypothesizes that the movement of stocks throughout days, weeks and months is completely random -- subject to the random events of the world, that is, to which the professionals and the market as a whole respond so quickly. The data crunching portion of this program, written in Java, reads quotes data for a financial security from a .txt file and outputs a cleanly formatted version of the dates/times, closing prices, change, and several technical indicators, line-by-line. The movement of an S&P500 ETF and a set of fake quotes resulting from a randomly generated motion over many hypothetical trading periods, created by this program's complementary python component, are compared. The purpose is to illustrate the similarity in the movement of the stock market as a whole and a completely randomly generated motion, especially the technical indicators applied to them. Attempting to draw immediate conclusions about the next movement of the market based on the values of oscillators like ROC, MACD and RSI being high or low, or having been high or low for some period of time, is equally as effective as attempting to do so for the randomly generated movement.", 'quant'),
    Project('REDWAVE./songs.html', 'REDWAVE.',
            "Current EDM production/DJing project. I have completed 11 songs for this project so far, with more underway, and plan on beginning to release in 2023. My unreleased songs can be listened to by clicking on the link above.", 'redwave'),
    Project('https://open.spotify.com/artist/3NaStpwKZfkncUveomQEIq', "Blue Heights",
            "Released a 4-track EP and 4 self-written, produced and engineered singles under the name Blue Heights.", 'blue'),
    Project('https://www.youtube.com/watch?v=dembujuTyI4', "Spacegoat", "Contemporary jazz and neo-soul band of which I was the drummer during my junior year at Marin Academy. We recorded this video for the Marin Independent Journal in February 2019, and played in the showcase of their selection of Marin County's best high school musicians in April of that same year.", 'space')
];

function loadHTML(){
    document.getElementById('headshotp').innerHTML = `<img src="headshot.jpeg" id="headshot"></img>`;
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
        projectshtml += `<li id="${projects[i].projid}"><a href='${projects[i].projlink}' target='_blank')>${projects[i].projname}</a></li>
                            <p class="jobdesc">${projects[i].projdesc}</p>`;
    }
    document.getElementById('projectslist').innerHTML = projectshtml;
    
    document.getElementById('email').innerHTML = `Email: ${email}`;
    document.getElementById('phone').innerHTML = `Phone: ${phonenumber}`;
    document.getElementById('linkedin').innerHTML = `<a href="${linkedin}">Linkedin</a>`;
}

loadHTML();
