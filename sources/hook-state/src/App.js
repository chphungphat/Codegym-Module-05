import React, {useState} from "react";

function App() {
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState();

    const handleAdd = () => {
        setJobs(prevState => [...prevState, job]);
    }

    const handleChange = (value) => {
        setJob(value);
    }

    const handleDelete = (index) => {
        setJobs(jobs.filter((_, index2) => index !== index2));
    }

    return (
        <div>
            <input
                value={job}
                onChange={event => handleChange(event.target.value)}
            />

            <button onClick={handleAdd}>Click Me</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => handleDelete(index)}>Delete it</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default App;
