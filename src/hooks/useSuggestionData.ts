import { create } from "zustand";

interface Data {
    name: string;
    value: string;
    category: string;
}

type SuggestionStore = {
    data: Data[] 
    setData: (param: Data[]) => void;
  };

  export const useSuggestionData = create<SuggestionStore>((set) => ({
   data: [{name: "", value: "", category: ""}],
   setData: (param) => set({data: param})
  }));