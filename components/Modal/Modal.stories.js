import Modal from './Modal';

export default {
  title: 'App/Modal',
  component: Modal,
  argTypes: {},
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};
