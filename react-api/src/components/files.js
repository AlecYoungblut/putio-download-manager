import React from 'react'

const Files = ({ files }) => {
    function getDownloadURL(file) {
        fetch('https://api.put.io/v2/files/' + file.id + '/url', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer UFFX2DMM7B2OJJCTQKFZ',
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.url);
                var win = window.open(data.url, '_blank');
                win.focus();
            })
            .catch(console.log)
    }


    return (
        <div>
            <center><h1>File List</h1></center>
            {files.map((file) => (
                <div class="card" onClick={() => getDownloadURL(file)}>
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