const HOURS = [
    'twelve',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
]

const ONES = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
]

const TEENS = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
]

const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty'
]



const talkTime = (time) => {
    let currentTime = ''
    const [h, m] = time.split(':').map(n => parseInt(n));
    const hour = HOURS[h % 12];    
  
    let minute = '';
    if( m === 0) {
        currentTime = [ hour, "o'clock"].join(' ');
    }
    else if (m < 10) {
        minute = `${ONES[m]}`
        currentTime = [ minute, 'past', hour].join(' ')
    } else if (m < 20) {
        minute = `${TEENS[m%10]}`
        currentTime = [ minute, 'past', hour].join(' ')
    } else if (m < 30) {
        minute = `${TENS[Math.floor(m/10)]} ${ONES[m%10]}`
        currentTime = [ minute, 'past', hour].join(' ')
    }
    
    else if ( m === 30) {
        minute = `half`;
        currentTime = [ minute, 'past', hour].join(' ')
    }
    else if( m < 40) {
      let m1 = 60 - Number(m) 
        minute = `${TENS[Math.floor(m1/10)]} ${ONES[m1%10]}`
        currentTime = [minute, 'to', HOURS[(h % 12) + 1 ]].join(' ');
    }
    else if( m <= 50) {
      let m1 = 60 - Number(m) 
      minute = `${TEENS[m1%10]}`
  
        currentTime = [minute, 'to', HOURS[(h % 12) + 1 ]].join(' ');
    }
    else {
        let m1 = 60 - Number(m) 
        minute = `${TENS[Math.floor(m1/10)]} ${ONES[m1%10]}`
        currentTime = [minute, 'to', HOURS[(h % 12) + 1 ]].join(' ');
    }
    return  currentTime
  }
  
  module.exports = {
    talkTime
}