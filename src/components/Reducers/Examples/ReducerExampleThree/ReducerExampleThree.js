import { useReducer } from "react";

const initialUser = { 
    accountDetails: {
        firstName: 'Daryl',
        lastName: 'Duckmanton'
    },
    addressDetails: {
        city: 'Melbourne'
    } 
};


const userReducer = (state, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'UPDATE_FIRST_NAME':
            newState.accountDetails.firstName = action.payload.firstName;
            return newState;
        case 'UPDATE_LAST_NAME':
            newState.accountDetails.lastName = action.payload.lastName;
            return newState;
        default:
            return state;
    }
};

export const ReducerExampleThree = () => {
    const [user, userDispatch] = useReducer(userReducer, initialUser);
    const articles = [];

    const createArticle = () => {        
        // This is the default article on create
        // { title: 'Test' }
    };

    const updateArticle = (index) => {        
        // This is the payload for updating an article.
        // { index, title: 'Updated Text', isActive: false }
    };

    const removeArticle = (index) => {
        // This is the payload for deleting an article
        // { index }
    };

    const articlesEl = articles.map((t, i) => (
        <li key={i} style={ { display: 'flex', justifyContent: 'space-between' } }>
            <div>{ t.title }</div>
            <div style={ { display: 'flex', columnGap: '5px' }}>
                <div>{ t.isActive ? 'Active': 'Inactive' }</div>
                <button onClick={() => updateArticle(i, t) }>Update</button>
                <button onClick={() => removeArticle(i) }>Delete</button>
            </div>
        </li>
    ));

    return (
        <section>
            <header>
                <h2>Personal Details</h2>
            </header>
            <div>
                <div>First Name: {user.accountDetails?.firstName}</div>
                <div>Last Name: {user.accountDetails?.lastName}</div>
            </div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" value={user.accountDetails?.firstName} onChange={(e) => userDispatch({ type: 'UPDATE_FIRST_NAME', payload: { firstName: e.target.value }})} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={user.accountDetails?.lastName} onChange={(e) => userDispatch({ type: 'UPDATE_LAST_NAME', payload: { lastName: e.target.value }})} />
                </div>
            </form>
            <ul>
                { articlesEl }
            </ul>
            <button onClick={ () => createArticle() }>Create Todo</button>
        </section>
    );
}