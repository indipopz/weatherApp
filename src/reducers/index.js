import { combineReducers } from 'redux';
import ReducerFetchWeather  from './reducer_fetchWeather';

const rootReducer = combineReducers({
  weather: ReducerFetchWeather
});

export default rootReducer;
