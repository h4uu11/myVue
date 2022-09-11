<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        outlined
        v-model="form.title"
        label="title *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        outlined
        type="textarea"
        v-model="form.content"
        label="content *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { updateBoard } from '@/API/board';
import { useRoute, useRouter } from 'vue-router';
import { getboardById } from '../../API/board';

const router = useRouter();
const route = useRoute();

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
month += 1;
if (month <= 9) {
  month = '0' + month;
}
let day = date.getDate();
if (day <= 9) {
  day = '0' + month;
}
let today = year + '-' + month + '-' + day;

const form = ref({
  title: '',
  content: '',
  date: today,
});

const paramId = route.params.id;

const fetchBoard = async () => {
  const { data } = await getboardById(paramId);
  form.value = { ...data };
};
fetchBoard();

const onSubmit = () => {
  try {
    updateBoard(paramId, {
      title: form.value.title,
      content: form.value.content,
      date: form.value.date,
    });
    goList();
  } catch (error) {
    console.log(error);
  }
};
const goList = () => {
  router.push({ name: 'BoardList' });
};
</script>
