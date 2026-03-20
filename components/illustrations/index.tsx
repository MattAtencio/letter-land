import { AppleSVG } from "./AppleSVG";
import { BearSVG } from "./BearSVG";
import { CatSVG } from "./CatSVG";
import { DuckSVG } from "./DuckSVG";
import { ElephantSVG } from "./ElephantSVG";
import { FishSVG } from "./FishSVG";
import { GrapesSVG } from "./GrapesSVG";
import { HatSVG } from "./HatSVG";
import { IceCreamSVG } from "./IceCreamSVG";
import { JellyfishSVG } from "./JellyfishSVG";
import { KiteSVG } from "./KiteSVG";
import { LionSVG } from "./LionSVG";
import { MoonSVG } from "./MoonSVG";
import { NestSVG } from "./NestSVG";
import { OwlSVG } from "./OwlSVG";
import { PenguinSVG } from "./PenguinSVG";
import { QueenSVG } from "./QueenSVG";
import { RocketSVG } from "./RocketSVG";
import { StarSVG } from "./StarSVG";
import { TreeSVG } from "./TreeSVG";
import { UmbrellaSVG } from "./UmbrellaSVG";
import { ViolinSVG } from "./ViolinSVG";
import { WhaleSVG } from "./WhaleSVG";
import { XylophoneSVG } from "./XylophoneSVG";
import { YoyoSVG } from "./YoyoSVG";
import { ZebraSVG } from "./ZebraSVG";
import type { ReactNode } from "react";

const illustrationMap: Record<string, (size: number) => ReactNode> = {
  A: (s) => <AppleSVG size={s} />,
  B: (s) => <BearSVG size={s} />,
  C: (s) => <CatSVG size={s} />,
  D: (s) => <DuckSVG size={s} />,
  E: (s) => <ElephantSVG size={s} />,
  F: (s) => <FishSVG size={s} />,
  G: (s) => <GrapesSVG size={s} />,
  H: (s) => <HatSVG size={s} />,
  I: (s) => <IceCreamSVG size={s} />,
  J: (s) => <JellyfishSVG size={s} />,
  K: (s) => <KiteSVG size={s} />,
  L: (s) => <LionSVG size={s} />,
  M: (s) => <MoonSVG size={s} />,
  N: (s) => <NestSVG size={s} />,
  O: (s) => <OwlSVG size={s} />,
  P: (s) => <PenguinSVG size={s} />,
  Q: (s) => <QueenSVG size={s} />,
  R: (s) => <RocketSVG size={s} />,
  S: (s) => <StarSVG size={s} />,
  T: (s) => <TreeSVG size={s} />,
  U: (s) => <UmbrellaSVG size={s} />,
  V: (s) => <ViolinSVG size={s} />,
  W: (s) => <WhaleSVG size={s} />,
  X: (s) => <XylophoneSVG size={s} />,
  Y: (s) => <YoyoSVG size={s} />,
  Z: (s) => <ZebraSVG size={s} />,
};

export function getIllustration(char: string, size: number): ReactNode {
  const factory = illustrationMap[char];
  return factory ? factory(size) : null;
}
