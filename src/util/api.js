export default {
  async getTopics(){
    let response = await fetch('/topics');
    let data = await response.json();
    if (response.status === 200) {
    this.setState({topics:data})
  }
  },
  async getModules(){
    let response = await fetch('/code_modules');
    let data = await response.json();
    if (response.status === 200) {
      this.setState({modules:data})
    }
  },
  async getLessons(){
    let response = await fetch('/lessons')
    let data = await response.json();
    if (response.status === 200) {
      this.setState({lessons:data})
    }
  },
  async getQuestions(){
    let response = await fetch('/questions')
    let data = await response.json();
    if (response.status === 200) {
      this.setState({questions:data}
      )
    }
  },
  async getResources(){
    let response = await fetch('/resources')
    let data = await response.json();
    if (response.status === 200) {
      this.setState({resources:data})
    }
  }
}