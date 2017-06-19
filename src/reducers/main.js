// import {GET_PHOTOS_REQUEST,
//   GET_PHOTOS_SUCCESS, SET_MARK, SET_MODEL, SET_YEAR, SET_COST, SET_VALUTA, SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT , CLEAR} from '../constants/Main'

const initialState = {
  cars: [
      {id:1,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:2,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:3,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:4,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:5,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
      {id:6,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
      {id:7,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
      {id:8,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
       {id:9,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:10,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:11,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:12,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:13,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
      {id:14,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
      {id:15,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
      {id:16,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
  ]
}




export default function main(state = initialState, action) {

  switch (action.type) {
    // case SET_MARK:         
    //   return { ...state, mark: action.mark, currentModels: state.models[action.mark], filteredCars: compare(state,action) }

    default:
      return state;
  }

}