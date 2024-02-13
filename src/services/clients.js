export const fetchData = async (method, url, body) =>{
    try {
        const fetchUrl = `http://127.0.0.1:8000${url}`
        const response = await fetch(fetchUrl, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('accessToken')
            },
            body: JSON.stringify(body)
        })
        
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

