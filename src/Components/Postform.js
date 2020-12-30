import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Postform extends Component {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            title : '',
            body : ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e)
    {
       this.setState({[e.target.name ]: e.target.value});
    }


   onSubmit(e)
   {
    e.preventDefault();
   
    const post = {
        title : this.state.title,
        body : this.state.body
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts' ,{
     method : 'POST' ,
     headers : {
         'content-type' : 'application/json'
     },
     body : JSON.stringify(post)
    })
    .then(resultat => resultat.json())
    .then(data => console.log(data));
   }

    
    render() {
        return (
            
            <div>
                
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                      
                      <div className="form-group">
                      
                      <label >Post</label>
                      <input type="text" className="form-control" id="pst" name="title" onChange={this.onChange} 
                      value={this.state.title}/>
                      </div>

                      <div className="form-group">
                      <label >Post</label>
                      <textarea className="form-control" name="body" onChange={this.onChange} 
                      value={this.state.body}></textarea>
                      </div>
                      
                      <button className="btn btn-primary centered"  type="submit" >Send</button>
                </form>              
                
                    
                
            </div>
        );
    }
}

export default Postform;