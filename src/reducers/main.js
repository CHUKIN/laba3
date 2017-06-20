import {GET_POPULAR_CARS_SUCCESS,GET_POPULAR_CARS_REQUEST,SET_CAR,GET_CAR ,SET_MARK,SET_MODEL, SET_YEAR, SET_COST,  SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT} from '../constants/Main'

const initialState = {
  cars: [
    //   {id:1,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:2,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:3,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:4,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:5,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:6,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
    //   {id:7,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
    //   {id:8,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
    //    {id:9,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:10,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:11,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:12,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:13,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
    //   {id:14,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
    //   {id:15,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
    //   {id:16,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
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
}




export default function main(state = initialState, action) {

  switch (action.type) {
    // case SET_MARK:         
    //   return { ...state, mark: action.mark, currentModels: state.models[action.mark], filteredCars: compare(state,action) }

      case GET_POPULAR_CARS_REQUEST:
      return { ...state, fetching: true }

    case GET_POPULAR_CARS_SUCCESS:
      return { ...state, cars:action.cars,  fetching: false }

       case SET_CAR:
      return { ...state, car:action.car }

       case GET_CAR:
      return { ...state, car:action.car, mark:action.mark,model:action.model ,currentModels: state.models[action.mark],cost:action.cost, year:action.year, transmission:action.transmission, enginesType:action.enginesType, mileage:action.mileage, amount:action.amount}

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

    default:
      return state;
  }

}