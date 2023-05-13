<script setup>
import { ref } from "vue";

const props = defineProps({
  dark: Boolean,
  modalShown: Boolean,
  modalHeader: String,
});

const emit = defineEmits(["close-modal"]);

const modalToggle = () => emit("close-modal");
</script>

<template>
  <!-- modal backdrop -->
  <div
    v-if="modalShown"
    @click.self="modalToggle"
    class="fixed h-full w-full backdrop-blur-sm z-20 flex justify-center items-center p-5"
  >
    <!-- actual modal -->
    <div
      v-if="modalShown"
      :class="props.dark ? 'bg-slate-700' : 'bg-slate-100'"
      class="w-full h-full lg:w-4/12 lg:h-3/6 rounded flex flex-col justify-between"
    >
      <!-- HEADER -->
      <div
        :class="props.dark ? 'bg-slate-700' : 'bg-slate-200'"
        class="flex flex-row justify-between items-center rounded-t sticky top-0 overflow-hidden"
      >
        <h1
          :class="props.dark ? 'text-white' : 'text-slate-700'"
          class="flex-1 pl-3 text-xl"
        >
          {{ props.modalHeader }}
        </h1>

        <button
          @click="modalToggle"
          class="hover:bg-rose-700 bg-rose-500 p-3 px-5 text-white"
        >
          x
        </button>
      </div>
      <!-- BODY -->

      <div
        :class="props.dark ? 'bg-slate-400' : 'bg-slate-50'"
        class="flex-1 overflow-y-auto w-full"
      >
        <slot name="body"></slot>
      </div>

      <!-- FOOTER -->
      <div
        :class="props.dark ? 'bg-slate-700' : 'bg-slate-200'"
        class="flex flex-row-reverse justify-between items-center sticky bottom-0 overflow-hidden rounded-b"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
