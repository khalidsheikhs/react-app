import type { ComponentType } from "react"

export const lazyRoute = <T extends ComponentType>(
  importFn: () => Promise<{ default: T }>
) => {
  return async () => {
    const module = await importFn()

    return {
      Component: module.default,
    };
  };
}