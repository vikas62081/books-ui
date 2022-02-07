import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { getAllBooks } from '../api';

const BookList = () => {
    const [books, setBooks] = useState(null)
    useEffect(async () => {
        setBooks(await getAllBooks())
    }, [])

    const columns = [
        { headerName: "Title", field: 'title' },
        { headerName: "Author", field: 'author', },
        { headerName: "Price", field: 'price' },
        { headerName: "Genre", field: 'genre' },
    ]
    const defaultColDDefs = { flex: 1, sortable: true, filter: true, floatingFilter: true }

    return (
        <div className="ag-theme-alpine" style={{ height: 400 }}>
            <AgGridReact columnDefs={columns} rowData={books} defaultColDef={defaultColDDefs}
                pagination={true} paginationPageSize={6} />
        </div>
    );
};

export default BookList;
