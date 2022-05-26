import { HOURS, ONES, TEENS, TENS } from './data'

export const timeSplit = (time) => {
    let splittedTime = time.split(':').map(n => parseInt(n));
    return splittedTime
}

export const hourTime = (h) => {
    let hour = HOURS[h % 12]
    return hour
}

export const minuteTime = ( m ) => {
    let minute = '';
    
    if( m === 0) {
        minute = "o'clock";
    }
    else if (m < 10) {
        minute = `${ONES[m]}`
    } else if (m < 20) {
        minute = `${TEENS[m%10]}`
    } else if (m < 30) {
        minute = `${TENS[Math.floor(m/10)]} ${ONES[m%10]}`
    } else if ( m === 30) {
        minute = `half`;
    } else if( m < 40) {
      let m1 = 60 - Number(m) 
        minute = `${TENS[Math.floor(m1/10)]} ${ONES[m1%10]}`
    } else if( m <= 50) {
      let m1 = 60 - Number(m) 
      minute = `${TEENS[m1%10]}`
    } else if ( m === undefined || m >= 60 || m < 0) {
        minute = undefined
    }
    else {
        let m1 = 60 - Number(m) 
        minute = `${TENS[Math.floor(m1/10)]} ${ONES[m1%10]}`
    }
    return minute
}

export const talkTime = (time) => {
    const [h, m] = timeSplit(time)
    let currentTime = ''
    const hour = hourTime(h);    
    let minute = minuteTime(m);
    
    if( m === 0) {
        currentTime = [ hour, "o'clock"].join(' ');
    }
    else if (m < 30) {
        currentTime = [ minute, 'past', hour].join(' ')
    }     
    else if ( m === 30) {
        currentTime = [ minute, 'past', hour].join(' ')
    }
    else if( m > 30 && m < 60 ) {
        currentTime = [minute, 'to', HOURS[(h % 12) + 1 ]].join(' ');
    }
    
    else if (h === undefined || m === undefined || m > 60) {
        currentTime = "Invalid Number or time format"
    }
    else {
        currentTime = "Invalid Number or time format"
    }
    return  currentTime
  }
  