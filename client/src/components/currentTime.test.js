import { shallow } from 'enzyme';
import React from 'react';
import CurrentTime from './currentTime';

it('expect to render CurrentTime component' , () => {

  expect(shallow(<CurrentTime />)).toMatchSnapshot()
})