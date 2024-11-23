import { createError, getQuery, useRuntimeConfig } from "#imports";
import { defineCachedRouter } from "~/server/utils/defineCachedRouter";

export default defineCachedRouter(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);

  try {
    return await $fetch("/campaigns", {
      baseURL: config.AS_API,
      params: {
        ...query,
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
