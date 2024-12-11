import { Auth } from "~/shared/types/auth/auth";

export default defineHandler(async (event) => {
  const config = useRuntimeConfig(event);

  try {
    return await event.$fetch<Auth>("/auth/me", {
      baseURL: config.AS_API,
      credentials: "include",
    });
  } catch (e: any) {
    const status = e.status || 500;
    throw createError({
      statusCode: status,
      message: e.message || "Something went wrong",
    });
  }
});
