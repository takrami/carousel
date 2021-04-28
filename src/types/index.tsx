interface SlideInterface {
  id: number;
  title: string;
  description: string;
  delay: number;
  image: string;
}

interface LocaleInterface {
  [key: string]: {
    translation: object;
  };
}

export type { SlideInterface, LocaleInterface };
