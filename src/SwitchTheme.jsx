import { useContext } from "react";
import { Context } from "./context/SiteContext";

export default function SwitchTheme() {
  const data = useContext(Context);

  //const {theme,setTheme} =useContext(SiteContext)

  return (
    <>
      <button
        onClick={() => data.setTheme(data.theme === "light" ? "dark" : "light")}
      >
        Temayı Değiştir
      </button>
      Mevcut Tema = {data.theme} <br />
    </>
  );
}
