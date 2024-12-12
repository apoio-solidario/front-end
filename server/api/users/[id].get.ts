import { createError, getRouterParam, useRuntimeConfig } from "#imports";
import { defineHandler } from "~/server/utils/defineHandler";

export default defineHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");

  try {
    return await event.$fetch("/users/" + id, {
      baseURL: config.AS_API,
    });
  } catch (e: any) {
    const status = e.status || 500;
    throw createError({
      statusCode: status,
      message: e.message || "Something went wrong",
    });
  }
});
