import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import 'bootstrap/dist/css/bootstrap.min.css'
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { "firstName": "Irfan", "lastName": "H", "Address": "Hombalagatti" },
                { "firstName": "Imran", "lastName": "H", "Address": "Karnataka" },
                { "firstName": "Anand", "lastName": "Kumar", "Address": "Kushtgi" },
                { "firstName": "Darshan", "lastName": "S", "Address": "Hospete" }],

            student: {},
            updateFlag: false,
            search: ""
        };

    }

    handleRemove = (index) => {
        let newstate = this.state.students.filter((student, ind) => {
            return ind !== index;
        })

        this.setState({ students: newstate })
    }

    handleEdit = (index) => {
        let student = this.state.students.slice(index, index + 1)
        console.log(student[0]);

        let newstate = this.state.students.filter((student, ind) => {
            return ind !== index;
        });

        this.setState({ student: student[0], students: newstate, updateFlag: true })


    }

    addStudent = (student) => {
        console.log("received object", student)
        let newState = [...this.state.students, student]
        this.setState({ students: newState, updateFlag: false })


    }

    SearchItem = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state.search)
    }


    render() {
        console.log(this.state.student)
        return (
            <div>
                <h1>New Member </h1>

                <input type="search" name='search'
                    placeholder=' Search...'
                    className=' ml-30px'
                    value={this.state.search}
                    onChange={this.SearchItem}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>FIRST NAME</TableCell>
                                <TableCell align="right">LAST NAME</TableCell>
                                <TableCell align="right">ADDRESS</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.students.filter((value) => {
                                    if (this.state.search === "") {
                                        return value
                                    }
                                    else if (value.firstName.toLowerCase()
                                        .includes(this.state.search
                                            .toLowerCase())) {
                                        return value
                                    }
                                }).map((student, ind) => {

                                    return <TableRow key={ind}>
                                        <TableCell component="th" scope="row">{student.firstName}</TableCell>
                                        <TableCell align="right">{student.lastName}</TableCell>
                                        <TableCell align="right">{student.Address}</TableCell>
                                        <TableCell align="right"><button onClick={() => { this.handleEdit(ind) }} className='btn btn-info'>edit</button></TableCell>
                                        <TableCell align="right"><button onClick={() => { this.handleRemove(ind) }} className='btn btn-danger'>Delete</button></TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {this.state.updateFlag ? (<UpdateStudent student={this.state.student} addStudent={this.addStudent} />) : (<AddStudent addStudent={this.addStudent} />)
                }
            </div>
        );
    }
}

export default StudentList;