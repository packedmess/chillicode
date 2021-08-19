import PrincipleList from './PrincipleList';

export default {
  title: 'App/PrincipleList',
  component: PrincipleList,
  argTypes: {},
};

const Template = args => <PrincipleList {...args} />;

export const Default = Template.bind({});
Default.args = {};
