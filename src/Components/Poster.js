import React, { Component } from 'react';

class Poster extends Component {
  
	constructor(props)
	{
		super(props);
		this.state = 
		{
             posts  : []
		}
	}

 
	// ComponentWill isn't safe 

	componentWillMount()
	{
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res=>res.json())
		.then(resultat=>this.setState({posts : resultat}))
		
	}
	
	
	render() {

	   const items = this.state.posts.map(post=>(
		   <div key={post.id}>
			   <h3>
				   {post.id}{')                     '}
				   {post.title}
			   </h3>
			   <p>
				   {post.body}
			   </p>
		   </div>
	   ));

		return (
			<div>
				<h1>Halliche</h1>
				{items}
			</div>
		);
	}
}

export default Poster;