import { useState } from "react";
import { useTranslation } from "react-i18next";

import locales from "../../locales";
import { getAllLanguages, formatLanguageName } from "../../utils";

import {
  HeaderContainer,
  HeaderTitle,
  Languages,
  Language,
  LanguageText,
} from "./style";

const languages = getAllLanguages(locales);

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [, setLang] = useState(i18n.languages[0]);

  const changeLanguage = (e: any, selectedLang: any) => {
    e.preventDefault();
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };
  return (
    <HeaderContainer>
      <HeaderTitle>{t("mainTitle")}</HeaderTitle>
      <Languages>
        {languages.map((language) => (
          <Language key={language}>
            <LanguageText
              href="#en"
              onClick={(e) => changeLanguage(e, language)}
            >
              {formatLanguageName(language)}
            </LanguageText>
          </Language>
        ))}
      </Languages>
    </HeaderContainer>
  );
};

export default Header;
