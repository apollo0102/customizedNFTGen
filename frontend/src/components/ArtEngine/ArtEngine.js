import React, { Component, useState } from 'react';
import axios from 'axios'

const ArtEngine = () => {
    const [data, setData] = useState({});

    const create = async () => {
        try {
            const formData = {
                name: "1111",
                type: "5555"
            }
            const url = "http://localhost:4200/api/art/create";
            const result = axios.post(url, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
            console.log(result);
        } catch (err) {
            console.log('err: ', err);
        }
    }

    return (
        <div>
            <button onClick={create}>Create Art</button>
        </div>
    )
}
export default ArtEngine;