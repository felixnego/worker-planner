import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchWorker from "../../Components/Forms/SearchWorker";
import IWorker from "../../interface/IWorker";
import { getAllWorkers } from "../../Services/RestAPI";

const Homepage = () => {

  // Set workers state
  const [workers, setWorkers] = useState<IWorker>();

  const fetchWorkers = async() => {
    try {
      const worker = await getAllWorkers();

      // Add data to state
      setWorkers(worker)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWorkers();
  }, [])

  return(
    <div className="row">
        <div className="col-6 offset-3">

        {/* Form */}
        <SearchWorker workers={workers} />
        {/* End Form */}

        <span className="d-block text-center py-5">or</span>

        <div className="text-center">
            <Link
            className="btn btn-secondary"
            to="/add-worker">Add new worker</Link>
        </div>

        </div>
    </div>
  )
}

export default Homepage;
