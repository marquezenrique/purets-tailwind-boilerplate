import { MessageListener } from "../types/MessageListener";
import { app } from "./app";

document.querySelector<HTMLDivElement>("#close")?.addEventListener("click", () => {
    app.close();
  });

window.addEventListener("message", ({ data }: { data: MessageListener }) => {
  if (data.action === "showUi") app.open();
});
