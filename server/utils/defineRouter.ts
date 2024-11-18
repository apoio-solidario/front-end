import { useRuntimeConfig } from "#imports";
import { defineEventHandler, H3Event } from "h3";

/**
 * Wrapper for `defineEventHandler` that validates runtime configuration before proceeding.
 * @param handler - The actual event handler function.
 * @returns The wrapped event handler.
 */
export function defineRouter(
  handler: (event: H3Event, config: ReturnType<typeof useRuntimeConfig>) => any
) {
  return defineEventHandler((event) => {
    const config = useRuntimeConfig();

    if (!config.AS_API) {
      throw new Error("AS_API key is not set");
    }

    return handler(event, config);
  });
}
