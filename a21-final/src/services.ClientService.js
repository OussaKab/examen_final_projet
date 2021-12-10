const request_conf = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export async function getHommes(){
    return await fetch('http://localhost:8080/clients/hommes', request_conf)
        .then(response => response.json())
}

export async function getAll() {
    return await fetch('http://localhost:8080/clients', request_conf)
        .then(response => response.json())
}

export async function getOntariens() {
    return await fetch('http://localhost:8080/clients/ontariens', request_conf)
        .then(response => response.json())
}
