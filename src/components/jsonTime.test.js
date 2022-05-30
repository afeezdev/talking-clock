import { shallow } from 'enzyme';
import React from 'react';
import JsonTime from './jsonTime';

it('expect to render JsonTime component' , () => {

  expect(shallow(<JsonTime />)).toMatchSnapshot()
})