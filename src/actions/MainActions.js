import {GET_POPULAR_CARS_SUCCESS,GET_POPULAR_CARS_REQUEST } from '../constants/Main'

// export function setMark(event,data) {
//   return {
//     type: SET_MARK,
//     mark: data.value
//   }
// }




export function getPopularCars() {

  return (dispatch) => {
    dispatch({
      type: GET_POPULAR_CARS_REQUEST,
    })


      fetch('http://localhost:3000/api/mostpopularcars')
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    dispatch({
         type: GET_POPULAR_CARS_SUCCESS,
         cars: data
       })
  })






  }
}