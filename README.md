# LEARN Prework Frontend React Application
LEARN Academy prework frontend application is built on React and connects to the [LEARN Academy Prework Application Rails API](https://github.com/LEARNAcademy/prework_backend). It handles the logic and front-end rendering of the content along with allowing admins and students to log in and complete modules.

The purpose of the application, when coupled with the rails backend, allows an admin to create new student accounts which then can be used by incoming new students to complete precourse work and bring them up to speed prior to class start in the three main categories of CSS, HTML and Javascript.

## Live demo
You can see a live build of this application running on our test heroku site:
https://learn-prework-frontend.herokuapp.com/

# Features
- Admin panel ( Visible only if the account is set to Admin in the backend.) 
It creates a new student with an email and randomly generated password 

- Login/Logout with email and password.
  - Multiple users(Students), each with their own progress. 

- Topics (HTML, CSS, Javascript) category selection.
Upon login, students can then select a topic to start working in.

- Code Module sub-category selection.
After selecting a Topic the student then selects a sub-category Code Module that will contain a following lesson to work in. 

- Lesson selection
Lessons will hold the content for the specified lesson and will also have follow up questions to verify what they learned. 

- Question tests relating to the lesson completed. 
  - Multiple choice
  - IDE live coding challenge

Questions will challenge the student with a question that includes multiple possible answers. The student will need to the select the correct answer (with the ability to try again if the answer selected is incorrect) before being able to proceed to the next lesson.

Questions can also be a live coding challenge with a built in IDE. The application will check their code against the challenge parameters. If the IDE includes the expected lines of code, the student will then be able to move on to the next lesson/challenge. 

- Dynamic progress bar

- Dynamic saving of progress for the student to leave the application and come back and start where they left off. 

# Installation
**A quick note before installing**: This application MUST have the rails prework_backend (linked in the top of the page) running in the background for the front-end to fetch user accounts (including admin) and the content.  For instructions on how to run the backend, please see its repo readme. 

Steps to install:
1. Clone the repository
```
git clone repo-link-goes-here
```

2. CD into the directory
```
cd repo-directory
```

3. Run the following dependency commands

```
npm i
```

4. Run the server

```
npm start
```

5. If the browser window has not already popped up, navigate your browser to the appropriate localhost port.

```
localhost:8081
```

## Ports
This React frontend application runs on

```
localhost:8081
```

# Technologies used
[Code-Mirror (react-codemirror)](https://github.com/JedWatson/react-codemirror)
[Material UI (Core/Icons)](https://material-ui.com/)
[Reactstrap](https://reactstrap.github.io/)
[Router-Dom](https://www.npmjs.com/package/react-router-dom)
[Eslint (AirBNB) ](https//eslint.org)


# Credits
This application was created by Alpha 2020 full-stack developer students as their internship project with [LEARN Academy](https://www.learnacademy.org/)

Alpha 2020 Developers
- [Art Ortega](https://github.com/art-ortega)
- [Tsz Li](https://github.com/bli013)
- [Andee Isaacs](https://github.com/alyxender)

Mentor
- [Harrison Shaen](https://github.com/hschaen)
