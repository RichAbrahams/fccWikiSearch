import {
  RECEIVE_ADD_RECIPE,
  RECEIVE_EDIT_RECIPE,
  RECEIVE_DELETE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  ADD_RECIPE,
  MODIFY_EXPANDED,
  RECEIVE_INITIAL_DATA,
} from '../constants';

const initialState = {
  recipes: [
    {
      name: 'Beans on Toast',
      ingredients: [
        'butter', 'bread', 'salt', 'pepper',
      ],
    },
    {
      name: 'Pot Noodle',
      ingredients: [
        'pot noodle', ' boiling water',
      ],
    },
    {
      name: 'Pot Noodle',
      ingredients: [
        'pot noodle', ' boiling water',
      ],
    },
  ],
  edit: null,
  add: null,
  delete: null,
  expanded: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_DATA: {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case RECEIVE_ADD_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
        add: null,
      };
    }
    case RECEIVE_EDIT_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
        edit: null,
      };
    }
    case RECEIVE_DELETE_RECIPE: {
      return Object.assign({}, state, action.payload, { delete: null });
    }
    case EDIT_RECIPE: {
      return {
        ...state,
        edit: action.payload,
      };
    }
    case DELETE_RECIPE: {
      return {
        ...state,
        delete: action.payload,
      };
    }
    case ADD_RECIPE: {
      if (action.payload === null) {
        return {
          ...state,
          add: null,
        };
      }
      return {
        ...state,
        add: true,
      };
    }
    case MODIFY_EXPANDED: {
      const requestedIndex = action.payload;
      const nextExpanded = [...state.expanded];
      const currentIndex = nextExpanded.indexOf(requestedIndex);
      if (currentIndex === -1) {
        nextExpanded.push(requestedIndex);
      } else {
        nextExpanded.splice(currentIndex, 1);
      }
      return {
        ...state,
        expanded: nextExpanded,
      };
    }
    default:
      return state;
  }
};
