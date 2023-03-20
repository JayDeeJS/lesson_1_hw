import { useContext } from "react";
import { StoreContext } from "../../store/StoreContext";
import classes from './loginPage.module.css'

export default function LoginPage () {
    
    const { handleGoBack, handleLogin } = useContext(StoreContext);

    return (
        <div className="pageContent">
            <h1>Login page</h1>
            <form onSubmit={handleLogin} className={classes.pageForm}>
                <input type="text" placeholder="login"/>
                <input type="password" placeholder="password"/>
                <button type="submit" className={classes.pageButton}>Sign in</button>
            </form>
            <button onClick={handleGoBack} className="pageButton">Go back</button>
        </div>
    )
}