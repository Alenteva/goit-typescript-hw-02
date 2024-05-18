// Тип для зображення
export interface Image {
  id: string;
  width: number;
  height: number;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
  };
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

export interface SearchResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
