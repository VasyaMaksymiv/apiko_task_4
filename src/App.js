import React, { Component } from 'react'
import MoreButton from './component/MoreButton'
import PostList from "./component/PostList"
import PostListItem from "./component/PostListItem"
import FormSearch from './component/FormSearch'
import './App.css'
import data from './data'

class App extends Component {
  
  state = { count: 10, searchTitle: '' , posts: data }
  
  handleCount=()=>{ this.setState({count: this.state.count + 10}) }

  handleChange = (event) =>{
    const searcQueyr = event.target.value.toLowerCase();  
    const posts = data.filter(function(el){
      const searchvalue = el.title.toLowerCase();
      return searchvalue.indexOf(searcQueyr) !== -1;
    })
    this.setState({ posts: posts })
  }
  
  showPost=()=>{
    let L 
    if(this.state.posts.length !== 0){
      L = this.state.posts.map((post, index) => (index < this.state.count) 
    ? (<PostListItem
       key={post.id} 
       title={post.title} 
       body={post.body}/>) : '' )
    return L; 
          }else{
     return L = <h3 className='NoPost' >No post found</h3>;
    }
  }

  render() {
    
    return (
      <React.Fragment>
        <FormSearch onChange={this.handleChange} />
        <PostList post={this.showPost} />
    {this.state.count < this.state.posts.length ? <MoreButton onClick={this.handleCount} /> : '' } 
      </React.Fragment>
    )
  }
}

export default App