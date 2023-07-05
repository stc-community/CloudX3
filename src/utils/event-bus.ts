import mitt from "mitt";
import { Pod } from "@/views/container/pods/type";
import type { Service } from "@/views/mesh/services/type";

type Events = {
  deploymentSuccess: boolean;
  podSuccess: boolean;
  currentService: any;
  refreshServices: boolean;
  showPodMonitor: Pod;
  showServiceMonitor: Service;
};

const emitter = mitt<Events>(); // inferred as Emitter<Events>

export default emitter;
