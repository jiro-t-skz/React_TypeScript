import type { PokemonProps } from "../interfaces";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export function Chart(props: PokemonProps) {
  const data = {
    labels: props.stats.map(stat => stat.stat.name),
    datasets: [
      {
        label: "# of Votes",
        data: props.stats.map(stat => stat.base_stat),
        backgroundColor: "rgba(108, 183, 178, 0.89)",
        borderColor: "rgb(13, 232, 232)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} />;
}
