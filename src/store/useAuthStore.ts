import supabase from "@/lib/SupabaseClient";
import { User } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: null | string;
  role: string | null;
  initialized: boolean;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  role: null,
  initialized: false,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        set({ error: error.message });
        return;
      }

      const user = data.user;
      const role = user.user_metadata.role;

      console.log(role);

      set({
        user,
        role,
      });

      toast.success(".ورود موفقیت آمیز بود");
    } catch (error) {
      console.log(error);
      set({ error: ".خطایی رخ داده است" });
    } finally {
      set({ loading: false });
    }
  },
  logout: async () => {
    set({ loading: true, error: null });

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        set({ error: error.message });
      } else {
        set({ user: null });
      }
    } catch (error) {
      console.log(error);
      set({ error: ".خطایی رخ داده است" });
    } finally {
      set({ loading: false });
    }
  },

  initialize: async () => {
    set({ loading: true });

    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;

      const session = data.session;

      if (session?.user) {
        set({
          user: session.user,
          role: session.user.user_metadata?.role ?? null,
        });
      } else {
        set({
          user: null,
          role: null,
        });
      }
    } catch (error) {
      console.log(error);
      set({
        user: null,
        role: null,
      });
    } finally {
      set({
        loading: false,
        initialized: true,
      });
    }
  },
}));
