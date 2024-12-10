import { useAuth } from "~/composables/auth";

export default defineNuxtPlugin(async () => {
  const { initState } = useAuth();
  await initState();
});
