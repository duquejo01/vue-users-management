<template>
  <main>
    <SidebarComponent :links="links" :user="user" :is-open="isSidebarOpen" />
    <div class="container-outline">
      <div class="bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl">
        <UpperNav :is-active="topNavigation.active" :back-url="topNavigation.backUrl"/>
      </div>
      <div class="container-main">
        <slot></slot>
      </div>
    </div>
    <FloatingMenu @toggle-sidebar="onToggleSidebar" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import SidebarComponent from '../../molecules/Sidebar/Sidebar.vue';
import UpperNav from '../../atoms/UpperNav/UpperNav.vue';
import FloatingMenu from '../../molecules/FloatingMenu/FloatingMenu.vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
  links: {
    type: Array,
    required: true,
  },
  topNavigation: {
    type: Object,
    default: () => ({
      backUrl: '',
      active: true,
    }),
  }
});

const emit = defineEmits(['toggleSidebar']);

const isSidebarOpen = ref(props.isSidebarOpen);

const onToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  emit('toggleSidebar', isSidebarOpen.value);
};
</script>

<style lang="postcss" scoped>
main {
  @apply flex justify-stretch h-screen;
  .container-outline {
    @apply flex flex-col border-transparent border-x-[1em] border-y-[1.5em] w-full container;
    .container-main {
      @apply bg-white dark:bg-secondary-900 rounded-b-2xl h-full overflow-x-hidden py-3 md:py-6 md:pb-6 md:pt-0 px-6 mx-auto w-full;
    }
  }
}
</style>