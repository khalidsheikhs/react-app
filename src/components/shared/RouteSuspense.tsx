import { Suspense, type ReactNode } from "react"

type RouteSuspenseProps = {
  children: ReactNode;
};

const RouteSuspense = ({ children }: RouteSuspenseProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-sm text-slate-500">
            Loading...
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default RouteSuspense