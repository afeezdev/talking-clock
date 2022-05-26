import { shallow, mount, render } from 'enzyme';
import React from 'react';
import {talkTime, timeSplit } from './talkTime'

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

it('is returning time in array of integers', ()=> {
    expect(timeSplit("22:23")).toEqual([22, 23])
})