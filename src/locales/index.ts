import EN from "./default.en.json";
import SE from "./default.se.json";

import { LocaleInterface } from "../types";

// Register more languages here.
const langs: LocaleInterface = {
  ...EN,
  ...SE,
};

export default langs;
