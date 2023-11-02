import { create } from "zustand";

type ExpandedStore = {
    expanded: string | false;
    handleExpand: (panel: string, newExpanded: boolean) =>  void;
  };

  export const useExpanded = create<ExpandedStore>((set) => ({
   expanded: false,
   handleExpand: (panel, newExpanded) => set(() => ({expanded: newExpanded ? panel : false}))
  }));