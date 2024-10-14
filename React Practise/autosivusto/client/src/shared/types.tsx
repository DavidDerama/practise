export type Auto = {
  id: number;
  merkki: string;
  malli: string;
  vuosimalli: number;
  omistaja: string;
};

export type FormData = Omit<Auto, "id">;

export type OutletContextType = {
  notify: (message: string) => void;
};
