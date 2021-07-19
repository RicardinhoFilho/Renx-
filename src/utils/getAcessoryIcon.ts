import SpeedSvg from "../assets/speed.svg";
import AcelerateSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from "../assets/car.svg";

export function getAcessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AcelerateSvg;
    case "turning_diameter":
      return ForceSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "exchange":
      return ExchangeSvg;
    case "seats":
      return PeopleSvg;
    case "electric_motor":
      return EnergySvg;
    case "hybrid_motor":
      return HybridSvg;

    default:
        return CarSvg;
      break;
  }
}
