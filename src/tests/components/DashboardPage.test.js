import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage from '../../components/DashboardPage';

describe('Rendering <DashBoardPage/>', () => {
  it('Renders <DashBoardPage/> correctly', () => {
    const wrapper = shallow(<DashBoardPage/>);
    expect(wrapper).toMatchSnapshot();
  })
})