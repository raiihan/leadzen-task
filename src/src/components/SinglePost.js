import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


const SinglePost = ({ result }) => {
    const [data, setData] = useState({});
    const [hide, setHide] = useState(false);
    console.log(hide);
    const handledetails = data => {
        setHide(true)
        setData(data)
    }
    return (
        <>
            <div className="container mb-2">
                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col">
                                <p>Name</p>
                                <p>{result?.name}</p>
                            </div>
                            <div className="col">
                                <p>Gender</p>
                                <p>{result?.gender}</p>
                            </div>
                            <div className="col">
                                <p>DoB</p>
                                <p>{result?.birth_year}</p>
                            </div>

                            <div className="col d-flex align-items-center">
                                <button onClick={() => handledetails(result)} class="btn btn-warning">Details</button>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>


            <div className={hide ? "d-block" : "d-none"}>
                <div className="container">
                    <Card >
                        <Card.Body>
                            <Card.Title>Details</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Name : {data?.name}</Card.Subtitle>
                            <Card.Text>
                                Height : {data?.height}
                            </Card.Text>
                            <Card.Text>
                                Hair Color : {data?.hair_color}
                            </Card.Text>
                            <Card.Text>
                                Skin Color : {data?.skin_color}
                            </Card.Text>
                            <Card.Text>
                                Eye Color : {data?.eye_color}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default SinglePost;