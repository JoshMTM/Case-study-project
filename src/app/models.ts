//Export the beer interface

export interface Beer {
    image_url: string;
    id: number;
    name: string;
    first_brewed: string;
    tagline: string;
    contributed_by: string;
    description: string;
    boil_volume: number;
    Food_pairing: Array<food_pairing>;
    ingredients: Array<ingredients>;

    saved: boolean;

  }

  interface food_pairing {
    name: string;
  }

  interface ingredients {
    id: number;
    amount: number;
    attribute: string;
  }
