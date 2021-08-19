import CardItem from './CardItem';

export default {
  title: 'App/CardItem',
  component: CardItem,
  argTypes: {},
};

const Template = args => <CardItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
