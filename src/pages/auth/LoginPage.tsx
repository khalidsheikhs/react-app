import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Enter your credentials to access your account.
        </p>
      </div>

      {/* Login Form */}
      <form className="mt-8 space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Remember me */}
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />

          <label
            htmlFor="remember"
            className="ml-2 text-sm text-slate-600"
          >
            Remember me
          </label>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.99]"
        >
          Sign in
        </button>
      </form>

      {/* Register */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-primary hover:text-blue-700"
        >
          Create an account
        </Link>
      </p>
    </div>
  )
}

export default LoginPage