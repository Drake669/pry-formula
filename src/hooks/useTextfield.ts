import { create } from "zustand";

type TextFieldStore = {
    isTextField: boolean;
    value: string;
    showTextField: () => void;
    hideTextField: () => void;
    changeTextFieldValue: (param: string) => void;
  };

  export const useTextField = create<TextFieldStore>((set) => ({
    isTextField: false,
    value: "Revenue",
    showTextField: () => set((state) => ({isTextField: true, value: state.value})),
    hideTextField: () => set((state) => ({isTextField: false, value: state.value})),
    changeTextFieldValue: (param) => set({ value: param})
  }));