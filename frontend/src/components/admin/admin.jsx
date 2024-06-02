import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [file, setFile] = useState(null);

    const upload = () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        // Debugging: Log the FormData content

        axios.post('http://localhost:8000/api/upload/', formData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error("Error uploading file:", err);
            });
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={upload}>Upload</button>
        </div>
    );
};

export default Admin;
