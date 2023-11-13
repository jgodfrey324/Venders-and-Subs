// constants
const GET_RESULTS = 'search/GET_RESULTS';
// const POST_RESULTS = 'search/'

// actions
const getResults = (results) => ({
    type: GET_RESULTS,
    payload: results
});

// action thunks
export const getSearchResults = (search) => async (dispatch) => {
    const response = await fetch("/api/search", {
        method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({
            search
        }),
	});

	if (response.ok) {
        const data = await response.json()
		dispatch(getResults(data));

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

// initial state
const initialState = {}
// reducer
const searchReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_RESULTS:
            newState = { ...action.payload }
            return newState
        default:
            return state
    }
};

export default searchReducer
