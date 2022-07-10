import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

const SearchWorker = (props: any) => {

    const nav = useNavigate();
    const workerRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: any) => {

        e.preventDefault();

        if(workerRef.current?.value !== "") {
            nav("/login", {
                state: workerRef.current?.value
            })
        }

    }

    return(
        <form
        onSubmit={handleSubmit}
        autoComplete="off">

            <div className="mb-3">

                <label htmlFor="worker" className="form-label">
                    Search for worker:
                </label>

                <input
                type="text"
                ref={workerRef}
                list="workers"
                placeholder="Type here ..."
                className="form-control" />

                <datalist id="workers">
                    {
                        props.workers ?
                        Object.values(props.workers).map((worker: any, i: number) => {
                            return <option key={i} value={worker.name}>{worker.name}</option>
                        })
                        : null
                    }
                </datalist>

                <div className="form-text">If you're not on the list, you can click the <strong>Add new worker</strong> button below.</div>

                <div className="mt-3">
                    <button className="btn btn-primary w-100 py-2">Search</button>
                </div>

            </div>

        </form>
    )
}

export default SearchWorker;