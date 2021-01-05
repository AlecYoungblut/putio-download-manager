import React, { useState } from 'react';

const Files = ({ files }) => {

    const [filesToDownload, setFilesToDownload] = useState([{ id: "" }]);
    const [checked, setChecked] = useState(false);

    function handleCheck(fileId) {
        console.log("TEST #1");
        if (!checked) {
            console.log("TEST #2");
            setChecked(true);
            setFilesToDownload([
                ...filesToDownload,
                {
                    id: fileId
                }
            ]);
            console.log(filesToDownload);
        }
        else {
            console.log("TEST #3");
            setChecked(false);
            setFilesToDownload([
                //filesToDownload.filter(file => file.id.includes(fileId))
                filesToDownload.splice(filesToDownload.indexOf(fileId), 1)
            ]);
            console.log(filesToDownload);
        }
    }


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
                console.log(data);
                var win = window.open(data, '_blank');
                win.focus();
            })
            .catch(console.log)
    }


    return (
        <div>
            <center><h1>File List</h1></center>
            {filesToDownload.map((file) => (
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">Id: {file.id}</h6>
                    </div>
                </div>
            ))}
            {files.map((file) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" onClick={() => getDownloadURL(file.url)}>{file.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Id: {file.id} Size: {file.size}</h6>
                        <p class="card-text">{file.content_type}</p>
                        <p class="card-text">
                            <input type="checkbox" className={`checkbox-${file.id}`} onChange={() => handleCheck(file.id)} defaultChecked={checked} />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Files