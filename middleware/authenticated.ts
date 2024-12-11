export default defineNuxtRouteMiddleware((to) => {
  const { state } = useAuth();
  const routes = ["/app/login/", "/sou-uma-ong/"];

  if (state.value.isLoggedIn) {
    if (routes.includes(to.path)) return navigateTo("/app/");
    return;
  }

  // Avoid looping (infinite redirection)
  if (to.path === "/app/login/") return;
  if (to.path === "/sou-uma-ong/") return;

  return navigateTo("/app/login/");
});
