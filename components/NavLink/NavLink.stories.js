import NavLink from './NavLink';

export default {
  title: 'App/NavLink',
  component: NavLink,
  argTypes: {},
};

const Template = args => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'NavLink',
  color: 'primary',
  href: '/link-to',
};
