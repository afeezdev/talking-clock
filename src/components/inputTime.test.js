import { shallow } from 'enzyme';
import React from 'react';
import InputTime from './inputTime';

it('expect to render InputTime component' , () => {

  expect(shallow(<InputTime />)).toMatchSnapshot()
})