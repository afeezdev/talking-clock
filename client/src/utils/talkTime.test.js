import { shallow, mount, render } from 'enzyme';
import React from 'react';
import {talkTime, timeSplit, hourTime } from './talkTime'

let dbMock = [
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

let dbMock2 = [
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
    expect(hourTime(23)).toEqual(dbMock2[23 % 12])
})

it('is returning hour is words', ()=> {
    expect(hourTime(23)).toEqual(dbMock2[23 % 12])
    expect(hourTime(13)).toEqual(dbMock2[13 % 12])
})