import { useState } from "react";

const initialUser = { firstName: 'Daryl', lastName: 'Duckmanton' };

export const ReducerExampleOne = () => {
    const [user, setUser] = useState(initialUser);

    return (
        <section>
            <header>
                <h2>Personal Details</h2>
            </header>
            <div>
                <div>First Name: {user.firstName}</div>
                <div>Last Name: {user.lastName}</div>
            </div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" value={user.firstName} onChange={(e) => setUser({ firstName: e.target.value })} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={user.lastName} onChange={(e) => setUser({ lastName: e.target.value })} />
                </div>
            </form>
        </section>
    );
}