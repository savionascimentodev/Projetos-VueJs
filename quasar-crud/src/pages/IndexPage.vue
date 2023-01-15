<template>
  <q-page class="padding">
    <q-table title="Teste" :rows="posts" :columns="columns" row-key="name">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          {{ props.row.id }}
          <q-btn
            icon="delete"
            color="negative"
            dense
            @click="handleDeletePost(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import postsService from "src/services/posts";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const posts = ref([]);
    const { list, remove } = postsService();
    const $q = useQuasar();
    const columns = [
      {
        name: "id",
        field: "id",
        label: "Id",
        sortable: true,
        align: "left",
      },
      {
        name: "title",
        field: "title",
        label: "Titulo",
        sortable: true,
        align: "left",
      },
      {
        name: "author",
        field: "author",
        label: "Autor",
        sortable: true,
        align: "left",
      },
      {
        name: "actions",
        field: "actions",
        label: "Ações",
        align: "right",
      },
    ];

    onMounted(() => {
      getPosts();
    });

    const getPosts = async () => {
      try {
        const data = await list();
        posts.value = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const handleDeletePost = async (id) => {
      console.log(id);
      try {
        $q.dialog({
          title: "Deletar",
          message: "Tem certeza que deseja remover esse post?",
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove(id);
          $q.notify({
            message: "Apagado com sucesso",
            icon: "check",
            color: "positive",
          });
        });

        await getPosts();
      } catch (error) {
        $q.notify({
          message: "Erro ao apagar o post",
          icon: "times",
          color: "negative",
        });
      }
    };

    return {
      posts,
      columns,
      handleDeletePost,
    };
  },
});
</script>
