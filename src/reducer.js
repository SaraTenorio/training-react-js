//será utilizado pela store para atualizar o state atual de acordo com a action recebida (TEM QUE SER UMA PURE FUNCTION)
export default function reducer(state, action) {
    if (action.type === "ADD_MESSAGE") {
        return {
            messages: [...state.messages, action.messages]
        }
    } else if (action.type === "DELETE_MESSAGE") {
        return {
            messages: state.messages.filter((msg, i) => i !== action.index)
        }
    } else {
        return state; // o reducer precisa sempre retornar
    }
}