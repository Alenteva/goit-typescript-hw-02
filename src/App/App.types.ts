// Тип для зображення
export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

export interface RegularImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

export interface SmallImage {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}
