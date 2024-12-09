import { defineEventHandler } from "#imports";
import { UserRequest } from "~/shared/types/auth/user-request";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody<UserRequest>(event);

  try {
    return await $fetch("/auth/register", {
      method: "POST",
      baseURL: config.AS_API,
      body: body,
    });
  } catch (e: any) {
    const status = e.status || 500;
    throw createError({
      statusCode: status,
      message: e,
    });
  }
});
