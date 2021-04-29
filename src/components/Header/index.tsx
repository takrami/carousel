import React from "react";
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

  const changeLanguage = (e: React.MouseEvent, selectedLang: string): void => {
    e.preventDefault();
    i18n.changeLanguage(selectedLang);
  };
  return (
    <HeaderContainer role="heading" aria-level={1}>
      <HeaderTitle>{t("mainTitle")}</HeaderTitle>
      <Languages>
        {languages.map((language) => (
          <Language key={language} isActive={i18n.language === language}>
            <LanguageText href="#" onClick={(e) => changeLanguage(e, language)}>
              {formatLanguageName(language)}
            </LanguageText>
          </Language>
        ))}
      </Languages>
    </HeaderContainer>
  );
};

export default Header;
