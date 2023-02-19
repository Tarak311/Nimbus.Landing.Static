import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import TextBox from './components/TextBox'
import React from 'react'

const App = () => {


  const ShowTime = () => {
    let date = new Date();
    console.log(date);

    let weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octuber',
        'November',
        'December',
    ];

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    let dayOfWeek = weekday[date.getDay()]
    let dayOfMonth = date.getDate()

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h = h-12;
        session = 'PM';
    }

    let time = h + ':' + m + ':' + s + ' ' + session

    document.querySelector('.clock').innerText = time
    document.querySelector('.clock').textContent = time 

    document.querySelector('.day').innerHTML =
    months[date.getMonth()] + ' ' + dayOfMonth + ', ' + date.getFullYear()

    document.querySelector('.dayOfWeek').innerHTML = dayOfWeek
    setTimeout(ShowTime, 1000)

  };

  ShowTime()
  

  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  )
}

export default App