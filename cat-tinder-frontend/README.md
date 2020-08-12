# Cat Tinder Frontend

$ yarn create react-app cat-tinder-frontend
$ yarn add react-router-dom


Router

Pages:
- Landing page/Home
- Index
- Show
- New
- Edit

Components:
- Header - from Reactstrap
Imported to Home
Behind the scenes a <Link> (or NavLink) renders an <a> with a real href
- Footer

Reactstrap
Reactstrap is Bootstrap for React components
$ yarn add react (?)
$ yarn add react-dom (?)
$ yarn add reactstrap

Since Reactstrap is a library, it does not contain the actual Bootstrap library itself, so below is how to install Bootstrap which is needed for Reactstrap to work properly
$ yarn add bootstrap

Add to src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'


Mock data
- cats



<Route
  exact path={'/catshow/:id'}
  render={ (props) => <CatShow {...props} cats={ this.state.cats } /> }
/>



 const id = this.props.id - 1
 const cat = this.state.cats[id]


 editCat = (editcat) => {
   // logging the editcat object to endure it has been updated
   console.log(editcat)
 }
