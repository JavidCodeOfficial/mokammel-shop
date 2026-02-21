import { create } from "zustand";
import supabase from "../lib/SupabaseClient";
import toast from "react-hot-toast";

export type Product = {
  id: string;
  title: string;
  price: number;
  rating: number;
  tag: string;
  desc: string;
  image: string;
  category: string;
};

type ProductForm = Omit<Product, "id">;

export type CategoryFilter =
  | "all"
  | "protein"
  | "creatine"
  | "haircare"
  | "amino"
  | "gainer"
  | "burner"
  | "vitamins"
  | "preworkout"
  | "coffee";

type ProductStore = {
  open: boolean;
  loading: boolean;
  form: ProductForm;
  products: Product[];
  search: string;
  category: CategoryFilter;

  setOpen: (value: boolean) => void;
  setField: (field: keyof ProductForm, value: string | number) => void;
  resetForm: () => void;

  fetchProducts: () => Promise<void>;
  addProduct: () => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  editProduct: (id: string) => Promise<void>;

  setForm: (product: ProductForm) => void;

  setSearch: (value: string) => void;
  setCategory: (value: CategoryFilter) => void;

  filteredProducts: () => Product[];
};

const initialForm: ProductForm = {
  title: "",
  price: 0,
  rating: 0,
  tag: "",
  desc: "",
  image: "",
  category: "",
};

export const useProductStore = create<ProductStore>((set, get) => ({
  open: false,
  loading: false,
  form: initialForm,

  products: [],
  search: "",
  category: "all",

  setOpen: (value) => set({ open: value }),

  setField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  resetForm: () => set({ form: initialForm }),

  // populate form with product for editing
  setForm: (product: ProductForm) => set({ form: product }),

  fetchProducts: async () => {
    try {
      set({ loading: true });
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw error;
      set({ products: data || [] });
    } catch (error) {
      toast.error("خطا در دریافت محصولات");
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  addProduct: async () => {
    const { form } = get();
    try {
      set({ loading: true });
      const { error } = await supabase.from("products").insert([form]);
      if (error) throw error;
      toast.success("محصول با موفقیت اضافه شد");
      set({ open: false });
      get().resetForm();
      await get().fetchProducts();
    } catch (err) {
      toast.error("خطا در افزودن محصول");
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    try {
      set({ loading: true });
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
      toast.success("محصول با موفقیت حذف شد");
      await get().fetchProducts();
    } catch (error) {
      toast.error("خطا در حذف محصول");
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  editProduct: async (id) => {
    const { form } = get();
    try {
      set({ loading: true });
      const { error } = await supabase
        .from("products")
        .update(form)
        .eq("id", id);
      if (error) throw error;
      toast.success("محصول با موفقیت ویرایش شد");
      set({ open: false });
      get().resetForm();
      await get().fetchProducts();
    } catch (error) {
      toast.error("خطا در ویرایش محصول");
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  setSearch: (value) => set({ search: value }),
  setCategory: (value) => set({ category: value }),

  filteredProducts: () => {
    const { products, search, category } = get();
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    return filtered;
  },
}));
