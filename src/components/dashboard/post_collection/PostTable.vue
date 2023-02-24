<template>
    <div>
        <DataTable class="display" :columns="column" :data="data" ref="table">
        </DataTable>
    </div>
</template>


<script setup>
import { ref } from 'vue';

import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
DataTable.use(DataTablesLib);

let dt;
const table = ref();

const column = [
    { title: "SN", data: "Serial_number" },
    { title: "Published Date", data: "date" },
    { title: "Excerpt", data: "excerpt" },
    { title: "Category", data: "category" },
    { title: "Author", data: "author" },
    { title: "Time", data: "time" },
    { title: "Ping", data: "ping" },
];

const options = {
    dom: "Blftipr", select: true, ordering: false, info: true
};

const data = [
    { Serial_number: '1', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', time: '1:23:43', ping: 'jhbj' },

    { Serial_number: '1', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', time: '1:23:43', ping: 'jhbj' },

    { Serial_number: '1', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', time: '1:23:43', ping: '123' }

]
</script>


<style scoped>
@import "datatables.net-buttons-dt";
@import "datatables.net-select-dt";
@import 'datatables.net-dt';
</style>