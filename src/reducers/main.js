import {GET_POPULAR_CARS_SUCCESS,GET_POPULAR_CARS_REQUEST,SET_CAR,GET_CAR ,SET_MARK,SET_MODEL, SET_YEAR, SET_COST,  SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT,SET_PHOTO} from '../constants/Main'

const initialState = {
  cars: [
  ],
  fetching:false,
  car:{},
  mark:"",
  model:"",
  year:1950,
  cost:0,
  transmission:"",
  enginesType:"",
  mileage:0,
  amount:0,
  marks: [ { key: 'Лифан', value: 'Лифан', text: 'Лифан' },{ key: 'Нисан', value: 'Нисан', text: 'Нисан' }],
  models:  {
             "Лифан": [ { key: 'ЛифаноНовая', value: 'ЛифаноНовая', text: 'ЛифаноНовая' },{ key: 'ЛифанСтарая', value: 'ЛифанСтарая', text: 'ЛифанСтарая' }], 
         "Нисан":[ { key: 'НисанНовая', value: 'НисанНовая', text: 'НисанНовая' },{ key: 'НисанСтарая', value: 'НисанСтарая', text: 'НисанСтарая' }]} ,
  currentModels: [],
  photo:"",
  watch:0
}

export default function main(state = initialState, action) {

  switch (action.type) {

      case GET_POPULAR_CARS_REQUEST:
      return { ...state, fetching: true }

      case GET_POPULAR_CARS_SUCCESS:
      return { ...state, cars:action.cars,  fetching: false }

      case SET_CAR:
      return { ...state, car:action.car }

      case GET_CAR:
      return { ...state, car:action.car, mark:action.mark,model:action.model ,currentModels: state.models[action.mark],cost:action.cost, year:action.year, transmission:action.transmission, enginesType:action.enginesType, mileage:action.mileage, amount:action.amount,photo:action.photo,watch:action.watch}

      case SET_MARK:
      return { ...state, mark:action.mark ,currentModels: state.models[action.mark]}

      case SET_MODEL:
      return { ...state, model:action.model }

      case SET_COST:         
      return { ...state, cost: action.cost }
      
      case SET_YEAR:         
      return { ...state, year: action.year}

      case SET_TRANSMISSION:         
      return { ...state, transmission: action.transmission }

      case SET_TYPE:         
      return { ...state, enginesType: action.enginesType }

      case SET_MILEAGE:         
      return { ...state, mileage: action.mileage }

      case SET_AMOUNT:         
      return { ...state, amount: action.amount }

      case SET_PHOTO:         
      return { ...state, photo: action.photo }

      default:
      return state;
  }

}