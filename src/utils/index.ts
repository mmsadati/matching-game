import Swal from "sweetalert2";
import { ImageData } from "@/types";

const shuffleImages = (images: ImageData[]) => {
  return [...images, ...images].sort(() => Math.random() - 0.5);
};

const fillArray = (length: number = 10) => {
  return Array.from({ length }, (_, i) => i);
};

const showAlert = (title: string, text: string, icon: "error" | "success") => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "تایید",
  });
};

export { shuffleImages, fillArray, showAlert };
