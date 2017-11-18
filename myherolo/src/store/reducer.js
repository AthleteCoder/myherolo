import * as booksActions from './booksActions';


const defaultState = {
    BooksCollection : [],
    Errors: null,
    Fetched: false,
    editModal: false,
    addModal: false,
    deleteModal: false,
    deleteIndex: -1,
    editBook: null
}

export const reducer = (state = defaultState, action)=>{
    console.log(state)
    switch(action.type){

        case booksActions.FETCHED:
            return {...state,BooksCollection: action.payload.data,Errors: null,Fetched: true};

        case booksActions.FETCH_ERROR:
            return {...state, Errors: action.payload};

        case booksActions.SHOW_EDIT_MODAL:
            return {...state,editModal: true, editBook: action.payload};

        case booksActions.CLOSE_EDIT_MODAL:
            return {...state, editModal: false};

        case booksActions.DELETE_BOOK:
            return {...state, 
                BooksCollection: state.BooksCollection.filter((element,i) => i !== state.deleteIndex)};

        case booksActions.SHOW_DELETE_MODAL:
                return {...state, deleteModal: true, deleteIndex: action.payload};

        case booksActions.CLOSE_DELETE_MODAL:
                return {...state, deleteModal: false, deleteIndex: -1};

        case booksActions.SHOW_ADD_MODAL:
                return {...state, addModal: true};

        case booksActions.CLOSE_ADD_MODAL:
                return {...state, addModal: false};

        case booksActions.NEW_BOOK:
                return {...state, BooksCollection: [...state.BooksCollection, action.payload]};

        case booksActions.EDIT_BOOK:
                return {
                    ...state,
                    BooksCollection: state.BooksCollection.map(book => book.Title === state.editBook.Title ?
                        action.payload : 
                        book
                    ),
                    editBook: null 
                };

        default:
            return defaultState;

    }
}

export default reducer;