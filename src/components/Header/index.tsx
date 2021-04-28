import { useState } from "react";
import { useTranslation } from "react-i18next";
import locales from "../../locales";
import { getAllLanguages, formatLanguageName } from "../../utils";

import { HeaderContainer } from "./style";

const languages = getAllLanguages(locales);

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.languages[0]);

  const changeLanguage = (e: any, selectedLang: any) => {
    e.preventDefault();
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };
  return (
    <HeaderContainer>
      {t("mainTitle")}
      {languages.map((language) => (
        <div key={language}>
          <a
            href="#en"
            className={lang === language ? "active" : ""}
            onClick={(e) => changeLanguage(e, language)}
          >
            {formatLanguageName(language)}
          </a>
        </div>
      ))}
    </HeaderContainer>
  );
};

export default Header;
