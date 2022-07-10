import AddNewWorker from "../../Components/Forms/AddNew";

const AddWorker = () => {
    return(
        <div className="row">

            <h1 className="text-center">Add new worker</h1>

            {/* Form */}
            <AddNewWorker />
            {/* End Form */}

        </div>
    )
}

export default AddWorker;