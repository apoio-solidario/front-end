import { createError, getRouterParam, useRuntimeConfig } from "#imports";
import { defineCachedHandler } from "~/server/utils/defineCachedHandler";

export default defineCachedHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");

  try {
    return await $fetch("/api/campaigns/" + id, {
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
