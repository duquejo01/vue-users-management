import ListComponent from './List.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Atoms/List',
  component: ListComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const List = {
  args: {
    users: [
      {
        id: 1,
        name: 'Anna George',
        email: 'anna@demo.com',
        phone_number: '+573101231212',
        role: 'admin',
        created_at: '2023/10/23',
      },
      {
        id: 2,
        name: 'Albert Flores 2',
        email: 'albert2@demo.com',
        phone_number: '+573101234567',
        role: 'user',
        created_at: '20 minutes ago',
      },
      {
        id: 3,
        name: 'Albert Flores 3',
        email: 'albert3@demo.com',
        phone_number: '+573101234567',
        role: 'user',
        created_at: '20 minutes ago',
      },
      {
        id: 4,
        name: 'Albert Flores 4',
        email: 'albert4@demo.com',
        phone_number: '+573101234567',
        role: 'user',
        created_at: '20 minutes ago',
      },
      {
        id: 5,
        name: 'Albert Flores 5',
        email: 'albert5@demo.com',
        phone_number: '+573101234567',
        role: 'user',
        created_at: '20 minutes ago',
      },
      {
        id: 6,
        name: 'Albert Flores 6',
        email: 'albert6@demo.com',
        phone_number: '+573101234567',
        role: 'user',
        created_at: '20 minutes ago',
      }
    ],
  },
};