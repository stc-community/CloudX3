import mitt from "mitt";

type Events = {
  deploymentSuccess: boolean;
  currentService: object;
};

const emitter = mitt<Events>(); // inferred as Emitter<Events>

export default emitter;
