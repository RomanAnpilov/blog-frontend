const initialState = {
    articles: [],
}

const article = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
            }
    }
}

export default article;