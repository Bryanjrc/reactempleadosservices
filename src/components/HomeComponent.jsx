import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class HomeComponent extends Component {

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let url = Global.urlApiEmpleados
        let request = "api/empleados";

        axios.get(url + request).then((response) => {
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Home Component</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.empleados.map((emp, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{emp.idEmpleado}</td>
                                        <td>{emp.apellido}</td>
                                        <td>{emp.oficio}</td>
                                        <td>{emp.salario}</td>
                                        <td>{emp.departamento}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
