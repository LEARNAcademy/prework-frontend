import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component{
  constructor(props){
    super(props)
    // small amount of state to manage the form
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      },
      success: false
    }
  }

  handleSubmit = (event) => {
    // keeps react from refreshing the page unnessarily
    event.preventDefault()
    // a function call being passed from Cat.js
    this.props.createNewCat(this.state.form)
    // after the form is sent reset the state to an empty form
    this.setState({ success: true })
  }

  handleChange = (event) => {
    // destructuring form out of state
    let { form } = this.state
    form[event.target.name] = event.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <h2>Add a Cat</h2>
        <Form id="form">
          <FormGroup>
            <Label htmlFor="name" id="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age" id="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            id="submit"
            onClick={ this.handleSubmit }
          >
            Create a New Profile
          </Button>
        </Form>
        <Footer />
        { this.state.success && <Redirect to="/catindex" />}
      </React.Fragment>
    )
  }
}
export default CatNew
