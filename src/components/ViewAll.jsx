import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [todos,changeTodos] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (Response)=>{
               console.log(Response.data)
               changeTodos(Response.data)
            }
        ).catch().finally()
        
   
    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">title</th>
                                    <th scope="col">Id</th>
                                    
                                    <th scope="col">User Id</th>
                                </tr>
                            </thead>
                            <tbody>

                            {todos.map(
                                (todo,index)  => {
                            return <tr>
                                    <th scope="row">{todo.title}</th>
                                    
                                    <td>{todo.id}</td>
                                    
                                    <td>{todo.userId}</td>
                                </tr>


                            
                         
                        }
                    )}
                      </tbody>



                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll