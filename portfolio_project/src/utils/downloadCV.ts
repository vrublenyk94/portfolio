import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const downloadCV = async () => {
  const storage = getStorage();
  const resumeRef = ref(storage, "Volodymyr_Rublenyk_FrontEnd_Dev.docx.pdf");

  try {
    const url = await getDownloadURL(resumeRef);
    window.open(url, "_blank"); // Открываем файл в новом окне
  } catch (error) {
    console.error("Error downloading resume: ", error);
  }
};
