import mitt from "mitt";

type Events = {
  deploymentSuccess: boolean;
};

const emitter = mitt<Events>(); // inferred as Emitter<Events>

export default emitter;
