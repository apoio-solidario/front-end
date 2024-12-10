import { defineEventHandler } from "#imports";
import { UserRegister } from "~/shared/types/auth/user-register";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody<UserRegister>(event);

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
