import PrincipleItem from './PrincipleItem';

export default {
  title: 'App/PrincipleItem',
  component: PrincipleItem,
  argTypes: {},
};

const Template = args => <PrincipleItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
