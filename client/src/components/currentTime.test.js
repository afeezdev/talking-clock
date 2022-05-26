import { shallow } from 'enzyme';
import React from 'react';
import CurrentTime from './currentTime';

it('expect to render CurrentTime component' , () => {
  expect(shallow(<CurrentTime />)).toMatchSnapshot()
})

// it('correctly display the current time', () => {
//   console.log('ok')
//     // const wrapper = shallow(<CurrentTime />)
//     // // wrapper.find('[id="display"]').simulate('click')
// }) 