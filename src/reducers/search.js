import {GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS, SET_MARK, SET_MODEL, SET_YEAR, SET_COST, SET_VALUTA, SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT , CLEAR,GET_CARS} from '../constants/Search'

const initialState = {
  mark : "",
  model: "",
  marks: [ { key: 'Лифан', value: 'Лифан', text: 'Лифан' },{ key: 'Нисан', value: 'Нисан', text: 'Нисан' }],
  valutas:   [ {text: 'Белорусские рубли',value: 'Белорусские рубли'},{text: 'Доллары',value: 'Доллары'}],
  models:  {
             "Лифан": [ { key: 'ЛифаноНовая', value: 'ЛифаноНовая', text: 'ЛифаноНовая' },{ key: 'ЛифанСтарая', value: 'ЛифанСтарая', text: 'ЛифанСтарая' }], 
         "Нисан":[ { key: 'НисанНовая', value: 'НисанНовая', text: 'НисанНовая' },{ key: 'НисанСтарая', value: 'НисанСтарая', text: 'НисанСтарая' }]} ,
  currentModels: [],
  year:1950,
  cost:0,
  valuta:"",
  transmission:"",
  enginesType:"",
  mileage:0,
  amount:0,
  fetching: false,
  photos: [],
  cars: [
      // {id:1,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:2,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:3,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:4,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:5,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:6,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:7,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:8,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      //  {id:9,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:10,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:11,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:12,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:13,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:14,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:15,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:16,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
  ],
  filteredCars: [
      // {id:1,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:2,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:3,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:4,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:5,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:6,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:7,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:8,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      //  {id:9,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:10,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:11,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:12,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:13,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:14,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:15,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      // {id:16,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
  ],
}

function compare(state,action){
    let cars = state.cars;
    cars = action.mark?cars.filter((value)=>value.mark===action.mark):cars;
    cars = action.model?cars.filter((value)=>value.model===action.model):cars;
    cars = action.year?cars.filter((value)=>value.year>=action.year):cars;
    cars = action.cost?cars.filter((value)=>value.cost<=action.cost):cars;
    cars = action.transmission?cars.filter((value)=>value.transmission===action.transmission):cars;
    cars = action.enginesType?cars.filter((value)=>value.enginesType===action.enginesType):cars;
    cars = action.mileage?cars.filter((value)=>value.mileage<=action.mileage):cars;
    cars = action.amount?cars.filter((value)=>value.amount>=action.amount):cars;
    return cars;
}


export default function search(state = initialState, action) {

  switch (action.type) {
    case SET_MARK:         
      return { ...state, mark: action.mark, currentModels: state.models[action.mark], filteredCars: compare(state,action) }

    case SET_MODEL:         
      return { ...state, model: action.model , filteredCars: compare(state,action)}

    case SET_YEAR:         
      return { ...state, year: action.year , filteredCars: compare(state,action)}
      
       case SET_COST:         
      return { ...state, cost: action.cost , filteredCars: compare(state,action)}
      
       case SET_VALUTA:         
      return { ...state, valuta: action.valuta , filteredCars: compare(state,action)}

       case SET_TRANSMISSION:         
      return { ...state, transmission: action.transmission , filteredCars: compare(state,action)}

       case SET_TYPE:         
      return { ...state, enginesType: action.enginesType , filteredCars: compare(state,action)}

       case SET_MILEAGE:         
      return { ...state, mileage: action.mileage , filteredCars: compare(state,action)}

       case SET_AMOUNT:         
      return { ...state, amount: action.amount , filteredCars: compare(state,action)}

         case CLEAR:         
      return { ...state,...action,  filteredCars: state.cars}

      case GET_PHOTOS_REQUEST:
      return { ...state, year: action.year, fetching: true }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.photos, fetching: false }

      case GET_CARS:
      return { ...state, cars: action.cars, filteredCars:action.cars }

    default:
      return state;
  }

}