// constants
const GET_ENTRIES = 'entries/GET_ENTRIES';
const GET_ENTRY = 'entries/GET_ENTRY';
const ADD_ENTRY = 'entries/ADD_ENTRY';
const REMOVE_ENTRY = 'entries/REMOVE_ENTRY';
const PUT_ENTRY = 'entries/PUT_ENTRY';


const getEntries = (entries) => ({
	type: GET_ENTRIES,
	payload: entries
});
const getEntry = (entry) => ({
	type: GET_ENTRY,
	payload: entry
});
const addEntry = (entry) => ({
    type: ADD_ENTRY,
    payload: entry
});
const removeEntry = (entryId) => ({
	type: REMOVE_ENTRY,
	payload: entryId
});
const putEntry = (entry) => ({
	type: PUT_ENTRY,
	payload: entry
});

// action thunks
export const getAllEntries = () => async (dispatch) => {
	const response = await fetch("/api/entries", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
        const data = await response.json()
		dispatch(getEntries(data));

        return data
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};
export const getOneEntry = (entryId) => async (dispatch) => {
	const response = await fetch(`/api/entries/${entryId}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
        const data = await response.json()
		dispatch(getEntry(data));

        return data
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};
export const postEntry = (entry) => async (dispatch) => {
    const response = await fetch("/api/entries/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
			entry
		}),
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addEntry(data))
        return data
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};
export const deleteEntry = (entryId) => async (dispatch) => {
	const response = await fetch(`/api/entries/${entryId}/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(removeEntry(entryId))
        return data
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};
export const updateEntry = (entry, entryId) => async (dispatch) => {
	const response = await fetch(`/api/entries/${entryId}/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
			entry
		}),
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(putEntry(data))
        return data
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

const initialState = {};
// reducer
const entriesReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case GET_ENTRIES:
			newState = { ...action.payload }
			return newState
		case GET_ENTRY:
			newState = { ...action.payload }
			return newState
		case ADD_ENTRY:
			newState = { ...state }
			newState[action.payload.id] = action.payload
			return newState
		case REMOVE_ENTRY:
			newState = { ...state }
			delete newState[action.payload]
			return newState
		case PUT_ENTRY:
			newState = { ...state }
			newState[action.payload.id] = action.payload
			return newState
		default:
			return state;
	}
}

export default entriesReducer
