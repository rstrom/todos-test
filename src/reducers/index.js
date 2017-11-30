const initial = {
  id: null,
  todos: []
};

export default function(state = initial, action) {
  switch (action.type) {
    case "ROUTED":
      return {
        ...state,
        id: action.id
      };
    case "LOADED_TODOS":
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
}
