import React from 'react';
import Colorpicker from '../components/colorpicker/colorpicker';

export default {
  title: 'Colorpicker',
  component: Colorpicker,
};

const Template = (args) => <Colorpicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    colors: ['rgb(159, 41, 87)', 'rgb(217, 0, 86)', 'rgb(226, 93, 51)', 'rgb(223, 196, 90)', 'rgb(184, 196, 47)', 'rgb(22, 175, 110)', 'rgb(66, 148, 136)', 'rgb(57, 126, 73)', 'rgb(67, 155, 223)', 'rgb(66, 84, 175)', 'rgb(108, 122, 196)', 'rgb(131, 50, 164)'],

};