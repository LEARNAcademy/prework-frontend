import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Home from './pages/Home';
import Header from './components/Header';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      topics:[],
      modules:[],
      lessons:[],
      questions:[],
      resources:[]
    }
    // this.getTopics();
    // this.getModules();
    // this.getLessons();
    // this.getQuestions();
    // this.getResources();
  }

  // componentDidMount() {
  //   this.getTopics();
  //   this.getModules();
  //   this.getLessons();
  //   this.getQuestions();
  //   this.getResources();
  // }

  getTopics = () => {
    fetch('/topics').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(topicArr => {
      this.setState({topics:topicArr});
    });
  };

  getModules = () => {
    fetch('/code_modules').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(modulesArr => {
      this.setState({modules:modulesArr});
    })
  }

  getLessons = () => {
    fetch('/lessons').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(lessonArr => {
      this.setState({lessons:lessonArr})
    })
  }

  getQuestions = () => {
    fetch('/questions').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(questionsArr => {
      this.setState({questions:questionsArr})
    })
  }

  getResources = () => {
    fetch('/resources').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(resourceArr => {
      this.setState({resources:resourceArr})
    })
  }

  render(){

    const topics = [{
      "id":1,"title":"Html","created_at":"2020-05-06T18:07:10.105Z","updated_at":"2020-05-06T18:07:10.105Z"
      }, {"id":2,"title":"JavaScript","created_at":"2020-05-06T18:07:10.124Z","updated_at":"2020-05-06T18:07:10.124Z"
      }, {"id":3,"title":"CSS","created_at":"2020-05-06T18:07:10.134Z","updated_at":"2020-05-06T18:07:10.134Z"}]
    const modules = [{
      id: 1, lesson: 'Intro HTML', progress: 'Lesson 1', completed: true, user_id: 1, topic_id:1,
    }, {
      id: 2, lesson: 'Tables', progress: 'Lesson 1', completed: true, user_id: 1, topic_id:2,
    }, {
      id: 3, lesson: 'Intro JS', progress: 'Lesson 1', completed: true, user_id: 1, topic_id:2,
    },{
      id: 4, lesson: 'Intro CSS', progress: 'Lesson 1', completed: true, user_id: 1, topic_id:3
    }];
    console.log(topics[0].id)

    const lessons = [{"id":1,"content":"Hyper Text Markup Language: structure and content of a page. Not the styling, not the functionality. Basically the skeleton. In the early days of the internet, there was no standardized way of sending information and documents. Internet was mostly used for communication between colleges and universities as well as the military. If I wanted any formatting to happen with my document, I needed to be able to break that down to smaller pieces. Thus, HTML was made to handle it around 1989/1990. Some headers, some things are bolded or important italicized, some bullet points, bigger and smaller text, etc Eventually moved onto more broad uses. Remember myspace? Probably used HTML/CSS to edit your page. Think of HTML as the skelton of your program!","completed":true,"code_module_id":1,"created_at":"2020-05-06T18:07:10.241Z","updated_at":"2020-05-06T18:07:10.241Z","title":"History of HTML","img_src":null},{"id":2,"content":"HTML tags are the hidden keywords within a web page that define how your web browser must format and display the content. HTML tags typically fall into the following format:\n\n    There are hundreds of tags in HTML! You can look to MDN (Mozilla Developer Network) ar W3 Schools to see all of the tags available. Don't feel obligated by any means to memorize these. There are a few that you will use often (div, h1, p, etc.) and some that you will likely never use! At this point, just get familiar with the anatomy of a typical HTML tag.","completed":true,"code_module_id":1,"created_at":"2020-05-06T18:07:10.251Z","updated_at":"2020-05-06T18:07:10.251Z","title":"What is a tag?","img_src":"https://camo.githubusercontent.com/391be322ebc71fef013423d9b4ff55812e79f2ba/68747470733a2f2f692e6962622e636f2f363878664679422f53637265656e2d53686f742d323032302d30342d30362d61742d31302d35342d30392d414d2e706e67"},{"id":3,"content":"In your text editor (Atom of VS Code), if you type HTML and hit tab, the text editor will generate an HTML boiler plate. Let's break down what it is you're looking at in the boiler plate:\n    \n    It is important to understand what each tag in the boiler plate is responsible for! But for now, we will be working inside of the body tag.","completed":true,"code_module_id":1,"created_at":"2020-05-06T18:07:10.261Z","updated_at":"2020-05-06T18:07:10.261Z","title":"HTML Boiler Plate","img_src":"https://camo.githubusercontent.com/6c03627339b71f371fadd857e3858af7759fca24/68747470733a2f2f692e6962622e636f2f486759685733682f53637265656e2d53686f742d323032302d30342d30362d61742d31312d34362d32392d414d2e706e67"},{"id":4,"content":"HTML attributes are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of an HTML element type. For example, an \u003ca\u003e tag defines a hyperlink on your page. Techniaclly, the \u003ca\u003e tag is a complete tag on it's own. However, we need to add an href attribute to tell the hyperlink where we want to go once it's clicked. An entire \u003ca\u003e tag will look something like this:\n\n    \u003ca href='www.google.com'\u003eClick this link to go to Google!\u003c/a\u003e\n    \n    Above, we see the \u003ca\u003e tag, the href attribute inside of the opening tag, a URL defined inside of the href attribute, some text for the user to click on, and a closing \u003c/a\u003e tag! Voila!\n\n    Let's look at another example. An \u003cimg\u003e tag will render an image. But the tag alone cannot do the job, we need to add an attribute! Here, we will add a src attribute which will include the URL of the image we want to render.\n\n        \u003cimg src='www.image_source_goes_here.com'\u003e\n    \n    Notice how the \u003cimg\u003e tag doesn't close? That's because it's a self-closing tag! Since there is no inner HTML in an image, this tag doesn't required a closing tag. To take a deeper dive on inner HTML, make sure you join Jumpstart!\n\n    One more example. A \u003cp\u003e tag represents a paragraph. You can change how the text in your paragraph looks by using a style attribute! The code below will change the font color to blue.\n        \n        \u003cp style='color:blue'\u003eI'm blue da ba dee da ba daa\u003c/p\u003e\n\n    To recap, in all of our examples, the attribute is modifying the HTML element in some way.\n    ","completed":true,"code_module_id":1,"created_at":"2020-05-06T18:07:10.273Z","updated_at":"2020-05-06T18:07:10.273Z","title":"What is an HTML attribute?","img_src":null},{"id":5,"content":"Let's use a \u003ctable\u003e tag to build the table below!","completed":true,"code_module_id":2,"created_at":"2020-05-06T18:07:10.285Z","updated_at":"2020-05-06T18:07:10.285Z","title":"Intro To Tables","img_src":"https://camo.githubusercontent.com/7e2f94fe63c11541611feaca0ad881ac2bf6aecc/68747470733a2f2f692e6962622e636f2f3934366b6431482f53637265656e2d53686f742d323032302d30342d30382d61742d31302d32352d31372d414d2e706e67"},{"id":6,"content":"First, we will need to code opening and closing \u003ctable\u003e tags.\n    \n        \u003ctable\u003e\n        \u003c/table\u003e","completed":false,"code_module_id":2,"created_at":"2020-05-06T18:07:10.296Z","updated_at":"2020-05-06T18:07:10.296Z","title":"The Table Tag","img_src":null},{"id":7,"content":"Next we will need to tell the table how many rows we would like. We do this by nesting \u003ctr\u003e (table row) tags inside of the \u003ctable\u003e tags. The table we hope to make will have three rows.\n\n        \u003ctable\u003e\n          \u003ctr\u003e\u003c/tr\u003e\n          \u003ctr\u003e\u003c/tr\u003e \n          \u003ctr\u003e\u003c/tr\u003e\n        \u003c/table\u003e","completed":true,"code_module_id":2,"created_at":"2020-05-06T18:07:10.305Z","updated_at":"2020-05-06T18:07:10.305Z","title":"Table Rows","img_src":null},{"id":8,"content":"Now we need to tell the table how many columns we will need. We do this my nesting \u003ctd\u003e (table data) tags inside of the \u003ctr\u003e tags. Each \u003ctd\u003e tag represents a cell in the row. We know we want the table to be three cells wide. First things first though, we need to stay organized since our table is getting more complicated! We are going to drop all of the closing \u003c/tr\u003e tags down to a new line before adding in our \u003ctd\u003e's. This will make it very clear to us where exactly each row ends.\n        \n        \u003ctable\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e\u003c/td\u003e\n            \u003ctd\u003e\u003c/td\u003e\n            \u003ctd\u003e\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e\u003c/td\u003e\n            \u003ctd\u003e\u003c/td\u003e\n            \u003ctd\u003e\u003c/td\u003e\n          \u003c/tr\u003e \n          \u003ctr\u003e\n            \u003ctd\u003e\u003c/td\u003e\n            \u003ctd\u003e\u003c/td\u003e\n            \u003ctd\u003e\u003c/td\u003e\n          \u003c/tr\u003e\n        \u003c/table\u003e\n\n    Look how clean that is! Each nested section is indented a single tab over and we can clearly see where all of our elements begin and end!","completed":false,"code_module_id":2,"created_at":"2020-05-06T18:07:10.315Z","updated_at":"2020-05-06T18:07:10.315Z","title":"Adding Cells","img_src":null},{"id":9,"content":"We probably want our table to contain some data right? Let's drop some text inside of the cells in the table.\n\n        \u003ctable\u003e\n        \u003ctr\u003e\n            \u003ctd\u003e1\u003c/td\u003e\n            \u003ctd\u003e2\u003c/td\u003e\n            \u003ctd\u003e3\u003c/td\u003e\n        \u003c/tr\u003e\n        \u003ctr\u003e\n            \u003ctd\u003e4\u003c/td\u003e\n            \u003ctd\u003e5\u003c/td\u003e\n            \u003ctd\u003e6\u003c/td\u003e\n        \u003c/tr\u003e \n        \u003ctr\u003e\n            \u003ctd\u003e7\u003c/td\u003e\n            \u003ctd\u003e8\u003c/td\u003e\n            \u003ctd\u003e9\u003c/td\u003e\n        \u003c/tr\u003e\n        \u003c/table\u003e\n\n    Lastly, we will want to add a border so that we can outline the table and all of it's cells. We do this by adding an attribute to the opening \u003ctable\u003e tag.\n\n        \u003ctable border=1\u003e\n        \u003ctr\u003e\n            \u003ctd\u003e1\u003c/td\u003e\n            \u003ctd\u003e2\u003c/td\u003e\n            \u003ctd\u003e3\u003c/td\u003e\n        \u003c/tr\u003e\n        \u003ctr\u003e\n            \u003ctd\u003e4\u003c/td\u003e\n            \u003ctd\u003e5\u003c/td\u003e\n            \u003ctd\u003e6\u003c/td\u003e\n        \u003c/tr\u003e \n        \u003ctr\u003e\n            \u003ctd\u003e7\u003c/td\u003e\n            \u003ctd\u003e8\u003c/td\u003e\n            \u003ctd\u003e9\u003c/td\u003e\n        \u003c/tr\u003e\n        \u003c/table\u003e","completed":false,"code_module_id":2,"created_at":"2020-05-06T18:07:10.324Z","updated_at":"2020-05-06T18:07:10.324Z","title":"Adding Data","img_src":null},{"id":10,"content":"Great work! Practice coding out the HTML table below:","completed":false,"code_module_id":2,"created_at":"2020-05-06T18:07:10.335Z","updated_at":"2020-05-06T18:07:10.335Z","title":"Practice Time With Tables!","img_src":"https://camo.githubusercontent.com/408a38b72849652bae524ac29f7d743d016bae24/68747470733a2f2f692e6962622e636f2f746d306b644a642f53637265656e2d53686f742d323032302d30342d30382d61742d31302d34342d33312d414d2e706e67"},{"id":11,"content":"Let's talk about listing items! In HTML, there are two ways to write a list.\n\n    There can be ordered (numbered) lists:","completed":false,"code_module_id":3,"created_at":"2020-05-06T18:07:10.347Z","updated_at":"2020-05-06T18:07:10.347Z","title":"Ordered Lists","img_src":"https://camo.githubusercontent.com/3e2b6d58ec0f617feda92721d3d35f186aecbac6/68747470733a2f2f692e6962622e636f2f537448667250322f53637265656e2d53686f742d323032302d30342d30392d61742d31302d33302d34362d414d2e706e67"},{"id":12,"content":"Or unordered (bullet-point) lists:","completed":false,"code_module_id":3,"created_at":"2020-05-06T18:07:10.357Z","updated_at":"2020-05-06T18:07:10.357Z","title":"Unordered List","img_src":"https://camo.githubusercontent.com/e98556a8606b91962c7fe139d22daee7a21c518c/68747470733a2f2f692e6962622e636f2f466d47464d39352f53637265656e2d53686f742d323032302d30342d30392d61742d31302d33302d35382d414d2e706e67"},{"id":13,"content":"Let's walk through the process. Say we want to create a seating list for a party at our restaurant. We have 2 tables, and we want to have 3 people at every table.\n\n    First, we know we want an ordered list for all of the tables. We start an ordered list with the \u003col\u003e tag:\n\n        \u003col\u003e\n        \u003c/ol\u003e\n\n    Now we need to add the tables to our list. We create list items with the \u003cli\u003e tag.\n\n        \u003col\u003e\n            \u003cli\u003e\u003c/li\u003e\n            \u003cli\u003e\u003c/li\u003e\n        \u003c/ol\u003e\n\n    At this point, our table has no data. We will want to add our table names:\n        \n        \u003col\u003e\n            \u003cli\u003ePatio\u003c/li\u003e\n            \u003cli\u003eDining Room\u003c/li\u003e\n        \u003c/ol\u003e\n\n    Our list is starting to take shape!","completed":false,"code_module_id":3,"created_at":"2020-05-06T18:07:10.367Z","updated_at":"2020-05-06T18:07:10.367Z","title":"Adding List Items (Table Data)","img_src":"https://camo.githubusercontent.com/f50bc64e157588e4568b750de97cf1f598127b7a/68747470733a2f2f692e6962622e636f2f67746d5a3162322f53637265656e2d53686f742d323032302d30342d30392d61742d31302d34332d35382d414d2e706e67"},{"id":14,"content":"Now it's time to assign guests to tables. We can do that by nesting a unordered lists inside of out ordered lists. We will start by dropping the closing \u003c/li\u003e tags down to the next line to make room for our nested list. Like in the Tables Module, we want our code to be very organized and clean.\n\n        \u003col\u003e\n          \u003cli\u003ePatio\n          \u003c/li\u003e\n          \u003cli\u003eDining Room\n          \u003c/li\u003e\n        \u003c/ol\u003e\n\n    Between our opening and closing \u003cli\u003e tags, we are going to start new unordered lists. We already know that each table will have three guests. We can go ahead and add three \u003cli\u003e's (list items) inside of each \u003cul\u003e (unordered list):\n\n        \u003col\u003e\n          \u003cli\u003ePatio\n            \u003cul\u003e\n              \u003cli\u003e\u003c/li\u003e\n              \u003cli\u003e\u003c/li\u003e\n              \u003cli\u003e\u003c/li\u003e\n            \u003c/ul\u003e\n          \u003c/li\u003e\n          \u003cli\u003eDining Room\n            \u003cul\u003e\n              \u003cli\u003e\u003c/li\u003e\n              \u003cli\u003e\u003c/li\u003e\n              \u003cli\u003e\u003c/li\u003e\n            \u003c/ul\u003e\n          \u003c/li\u003e\n        \u003c/ol\u003e\n\n    Looking good!","completed":false,"code_module_id":3,"created_at":"2020-05-06T18:07:10.404Z","updated_at":"2020-05-06T18:07:10.404Z","title":"Nesting Unordered List","img_src":"https://camo.githubusercontent.com/56953c64e651591f50f0fb446598ef6f254f0a9f/68747470733a2f2f692e6962622e636f2f307456717934582f53637265656e2d53686f742d323032302d30342d30392d61742d31302d35312d31362d414d2e706e67"},{"id":15,"content":"Finally, we can add the guests' names to each \u003cli\u003e within the \u003cul\u003e's:\n\n        \u003col\u003e\n            \u003cli\u003ePatio\n                \u003cul\u003e\n                    \u003cli\u003eJose\u003c/li\u003e\n                    \u003cli\u003eGina\u003c/li\u003e\n                    \u003cli\u003eBlanca\u003c/li\u003e\n                \u003c/ul\u003e\n            \u003c/li\u003e\n            \u003cli\u003eDining Room\n                \u003cul\u003e\n                    \u003cli\u003eHeather\u003c/li\u003e\n                    \u003cli\u003eSean\u003c/li\u003e\n                    \u003cli\u003eMacy\u003c/li\u003e\n                \u003c/ul\u003e\n            \u003c/li\u003e\n        \u003c/ol\u003e\n\n    Woo! That's a good lookin' list!","completed":false,"code_module_id":3,"created_at":"2020-05-06T18:07:10.420Z","updated_at":"2020-05-06T18:07:10.420Z","title":"Adding List Items Part 2","img_src":"https://camo.githubusercontent.com/3be7a620cab2e641428b54d2855b55794d64ae09/68747470733a2f2f692e6962622e636f2f376a76304672792f53637265656e2d53686f742d323032302d30342d30392d61742d31302d35332d32312d414d2e706e67"},{"id":16,"content":"Now you try!","completed":false,"code_module_id":3,"created_at":"2020-05-06T18:07:10.429Z","updated_at":"2020-05-06T18:07:10.429Z","title":"Practice Time With Tables Part 2!","img_src":null}]
    
    const questions = [{
      id: 1, content: ['belongs to first question lesson 1', 'Answer 1', 'Answer 2', 'Answer 3'], answer: 'Answer 2', correct: false, multiple_choice :true, completed: true, lesson_id: 1,
    }, {
      id: 2, content: ['belongs to second question lesson 1', 'I learned about HTML', 'I learned nothing, I want my money back', 'I give up'], answer: 'I learned about HTML', correct: true, completed: true, lesson_id: 1,
    }, {
      id: 3, content: ['Belongs to first question lesson 2', 'I learned about HTML', 'I learned nothing, I want my money back', 'I give up'], answer: 'I learned about HTML', correct: true, completed: true, lesson_id: 2,
    }, {
      id: 4, content: ['Belongs to second question lesson 2', 'I learned about HTML', 'I learned nothing, I want my money back', 'I give up'], answer: 'I learned about HTML', correct: true, completed: true, lesson_id: 2,
    }];
    
    const resources = [{
      id: 1, name: 'HTML Tags', link: 'https://www.w3schools.com/tags/tag_html.asp', question_id: 1,
    }, {
      id: 2, name: 'A Tag', link: 'https://www.w3schools.com/tags/tag_a.asp', question_id: 1,
    }, {
      id: 3, name: 'UL tag', link: 'https://www.w3schools.com/tags/tag_ul.asp', question_id: 2,
    }, {
      id: 4, name: 'CSS containers', link: 'https://www.w3schools.com/w3css/w3css_containers.asp', question_id: 2,
    }, {
      id: 5, name: 'CSS Borders ', link: 'https://www.w3schools.com/w3css/w3css_borders.asp', question_id: 3,
    }, {
      id: 6, name: 'HTML Tags', link: 'https://www.w3schools.com/tags/tag_html.asp', question_id: 3,
    }, {
      id: 7, name: 'HTML Tags', link: 'https://www.w3schools.com/tags/tag_html.asp', question_id: 4,
    }];
  
  const loggedIn = true;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* Show branding and signed in user */}
      <Header />
      {/* show home page */}
      <Container>
        <Home modules={modules} lessons={lessons} loggedIn={loggedIn} questions={questions} resources={resources} topics = {topics}/>
        {/* Displays Footer */}
      </Container>
    </>
  );
  }
}
export default App;
