import useApi from "src/composables/UseApi";

export default function postsService() {
  const { list, post, remove, update } = useApi('posts')

  return {
    list, post, remove, update
  }
}