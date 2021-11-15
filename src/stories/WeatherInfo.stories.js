import WeatherInfo from '../components/WeatherInfo'

import '../styles/App.sass'

export default {
  component: WeatherInfo,
  title: 'Design System/Components/WeatherInfo',
};

const Template = args => <WeatherInfo {...args} />;

export const Default = Template.bind({});

