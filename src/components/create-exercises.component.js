import React,{Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class CreateExersice extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            description: '',
            duration:'',
            date: new Date(),
            users:[]

        

        }
    }

    componentDidMount(){

        // this.setState({
        //     users : ['ashfaqe'],
        //     username : 'ashfaqe'
        // });
    
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users : response.data.map(user=> user.username),
                        username : response.data[0].username
                        
                    });

                    
                }
            }
               )
       
    }

    

    onChangeUsername(e){
        console.log(this.username);
        this.setState({
            username:e.target.value
        });
    }

    onChangeDescription(event){
        this.setState({
            description:event.target.value
        });
    }

    oncChangeDuration(e){
        this.setState({
            duration:e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date:date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date,
        }

        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise)
        .then(res=> console.log(res.data));
       // window.location="/" ;
    }

   

    


    render(){
        return(
            <div>
                <h3>create exercise</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Username :</label>
                        <select useref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername.bind(this)}>
                                {
                                    this.state.users.map(function(user){
                                        return <option
                                            key={user}
                                            value={user}>
                                                {user}
                                            </option>;
                                    })
                                }
                            </select>

                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <input type="text"
                         required
                         className="form-control"
                         value={this.state.description  }
                         onChange={this.onChangeDescription.bind(this) }
                         />
                    </div> 

                     <div className="form-group">
                        <label>Duration :</label>
                        <input type="text"
                         required
                         className="form-control"
                         value={this.state.duration}
                         onChange={this.oncChangeDuration.bind(this) }
                         />
                    </div> 

                     <div className="form-group">
                        <label>Date :</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate.bind(this)}/>
                        </div>
                        {/* <input type="text"
                         required
                         className="form-control"
                         value={this.state.date}
                         onChange={this.onChangeDate }
                         /> */}
                    </div> 
             
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log"
                            className="btn btn-primary"/>
                    </div>  
                </form>


            </div>
        )
    }
}