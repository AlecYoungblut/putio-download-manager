import React from 'react'

const Files = ({ files }) => {
    return (
        <div>
            <center><h1>File List</h1></center>
            {files.map((file) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{file.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{file.size}</h6>
                        <p class="card-text">{file.content_type}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Files