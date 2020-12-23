import React, { useState } from 'react';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);

    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);

        formData.append('name', info.name);

        formData.append('email', info.email);

        fetch('http://localhost:4000/addservice', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
       

            <div className="col-md-8 my-5 pr-3">
                <h5 className="text-brand"> ADD service </h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter title" />

                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Description</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="email" placeholder="Enter description" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload</label>
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="Upload Image" />
                    </div>

                    <button type="submit" class="btn btn-dark" style={{ width: '150px' }}>Submit</button>
                    
                </form>
            </div>

        </section>
    );
};

export default AddService;