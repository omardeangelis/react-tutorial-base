import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Wiki Drink - ${title}`;
  }, [title]);
  return;
};

export default useTitle;
