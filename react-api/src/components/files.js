import React, { useState } from 'react';

const Files = ({ files }) => {

    const [filesToDownload, setFilesToDownload] = useState([{ id: "" }]);
    const [checked, setChecked] = useState(false);
    const [directoryFiles, setDirectoryFiles] = useState([]);

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
        //https://api.put.io/v2/files/690563972/url
        fetch('https://api.put.io/v2/files/' + file + '/url', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer UFFX2DMM7B2OJJCTQKFZ',
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then((data) => {
                var win = window.open(data.url);
                win.focus();
            })
            .catch(console.log)
    }

    function getFilesList(folder) {
        if (directoryFiles && directoryFiles.length > 0) {
            setDirectoryFiles([]);
        }
        else {
            fetch('https://api.put.io/v2/files/list?parent_id=' + folder + '&sort_by=NAME_ASC&file_type=AUDIO,VIDEO,FOLDER', {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer UFFX2DMM7B2OJJCTQKFZ',
                    'Content-Type': 'application/json'
                })
            })
                .then(res => res.json())
                .then((data) => {
                    setDirectoryFiles(data.files);
                })
                .catch(console.log)
        }

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
                        <h5 class="card-title" onClick={() => getFilesList(file.id)}>
                            {file.name}
                        </h5>
                        {/* <h6 class="card-subtitle mb-2 text-muted">Id: {file.id} Size: {file.size}</h6>
                        <p class="card-text">{file.content_type}</p>
                        <p class="card-text">

                        </p> */}
                        {/* setDirectoryFiles */}

                        {directoryFiles.map((subfile) => {
                            if (file.id === subfile.parent_id) {
                                return (
                                    <div class="card-body">
                                        <h5 class="card-title" onClick={() => getDownloadURL(subfile.id)}>
                                            {subfile.name}
                                        </h5>
                                    </div>
                                )
                            }

                        })}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Files