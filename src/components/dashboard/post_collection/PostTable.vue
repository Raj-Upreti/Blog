<!-- <template>
    <div>
        <DataTable class="display" :columns="column" :data="data" :options="options" ref="table">
        </DataTable>
    </div>
</template>
  
<script setup>
import { ref, watch } from 'vue';
import { usepostStore } from '../../../store/postStore';
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-buttons';
DataTable.use(DataTablesLib);

// let dt;
const table = ref([]);
const poststore= usepostStore();

const column = [
    { title: "SN", data: "Serial_number" },
    { title: "Title", data: "title" },
    { title: "Published Date", data: "date" },
    { title: "Excerpt", data: "excerpt" },
    { title: "Category", data: "category" },
    { title: "Author", data: "author" },
    { title: "Status", data: "status" },
    // { title: "Time", data: "time" },
    // { title: "Ping", data: "ping" },
    { title: "Preview", data: "preview" }
];


const options = {
    dom: "Blftipr",
    select: true,
    ordering: false,
    info: true,
    createdRow: (row, data) => {
        const statusCell = row.querySelector("td:nth-child(6)");

    // Set the cell's background color based on the value of the "status" property
    if (data.status === "Published") {
      statusCell.style.color = "darkseagreen";
    } else {
      statusCell.style.color = "orange";
    }

    // Set the focus on the "Excerpt" cell in the row
    const excerptCell = row.querySelector("td:nth-child(6)");
    excerptCell.focus();
        
    },
    
}; 



const data = [
    { Serial_number: '1', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published', time: '1:23:43', ping: 'jhbj', preview: 'View' },

    { Serial_number: '2', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Draft',  time: '1:23:43', ping: 'jhbj',  preview:'View'},

    { Serial_number: '3', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '4', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Draft',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '5', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '6', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '7', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Draft',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '8', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '9', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Draft',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '10', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published',  time: '1:23:43', ping: '123',  preview:'View'},

    { Serial_number: '11', date: '2023-1-2', excerpt: 'nbakjnknkjnkn,nkjbknkbjbkb', category: 'nbj', author: 'nbkj', status: 'Published', time: '1:23:43', ping: '123', preview: 'View' },

];


 </script>
  
 <style scoped>
 @import "datatables.net-buttons-dt";
  @import "datatables.net-select-dt";
 @import 'datatables.net-dt';
 </style> 




 -->



 <template>
    <div>
      <DataTable class="display" :columns="column" :data="tableData" :options="options" ref="table">
      </DataTable>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { usepostStore } from '../../../store/postStore';
  import DataTable from 'datatables.net-vue3';
  import DataTablesLib from 'datatables.net';
  import 'datatables.net-select';
  import 'datatables.net-buttons';
  DataTable.use(DataTablesLib);
  
  const table = ref();
  const postStore = usepostStore();

  onMounted(async ()=>{
    postStore.readAllPosts();
  });

  const tableData = computed(() => {
    return postStore.postList;
  });
  
  const column = [
    { title: "Title", data: "post_title" },
    { title: "Date", data: "post_date" },
    { title: "Category", data: "category_name" },
    { title: "Status", data: "post_status"},
  ];
  
  
  
  const options = {
    dom: "Blftipr",
    select: true,
    ordering: false,
    info: true,
    createdRow: (row, data) => {

        console.log(data.post_status)
        const statusCell = row.querySelector("td:last-child");
  
      // Set the cell's background color based on the value of the "status" property
      if (data.post_status.toLowerCase() === "published") {
        statusCell.style.color = "darkseagreen";
        statusCell.className = "text-uppercase status";
      } else if (data.post_status.toLowerCase() === "draft") {
        statusCell.style.color = "orange";
        statusCell.className = "text-uppercase status";
      }
  
      // Set the focus on the "Excerpt" cell in the row
      const excerptCell = row.querySelector("td:last-child");
      excerptCell.focus();
    },
  };
  </script>
  
  <style scoped>
  @import "datatables.net-buttons-dt";
  @import "datatables.net-select-dt";
  @import 'datatables.net-dt';


  </style>