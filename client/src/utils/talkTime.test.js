import { shallow } from 'enzyme';
import {talkTime, timeSplit, hourTime, minuteTime } from './talkTime'

let dbMockOnes = [
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
let  dbMockTeens = [
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

let dbMockTens = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty'
]


let dbMockHours = [
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

it('is returning time in array of integers', ()=> {
    expect(timeSplit("22:23")).toEqual([22, 23])
})

it('is returning hour is words', ()=> {
    expect(hourTime(23)).toEqual(dbMockHours[23 % 12])
    expect(hourTime(13)).toEqual(dbMockHours[13 % 12])
})

it('is returning minutes in words', ()=> {
    expect(minuteTime(2)).toEqual(dbMockOnes[2])
    expect(minuteTime(19)).toEqual(dbMockTeens[19%10])
    expect(minuteTime(20)).toEqual(`${dbMockTens[Math.floor(20/10)]} ${dbMockOnes[20%10]}`)
    expect(minuteTime(30)).toEqual(`half`)
    expect(minuteTime(35)).toEqual(`${dbMockTens[Math.floor((60-35)/10)]} ${dbMockOnes[(60-35)%10]}`)
    expect(minuteTime(46)).toEqual(dbMockTeens[(60-46)%10])
    expect(minuteTime(57)).toEqual(`${dbMockTens[Math.floor((60-57)/10)]} ${dbMockOnes[(60-57)%10]}`)
})

it('is returning time in human friendly', ()=> {
    expect(talkTime('22:34')).toEqual("twenty six to eleven")
    expect(talkTime('2:00')).toEqual("two o'clock")
    expect(talkTime('5:30')).toEqual("half past five")
    expect(talkTime('21:24')).toEqual("twenty four past nine")
})