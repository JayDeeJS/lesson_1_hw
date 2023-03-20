import { useContext, useEffect } from "react";
import { StoreContext } from "../../store/StoreContext";
import classes from './usersPage.module.css';

export default function UsersPage () {
    const { handleGoBack, users, getData } = useContext(StoreContext);

    useEffect(() => {
       getData()
    }, [getData])

    return (
        <div className="pageContent">
            <h1>Users page</h1>
            <div className={classes.pageInfo}>
                {users.map((user, i) =>
                    <main key={i} className={classes.pageUsers}>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <section className={classes.pageUsers__address}>
                            <p>{user.address.city}</p>
                            <p>{user.address.zipcode}</p>
                        </section>
                    </main>
                )}
            </div>
            <button onClick={handleGoBack} className="pageButton">Go back</button>
        </div>
    )
}