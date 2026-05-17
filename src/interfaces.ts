export interface PokemonProps {
  id: string;
  name: string;
  is_default: boolean;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface DatasetProps {
  labels: string[];
  data: number;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export interface ChartDataProps {
  labels: string[];
  Datasets: DatasetProps[];
}
