import { defineEventHandler } from "#imports";
import { Auth } from "~/shared/types/auth/auth";
import { User } from "~/shared/types/auth/user";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody<User>(event);

  try {
    return await event.$fetch<Auth>("/auth/login", {
      method: "POST",
      baseURL: config.AS_API,
      body: body,
      onResponse(ctx) {
        appendResponseHeaders(event, {
          "set-cookie": ctx.response.headers.getSetCookie(),
        });
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
