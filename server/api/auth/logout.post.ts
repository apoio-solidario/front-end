import { defineEventHandler } from "#imports";
import { Auth } from "~/shared/types/auth/auth";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  try {
    return await event.$fetch<Auth>("/auth/logout", {
      method: "POST",
      baseURL: config.AS_API,
      onResponse() {
        deleteCookie(event, "SESSION_ID");
      },
    });
  } catch (e: any) {
    const status = e.status || 500;
    throw createError({
      statusCode: status,
      message: e.message || "Something went wrong",
    });
  }
});
