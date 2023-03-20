import { useContext } from "react";
import { StoreContext } from "../../store/StoreContext";

export default function MainPage () {
    
    const { handleGoBack } = useContext(StoreContext);

    return (
        <div className="pageContent">
            <h1>Main page</h1>
            <button onClick={handleGoBack} className="pageButton">Go back</button>
        </div>
    )
}