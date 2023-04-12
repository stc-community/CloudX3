import mitt from "mitt";
import { Pod } from "@/views/container/pods/type";

type Events = {
  deploymentSuccess: boolean;
  podSuccess: boolean;
  currentService: any;
  refreshServices: boolean;
  showPodMonitor: Pod;
};

const emitter = mitt<Events>(); // inferred as Emitter<Events>

export default emitter;
