import React, { Component } from 'react';




class Poster extends Component {

constructor(props)
{
    super(props);
    this.state = {
     posts: []
    };
}

    Component_mount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {res.json()
        console.log(res)})
        .then(data=> {this.setState({posts : data})
    console.log(data);
console.log('mo')});
    }
    
    render() {
        const items = this.state.posts.map(item=>(
            <div key={item.id}>
                <h3>
                    {item.title}
                </h3>
                <p>
                    {item.body}
                </p>
            </div>
        ));
        return (
            <div>
              <h1>Halliche</h1> 
              {items} 
              {this.state.posts[0]}
            </div>
        );
    }
}

export default Poster;