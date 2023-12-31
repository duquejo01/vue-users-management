import MenuAvatarComponent from './MenuAvatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Atoms/Menu avatar',
  component: MenuAvatarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const MenuAvatar = {
  args: {
    class: '',
    user: {
      name: 'John Doe',
      role: 'Site admin',
      avatarUrl: 'https://placehold.co/100x100',
    },
    justAvatar: true,
  },
};