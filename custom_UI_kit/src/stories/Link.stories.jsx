import React from 'react';
import Link from '../components/link/link';

export default {
  title: 'Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Link',
  disabled: false,
};

