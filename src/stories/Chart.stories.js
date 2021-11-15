import Chart from '../components/Chart'
import '../styles/App.sass'

export default {
  component: Chart,
  title: 'Design System/Components/Chart',
};

const mockupData = {"Algorithm 1": 17, "Algorithm 2": 5, "Algorithm 3": 7,
      "Algorithm 4": 10, "Algorithm 5": 11}

const Template = args => <Chart {...args} />;

export const Default = Template.bind({});

export const Pie = Template.bind({});
Pie.args = {
  ramp: mockupData
};


