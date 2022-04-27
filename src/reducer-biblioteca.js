export function reducer(state, action) {

    // definir a action que vai ler o modelo de dados dos livros
    if (action.type === 'READ_BOOKS') {
        return {
            books: [...action.payload],
        }
    }

    if (action.type === 'DELETE_MESSAGE') {
        return {
            books: state.books.filter(b => b.id !== action.id)
        }
    }

    if (action.type === 'ADD_BOOK') {
        return {
            books: [action.book, ...state.books]
        }
    }
    
    return state;
}