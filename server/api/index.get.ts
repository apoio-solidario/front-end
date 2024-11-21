import { defineEventHandler, getQuery } from "#imports";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);

  return {
    message: "Hello World",
    time: new Date().toLocaleString(),
    params,
  };
});
