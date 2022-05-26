import { shallow, mount } from 'enzyme';
import React from 'react';
import CurrentTime from './currentTime';

it('expect to render CurrentTime component' , () => {
  expect(shallow(<CurrentTime />)).toMatchSnapshot()
})

it('correctly display the current time', () => {
    const wrapper = shallow(<CurrentTime />)
    wrapper.find('[id="display"]').simulate('click')
}) 