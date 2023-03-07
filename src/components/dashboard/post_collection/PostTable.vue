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
    buttons: ['copy', 'csv'],
    select: true,
    ordering: false,
    info: true,
    createdRow: (row, data) => {
        const statusCell = row.querySelector("td:last-child");
  
      // Set the cell's background color based on the value of the "status" property
      if (data.post_status === "published") {
        statusCell.style.color = "darkseagreen";
        statusCell.className = "text-uppercase status";
      } else if (data.post_status === "Draft") {
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