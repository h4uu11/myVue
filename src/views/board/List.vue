<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-table :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body="props">
        <q-tr :props="props" @click="goBoardDetail(props.row.id)">
          <q-td key="title" :props="props">{{ props.row.title }}</q-td>
          <q-td key="content" :props="props">{{ props.row.content }}</q-td>
          <q-td key="date" :props="props">{{ props.row.date }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { getBoard } from '@/API/board';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBoardDetail = (id) => {
  router.push({
    name: 'BoardDetail',
    params: { id },
  });
};

const columns = reactive([
  { name: 'title', label: 'title', field: 'title', align: 'center' },
  { name: 'content', label: 'content', field: 'content', align: 'center' },
  { name: 'date', label: 'date', field: 'date', align: 'center' },
]);

const rows = ref([]);
const fetchList = async () => {
  try {
    const { data } = await getBoard();
    rows.value = data;
  } catch (error) {
    console.log(error);
  }
};
fetchList();
</script>
