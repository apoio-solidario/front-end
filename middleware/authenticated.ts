export default defineNuxtRouteMiddleware((to) => {
  const { state } = useAuth();
  const routes = ["/app/login/", "/sou-uma-ong/"];

  if (state.value && state.value.isLoggedIn) {
    if (routes.includes(to.path)) return navigateTo("/app/");
  }
});
