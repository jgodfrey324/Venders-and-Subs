// constants
const GET_ENTRIES = 'entries/GET_ENTRIES';
const ADD_ENTRY = 'entries/ADD_ENTRY';

const getEntries = () => ({
	type: GET_ENTRIES,
	entries,
});
const addEntry = (entry) => ({
    type: ADD_ENTRY,
    entry
})

// action thunks
export const getAllEntries = () => async (dispatch) => {
	const response = await fetch("/api/entries", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
        const data = await response.json()
		dispatch(getEntries());
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
}

// reducer
export default function reducer(state = {}, action) {
	switch (action.type) {
		case GET_ENTRIES:
			return { entries: action.entries };
        case ADD_ENTRY:
            const newState = state
            newState[action.entry.id] = entry
            return newState
		default:
			return state;
	}
}
