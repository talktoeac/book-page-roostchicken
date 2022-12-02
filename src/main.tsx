import React from "react";
import ReactDOM from "react-dom/client";
import { Form, Locals } from "./components";

type FRender = (root: HTMLElement) => void;

const renderForm: FRender = (rootFormElement: HTMLElement) => {
  ReactDOM.createRoot(rootFormElement).render(
    <React.StrictMode>
      <Form />
    </React.StrictMode>
  );
};

const renderLocals: FRender = (rootLocalsElement: HTMLElement) => {
  ReactDOM.createRoot(rootLocalsElement).render(
    <React.StrictMode>
      <Locals />
    </React.StrictMode>
  );
};

const renderInterval = (
  idRoot: string,
  render: FRender,
  miliseconds: number = 1000
) => {
  let exist = false;
  const keyInterval = setInterval(() => {
    const rootElement = document.getElementById(idRoot) as HTMLElement;

    if (!rootElement) return;
    if (exist) {
      exist = false;
      console.log("clearInterval of ", rootElement);
      clearInterval(keyInterval);
    } else {
      exist = true;
      console.log("rendering in->", rootElement);
      render(rootElement);
    }
  }, miliseconds);
};

const initRenderForm = async () => {
  const idRootForm = "roostchicken-reservas-form";

  const rootForm = document.getElementById(idRootForm) as HTMLElement;
  if (rootForm) {
    renderForm(rootForm);
  } else {
    renderInterval(idRootForm, renderForm);
  }
};

const initRenderLocals = async () => {
  const idRootLocals = "roostchicken-reservas-locals";

  const rootForm = document.getElementById(idRootLocals) as HTMLElement;
  if (rootForm) {
    renderLocals(rootForm);
  } else {
    renderInterval(idRootLocals, renderLocals);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  initRenderForm();
  initRenderLocals();
});
