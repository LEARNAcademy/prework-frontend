# Cat Tinder Intro
- Show the flow here, but some of this I prebuilt in order to move through the demo a bit quicker

$ yarn create react-app cat-tinder-frontend

- Delete boilerplate
- Setup all files structure - assets, component, pages
- component: header, footer
- pages: home, catindex, catshow, catnew, catedit, notfound

- Import all files to App.js
- Add basic content to pages, import header and footer
```
import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class CatEdit extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <h2>Edit Cat</h2>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatEdit
```
- Create a mockCats.js file in src
- Import mock data to App and set it to state
```
let cats = [
  {
    id: 1,
    name: "Mittens",
    age: 5,
    enjoys: "sunshine and warm spots"
  },
  {
    id: 2,
    name: "Raisins",
    age: 4,
    enjoys: "scaring the dogs"
  },
  {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention"
  }
]
export default cats
```

- Add photos for home page to assets file
- Add content to home page
```
import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import toast from '../assets/toast.png'
import raisins from '../assets/raisins.png'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <div id="home-body">
          <img src={ toast } alt="Close up of a cat nose" className="cat"/>
          <img src={ raisins } alt="Close up of a cat nose" className="cat"/>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home
```
- Add stylings, copy and paste for easy of flow
- Note: flexbox, className vs id
```
#footer{
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  position: sticky;
}

#home-body{
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 5rem;
}

.cat{
  height: 15rem;
  border: 2px solid black;
}
```


- Import react router dom
- React-router is a third part package that allows you to route to different pages
First we need to add the necessary packages to our application using a yarn command. This adds the react-router to the *package.json* file. We are specifying the react-router-dom version for web application development. React also offers a router for native development so it is important to specify.

- Set basic routes to all pages
- Router / Switch / Route
<Router></Router> is a component that comes from react-router-dom, you only have one Router per application
<Switch></Switch> is a component that helps us properly manage the routes being created
<Route /> is a component that gets passed at least 2 props - a path and an component


<Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively, meaning you could have more than one route match at a time which could be pretty odd.


- Show and edit will require params


#### No Match (404)
When creating applications, it is important to think about the "unhappy path." If something goes wrong with our application either from user error or from a code issue, we still want to ensure our user sees something. We can create an error page using Switch through a default route that always matches last. This can be like the `else` statement of our routes. By creating a Route that has no path the route will match when the user goes to an URL that is not found.
