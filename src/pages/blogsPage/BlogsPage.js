import { useContext } from "react";
import { StoreContext } from "../../store/StoreContext";

export default function BlogsPage () {

    const { handleGoBack } = useContext(StoreContext);

    return (
        <div className="pageContent">
            <h1>Blogs page</h1>
            <button onClick={handleGoBack} className="pageButton">Go back</button>
        </div>
    )
}