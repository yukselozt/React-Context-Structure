import { useContext } from "react";
import { Context } from "./context/SiteContext";

export default function SwitchLanguage() {
  const data = useContext(Context);

  //const {language,setLanguage} =useContext(SiteContext)

  return (
    <>
      <button
        onClick={() => data.setLanguage(data.language === "tr" ? "en" : "tr")}
      >
        Dili Değiştir
      </button>
      Mevcut Dil = {data.language} <br />
    </>
  );
}
