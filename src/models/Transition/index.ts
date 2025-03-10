import { CanvasContextType } from "@_types/index";

abstract class Transition {
  abstract canvas2d: HTMLCanvasElement;
  abstract canvasWebgl: HTMLCanvasElement;
  abstract contextType: CanvasContextType;
  abstract triggerAnimation: () => Promise<void>;
}

export default Transition;
