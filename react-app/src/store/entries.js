// constants
const GET_ENTRIES = 'entries/GET_ENTRIES';
const ADD_ENTRY = 'entries/ADD_ENTRY';

const getEntries = (entries) => ({
	type: GET_ENTRIES,
	payload: entries
});
const addEntry = (entry) => ({
    type: ADD_ENTRY,
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
			console.log('data.errors from store ---->', data.errors)
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}

// reducer
const entriesReducer = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case GET_ENTRIES:
			newState = action.payload
			return newState
		default:
			return state;
	}
}

export default entriesReducer
