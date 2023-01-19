import Gender from "./Category/Gender"
import Species from "./Category/Species"
import Status from "./Category/Status"

const Filters = ({ setStatus, setpageNumber, setGender, setSpecies }) => {
    let clear = () => {
        setStatus("");
        setpageNumber("");
        setGender("");
        setSpecies("");
        window.location.reload(false);
    };

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div
                onClick={clear}
                style={{ cursor: "pointer" }}
                className="text-center text-primary text-decoration-underline mb-3"
            >
                Clear Filters
            </div>

            <div className="accordion" id="accordionExample">
                <Status
                    setpageNumber={setpageNumber}
                    setStatus={setStatus}
                />
                <Species
                    setpageNumber={setpageNumber}
                    setSpecies={setSpecies}
                />
                <Gender
                    setpageNumber={setpageNumber}
                    setGender={setGender}
                />
            </div>
        </div>
    )
}

export default Filters