import React from 'react';
import Select from '../components/select/select';

export default {
  title: 'Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: ['12:00', '12:15', '12:30', '12:45', '13:00','13:15','13:30','13:45','14:00'],
    label: 'label'
};