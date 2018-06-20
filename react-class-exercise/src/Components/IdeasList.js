import React, {Component} from 'react'
import Idea from './Idea'
import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'


class IdeasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [
      ]
    }
    this.eachIdea   = this.eachIdea.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this)
    this.nextID     = this.nextID.bind(this)
  }

  add(txt,grp) {
    this.setState(prevState => ({
      ideas: [
      ...prevState.ideas,
      {
          id: this.nextID(),
          idea: txt,
          group:grp
      }]
    }))
  }
  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }
// its like onLoad, componentWillMount =save name
// add component
  // componentWillMount() {
  //     var self=this
  //     data.map((idea) => {
  //         self.add(idea.idea, idea.group)
  //     })
  // }

// NEW CODE:
 componentDidMount() {      
  const url = "http://localhost:3000/final-ideas/getAllIdeas";

  fetch(url).then((res) => {        
    return res.json();      
  }).then((data) => {        
    var self=this;        
    data.map((data) => {            
      console.log('idea')            
      self.add(data.idea, data.group);        
    })      
  })  
}

//  componentDidMount() {      
//   const url = "https://books-ranking.herokuapp.com/books";

//   fetch(url).then((res) => {        
//     return res.json();      
//   }).then((data) => {        
//     var self=this;        
//     data.map((data) => {            
//       console.log('idea')            
//       self.add(data.name, data.rank);        
//     })      
//   })  
// }


  update(newIdea, i) {
    this.setState(() => ({
      ideas: this.state.ideas.map(
        (idea) => (idea.id !== i) ? idea : {...idea, idea: newIdea}
      )
    }))
  }    

  delete(id) {
      //finish yourself- this should be called by onDelete
  }

  eachIdea (idea,i) {
    return (          
      <div key={'container'+i}className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <Idea key={'idea'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{idea.idea}</h5>
            <p className="card-text">{idea.group}</p>
          </Idea>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="ideaList">
          {this.state.ideas.map(this.eachIdea)}
          <button id="add" className="btn btn-primary" style={{marginTop:7+'px'}}>
             <MdAdd/></button>
        </div>
      )
  }
}
export default IdeasList
