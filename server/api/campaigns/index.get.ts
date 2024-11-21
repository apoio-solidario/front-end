import { getQuery, useRuntimeConfig } from "#imports";
import { defineRouter } from "~/server/utils/defineRouter";

export default defineRouter(async (event) => {
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
    event.node.req.statusCode = status;
    return e.message;
  }
});
