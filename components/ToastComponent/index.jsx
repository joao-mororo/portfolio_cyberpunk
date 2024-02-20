"use client";

import { toast } from "react-toastify";

const TOASTFY_CONFIG = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export function success(message) {
  // return toast.success(message, TOASTFY_CONFIG);
  console.log(message);
}

export const error = (message) => {
  return toast.error(message, TOASTFY_CONFIG);
};

export const warning = (message) => {
  return toast.warning(message, TOASTFY_CONFIG);
};

export const info = (message) => {
  return toast.info(message, TOASTFY_CONFIG);
};
