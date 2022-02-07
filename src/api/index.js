export const getAllBooks = async () => {
    return await (await fetch('https://music-vikas62081-app.herokuapp.com/api/books')).json()
}

export const addNewBook = async (book, navigate) => {
    return await fetch('https://music-vikas62081-app.herokuapp.com/api/books', {
        method: "POST",
        body: JSON.stringify(book),
        headers: { "Content-Type": "application/json" }
    }).then(resp => resp.json()).then(resp => {
        navigate('/')
        alert("New Book added successfully :)")
    }).catch(err => alert(`Something went wrong ${err}`))
}