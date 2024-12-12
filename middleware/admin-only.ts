export default defineNuxtRouteMiddleware((to) => {
  const { state } = useAuth();

  if (state.value.isLoggedIn && state.value.user?.role === "ADMIN") {
    return;
  }

  return navigateTo("/app/");
});
