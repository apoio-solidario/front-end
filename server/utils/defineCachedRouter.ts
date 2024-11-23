import { defineCachedEventHandler, useRuntimeConfig } from "#imports";
import { H3Event } from "h3";

/**
 * Wrapper for `defineCachedEventHandler` that validates runtime configuration before proceeding.
 * @param handler - The actual event handler function.
 * @returns The wrapped event handler.
 */
export function defineCachedRouter(
  handler: (event: H3Event, config: ReturnType<typeof useRuntimeConfig>) => any
) {
  return defineCachedEventHandler(
    (event) => {
      const config = useRuntimeConfig(event);

      if (!config.AS_API) {
        throw new Error("AS_API key is not set");
      }

      return handler(event, config);
    },
    { maxAge: 60 * 60 /* 1 hour */ }
  );
}
