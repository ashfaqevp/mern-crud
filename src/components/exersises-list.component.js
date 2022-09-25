import React,{Component} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import DataTable from "./datatable.component";



const Exercise = props => {
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to = {"/edit/" + props.exercise._id} > edit</Link> │ 
            
             { <a href="#" onClick={ ()=> {props.deleteExercise(props.exercise._id)}}> delete</a>  }
        </td>
       
    </tr>
       
    
}

export default class ExersisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.state ={
            exercises:[]
                // {
                //     "_id": "632d5f5dfa33d805294a336e",
                //     "username": "misna",
                //     "description": "pull app",
                //     "duration": 1,
                //     "date": "2022-09-23T07:25:17.000Z",
                //     "createdAt": "2022-09-23T07:25:17.489Z",
                //     "updatedAt": "2022-09-23T07:25:17.489Z",
                //     "__v": 0
                // },
                // {
                //     "_id": "633096fa5b547ad3df1456f5",
                //     "username": "ashfaqe",
                //     "description": "sklak zkj",
                //     "duration": 5,
                //     "date": "2022-09-25T17:59:22.000Z",
                //     "createdAt": "2022-09-25T17:59:22.390Z",
                //     "updatedAt": "2022-09-25T17:59:22.390Z",
                //     "__v": 0
                // },
                // {
                //     "_id": "6330971c5b547ad3df1456fa",
                //     "username": "ashfaqe",
                //     "description": "skjsjk",
                //     "duration": 55,
                //     "date": "2022-09-25T17:59:56.000Z",
                //     "createdAt": "2022-09-25T17:59:56.441Z",
                //     "updatedAt": "2022-09-25T17:59:56.441Z",
                //     "__v": 0
                // },
                // {
                //     "_id": "6330972b5b547ad3df1456fc",
                //     "username": "ashfaqe",
                //     "description": "skjs",
                //     "duration": 45,
                //     "date": "2022-09-25T18:00:11.000Z",
                //     "createdAt": "2022-09-25T18:00:11.326Z",
                //     "updatedAt": "2022-09-25T18:00:11.326Z",
                //     "__v": 0
                // },
                // {
                //     "_id": "63309b895b547ad3df145735",
                //     "username": "misna",
                //     "description": "s",
                //     "duration": 25,
                //     "date": "2022-09-25T18:18:49.000Z",
                //     "createdAt": "2022-09-25T18:18:49.634Z",
                //     "updatedAt": "2022-09-25T18:18:49.634Z",
                //     "__v": 0
                // },
                // {
                //     "_id": "63309e965b547ad3df145763",
                //     "username": "ashfaqe",
                //     "description": "cooooling",
                //     "duration": 25,
                //     "date": "2022-09-25T18:31:50.000Z",
                //     "createdAt": "2022-09-25T18:31:50.320Z",
                //     "updatedAt": "2022-09-25T18:31:50.320Z",
                //     "__v": 0
                // }
           // ]
        };

     //   console.log()
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
                .then(response => {
                    this.setState({
                        exersises : response.data
                    })

                    console.log(response.data[3])
                        
                    })
                    .catch((error) => {
                        console.log(error);
                    })
         }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(respose => console.log(respose.data));

        this.setState({
            exercises : this.state.exercises.filter(el => el._id !== id)
        })
    }     

    exerciseList(){
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise ={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>
        })
    }



    // dataTable() {
    //     return this.state.exercises.map((data, i) => {
    //         return <DataTable obj={data} key={i} />;
    //     });
    // }




    render(){
        return(
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        );
    }
}