import './App.css';
import {useEffect, useState} from "react";
import {getAll, getHommes, getOntariens} from "./services.ClientService";

function App(){

    const [clients, setClients] = useState([]);

    useEffect(() => getAll().then(clients => setClients(clients)), []);

    return (
        <div className='container my-4'>
        <div className='d-flex align-items-center justify-content-around text-white'>
            <button className='btn btn-success' onClick={() => getAll().then(data => setClients(prev => data))}>Fetch tout les clients</button>
            <button className='btn btn-primary' onClick={() => getHommes().then(data => setClients(prev => data))}>Fetch hommes</button>
            <button className='btn btn-info'  onClick={() => getOntariens().then(data => setClients(data))}>Fetch Fetch ontariens</button>
        </div>

        <table className='table table-responsive table-striped table-bordered mt-3'>
            <thead className='table-dark'>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>City</th>
                <th>Province</th>
                <th>BirthDate</th>

            </tr>
            </thead>
            <tbody>
                {clients.map((client, index) =>
                    <tr key={index}>
                        <td>{client.id}</td>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.gender}</td>
                        <td>{client.city}</td>
                        <td>{client.province}</td>
                        <td>{client.birthDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
            </div>
    );
}

export default App;
