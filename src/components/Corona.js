import React, { useState, useEffect } from 'react'
import TimeDate from './TimeDate';

const Corona = () => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const MainData = await res.json()
            setData(MainData.statewise)
            console.log(MainData.statewise)
            setLoading(!loading)
        } catch (err) {
            console.log(err)
            setError(!error)
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <div className='container'>
            <TimeDate/>
            <table className="ui celled table">
                <thead>
                    <tr>
                    <th>States</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                            <th>serious critical</th>
                            <th>total recovered</th>
                    </tr></thead>
                <tbody>
                {data && data.map(item => (
                            <tr key={item.id}>
                                <td data-label="state">{item.state}</td>
                                <td data-label="active">{item.active}</td>
                                <td data-label="deaths">{item.deaths}</td>
                                <td data-label="deltarecovered">{item.deltarecovered}</td>
                                <td data-label="Name">{item.confirmed}</td>
                            </tr>
                        ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Corona