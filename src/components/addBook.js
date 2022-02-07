import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewBook } from '../api';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

const initialState = {
    title: '',
    author: '',
    price: '',
    genre: ''
}
const AddBook = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBook(formData, navigate)
        handleReset()
    }
    const handleReset = () => {
        setFormData(initialState)
    }
    return (
        <div style={{ width: "50ch", margin: "0 auto", padding: "30px 20px", marginTop: 20, background: "#f7f7f7", borderRadius: 10 }}>
            <Typography variant='h5' >Add New Book</Typography>
            <form onSubmit={handleSubmit}>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                >
                    <TextField id="outlined-basic" label="Title" variant="standard" placeholder='Enter book name' name="title" onChange={onChange} value={formData.title} required />
                    <TextField id="filled-basic" label="Author Name" variant="standard" placeholder='Enter author name' name="author" onChange={onChange} value={formData.author} required />
                    <TextField id="standard-basic" label="Price" variant="standard" placeholder='Enter price' name='price' onChange={onChange} value={formData.price} required />
                    <TextField label="Genre" variant="standard" placeholder='Enter Category' name='genre' onChange={onChange} value={formData.genre} required />
                </Box>
                <Button variant='contained' type='submit' style={{ marginRight: 5 }}>Add Book</Button>
                <Button variant='outlined' type='reset' onClick={handleReset}>Reset</Button>
            </form>

        </div>
    )
}

export default AddBook;