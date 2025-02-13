import React, { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';  // Import the pre-initialized i18n instance
import { getLocalStorage } from '../utils/document/localStorage';
import { LocalStorageEnum } from '../enums/LocalStorage';

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  useEffect(() => {
    const currentLanguage = 
      (getLocalStorage(LocalStorageEnum.LANGUAGE_KEY) as string) === 'ar' ? 'ar' : 'en';
    i18n.changeLanguage(currentLanguage);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;