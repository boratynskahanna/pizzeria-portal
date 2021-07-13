import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_STATUS = createActionName('UPDATE_STATUS');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateStatus = payload => ({ payload, type: UPDATE_STATUS });
export const updateTables = payload => ({ payload, type: UPDATE_TABLES });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess());
        dispatch(updateTables(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchStatusFromAPI = (tableId, status) => {
  return (dispatch) => {
    dispatch(fetchStarted());

    Axios
      .patch(`${api.url}/api/${api.tables}/${tableId}`, { status })
      .then(async res => {
        dispatch(fetchSuccess());
        dispatch(updateStatus({ id: tableId, status }));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }

    case UPDATE_TABLES: {
      return {
        ...statePart,
        data: action.payload,
      };
    }

    case UPDATE_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map(table => table.id === action.payload.id ? { ...table, status: action.payload.status } : table),
      };
    }

    default:
      return statePart;
  }
}