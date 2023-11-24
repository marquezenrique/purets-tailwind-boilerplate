import { fetchNui } from "../lib/fetchNui";
import { TApp } from "../types/App";
import "./listeners";

export const app: TApp = {
  close: () =>
    fetchNui("removeFocus", {}, true).then((resp) => {
      if (resp) document.body.classList.add("hidden");
    }),
  open: () => document.body.classList.remove("hidden"),
};
