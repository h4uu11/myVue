<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">
          {{ detail.title }}
        </div>
        <div class="text-subtitle2">
          {{ detail.date }}
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ detail.content }}
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md" style="max-width: 400px">
    <q-btn-group spread>
      <q-btn outline color="black" label="List" @click="goList" />
      <q-btn outline color="black" label="Edit" @click="goEdit" />
      <q-btn outline color="black" label="Delete" @click="goDelete" />
    </q-btn-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { deleteBoard, getboardById } from '../../API/board';

const route = useRoute();
const router = useRouter();

const paramId = route.params.id;

const detail = ref({});
const setDetail = ({ title, content, date }) => {
  detail.value.title = title;
  detail.value.content = content;
  detail.value.date = date;
};

const fetchDetail = async () => {
  try {
    const { data } = await getboardById(paramId);
    setDetail(data);
  } catch (error) {
    console.log(error);
  }
};
fetchDetail();

const goList = () => {
  router.push({
    name: 'BoardList',
  });
};
const goEdit = () => {
  router.push({
    name: 'BoardEdit',
  });
};
const goDelete = async () => {
  try {
    if (confirm('really delete?')) {
      await deleteBoard(paramId);
      goList();
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
