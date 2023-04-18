import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { isAndroid } from "../style";
const DW = isAndroid ? "keyboardDid" : "keyboardWill";
export function useActiveKeyboard() {
  let [active, setActive] = useState(false);
  useEffect(() => {
    let ks = Keyboard.addListener(`${DW}Show`, () => setActive(true));
    let kh = Keyboard.addListener(`${DW}Hide`, () => setActive(false));
    return () => {
      ks.remove();
      kh.remove();
    };
  }, []);
  return active;
}
