import { FetchError } from "ofetch";

interface UserState {
  isLoggedIn: boolean;
  id?: string;
  role?: string;
  expires_at?: number;
}

interface UserLogin {
  username: string;
  password: string;
}

interface UserRegister {
  username: string;
  password: string;
}

interface UserError {
  code?: number;
  message?: string;
}

interface User {
  id: string;
  username: string;
  role: string;
  expires_at?: number;
}

/**
 * Auth functions interface to handle user authentication logic.
 */
export const useAuth = () => {
  const state = useState<UserState | null>("auth-user", () => null);
  const error = useState<UserError | null>("auth-error", () => null);

  async function login(body: UserLogin) {
    try {
      const headers = useRequestHeaders(["cookie"]);
      const res = await $fetch<User>("/api/auth/login", {
        method: "POST",
        body,
        headers,
      });

      _setState(res);
    } catch (e: any) {
      error.value = buildError(e);
    }
  }

  async function register(body: UserRegister) {
    try {
      return await $fetch<User>("/api/auth/register", {
        method: "POST",
        body,
      });
    } catch (e: any) {
      error.value = buildError(e);
    }
  }

  async function logout() {
    try {
      const headers = useRequestHeaders(["cookie"]);
      await $fetch<User>("/api/auth/logout", {
        method: "POST",
        headers,
      });

      _clearState();
    } catch (e: any) {
      error.value = buildError(e);
    }
  }

  async function renew(force: boolean = false) {
    const now = new Date();
    const diff = Math.round(
      (Number(state.value?.expires_at) - now.getTime()) / 1000
    );

    if (diff < 0) {
      _clearState();

      error.value = {
        code: 409,
        message: "Session expired. Please login again",
      };

      return;
    }

    if (force || diff <= 5 * 60) {
      try {
        const headers = useRequestHeaders(["cookie"]);
        const res = await $fetch<{ expires_at: number }>("/api/auth/renew", {
          method: "POST",
          headers,
        });

        state.value!.expires_at = res.expires_at;
      } catch (e: any) {
        error.value = buildError(e);
      }
    }

    return;
  }

  async function initState() {
    const session = useCookie("SESSION_ID");
    if (!session.value) return;

    const user = await getUser();
    if (error.value) {
      // Problably an old session, logout to delete the cookie
      return;
    }

    _setState(user!);
  }

  async function getUser() {
    try {
      const headers = useRequestHeaders(["cookie"]);
      return await $fetch<User>("/api/auth/me", {
        credentials: "include",
        headers,
      });
    } catch (e: any) {
      error.value = buildError(e);
    }
  }

  function clearError() {
    error.value = {
      code: undefined,
      message: undefined,
    };
  }

  function _clearState() {
    state.value = {
      isLoggedIn: false,
      id: undefined,
      role: undefined,
      expires_at: undefined,
    };
  }

  function _setState(user: User) {
    state.value = {
      isLoggedIn: true,
      id: user.id,
      role: user.role,
      expires_at: user.expires_at,
    };
  }

  function buildError(e: any): UserError {
    if (e instanceof FetchError) {
      return { code: e.statusCode, message: e.message };
    }

    return {
      code: 500,
      message: "Something went wrong!",
    };
  }

  return {
    /**
     * Returns the current user state.
     * This state holds the user information, such as the user's ID and role.
     * It will return `null` if no user is authenticated or the state is not set.
     */
    state: computed(() => state.value),
    /**
     * Returns the current error state.
     * This contains any error message that occurred during authentication actions.
     * If no error occurred, it will return `null`.
     */
    error: computed(() => error.value),
    /**
     * Clears the current error state.
     * This function is called to reset the error state after an error has been handled.
     */
    clearError,
    /**
     * Function to log the user in.
     * It sends a request to the server with the provided credentials and updates the state.
     */
    login,
    /**
     * Function to register a new user.
     * It sends a request to the server with user registration data and updates the state.
     */
    register,
    /**
     * Function to log the user out.
     * It clears the user session and updates the state.
     */
    logout,
    /**
     * Function to renew the user session.
     *
     * @param {boolean} force - If set to `true`, the session will be renewed even if it is not near expiration.
     */
    renew,
    /**
     * Function to get the user data.
     * It fetches the user details from the server and updates the state.
     */
    getUser,
    /**
     * Function to initialize the state.
     * It can be used to set up the initial user state.
     */
    initState,
  };
};
