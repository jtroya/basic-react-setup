import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('App', () => {
    it('should render the component', () => {
        const wrapper = shallow(<App />);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    
    // it('match to snapshot', () => {
    //     const tree = renderer.create(<App />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })
});
