export default [
  {
    metadata: {
      name: "imagesync-1676270395917-job-7jss7-n8pkx",
      generateName: "imagesync-1676270395917-job-7jss7-",
      namespace: "default",
      selfLink:
        "/api/v1/namespaces/default/pods/imagesync-1676270395917-job-7jss7-n8pkx",
      uid: "0e80e853-abf0-4a8e-867d-039d1b934c6e",
      resourceVersion: "2628819005",
      creationTimestamp: "2023-03-13T09:37:55Z",
      labels: {
        "controller-uid": "509fb0d5-3c3a-4c92-9072-0d80c9f70146",
        "job-name": "imagesync-1676270395917-job-7jss7",
        "kos.io/image-sync": "true",
        "kos.io/image-sync-name": "imagesync-1676270395917"
      },
      annotations: {
        "kubernetes.io/egress-bandwidth": "0.5M",
        "kubernetes.io/ingress-bandwidth": "0.5M",
        "msp-status": "Running"
      },
      ownerReferences: [
        {
          apiVersion: "batch/v1",
          kind: "Job",
          name: "imagesync-1676270395917-job-7jss7",
          uid: "509fb0d5-3c3a-4c92-9072-0d80c9f70146",
          controller: true,
          blockOwnerDeletion: true
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "volume-imagesync-1676270395917gcl9s",
          configMap: {
            name: "imagesync-1676270395917-configmap",
            defaultMode: 420
          }
        },
        {
          name: "default-token-rg8gt",
          secret: {
            secretName: "default-token-rg8gt",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "image-sync",
          image: "harbor.oneitfarm.com/zhirenyun/kos-image-syncer:latest",
          command: [
            "/usr/local/bin/kos-image-syncer",
            "--config=/etc/image-syncer/image-syncer.json",
            "--proc=1",
            "--retries=3"
          ],
          resources: {
            limits: {
              cpu: "300m",
              memory: "300M"
            },
            requests: {
              cpu: "200m",
              memory: "100M"
            }
          },
          volumeMounts: [
            {
              name: "volume-imagesync-1676270395917gcl9s",
              readOnly: true,
              mountPath: "/etc/image-syncer"
            },
            {
              name: "default-token-rg8gt",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "Always"
        }
      ],
      restartPolicy: "OnFailure",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s002-w-34-241",
      securityContext: {},
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Running",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:55Z"
        },
        {
          type: "Ready",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:57Z"
        },
        {
          type: "ContainersReady",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:57Z"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:55Z"
        }
      ],
      hostIP: "192.168.34.241",
      podIP: "10.58.159.143",
      podIPs: [
        {
          ip: "10.58.159.143"
        }
      ],
      startTime: "2023-03-13T09:37:55Z",
      containerStatuses: [
        {
          name: "image-sync",
          state: {
            running: {
              startedAt: "2023-03-13T09:37:57Z"
            }
          },
          lastState: {},
          ready: true,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/kos-image-syncer:latest",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/kos-image-syncer@sha256:b2e73b8120ef1a253d8e478bb03b65853daf20776df92c888cc9bbd8e9447b96",
          containerID:
            "docker://23b69306648a735108780a7e9cb5660e209915e88d7b3bf102cff3335f434465",
          started: true
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "imagesync-1676269987029-job-kvrh4-hvnsj",
      generateName: "imagesync-1676269987029-job-kvrh4-",
      namespace: "default",
      selfLink:
        "/api/v1/namespaces/default/pods/imagesync-1676269987029-job-kvrh4-hvnsj",
      uid: "872f08c5-deb7-45db-b33e-32779c6a098b",
      resourceVersion: "2628818683",
      creationTimestamp: "2023-03-13T09:37:46Z",
      labels: {
        "controller-uid": "513ba928-b167-4c4c-91a0-a71f126fab03",
        "job-name": "imagesync-1676269987029-job-kvrh4",
        "kos.io/image-sync": "true",
        "kos.io/image-sync-name": "imagesync-1676269987029"
      },
      annotations: {
        "kubernetes.io/egress-bandwidth": "0.5M",
        "kubernetes.io/ingress-bandwidth": "0.5M",
        "msp-status": "Running"
      },
      ownerReferences: [
        {
          apiVersion: "batch/v1",
          kind: "Job",
          name: "imagesync-1676269987029-job-kvrh4",
          uid: "513ba928-b167-4c4c-91a0-a71f126fab03",
          controller: true,
          blockOwnerDeletion: true
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "volume-imagesync-1676269987029v7ff5",
          configMap: {
            name: "imagesync-1676269987029-configmap",
            defaultMode: 420
          }
        },
        {
          name: "default-token-rg8gt",
          secret: {
            secretName: "default-token-rg8gt",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "image-sync",
          image: "harbor.oneitfarm.com/zhirenyun/kos-image-syncer:latest",
          command: [
            "/usr/local/bin/kos-image-syncer",
            "--config=/etc/image-syncer/image-syncer.json",
            "--proc=1",
            "--retries=3"
          ],
          resources: {
            limits: {
              cpu: "300m",
              memory: "300M"
            },
            requests: {
              cpu: "200m",
              memory: "100M"
            }
          },
          volumeMounts: [
            {
              name: "volume-imagesync-1676269987029v7ff5",
              readOnly: true,
              mountPath: "/etc/image-syncer"
            },
            {
              name: "default-token-rg8gt",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "Always"
        }
      ],
      restartPolicy: "OnFailure",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s002-w-34-246",
      securityContext: {},
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Running",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:46Z"
        },
        {
          type: "Ready",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:49Z"
        },
        {
          type: "ContainersReady",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:49Z"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:37:46Z"
        }
      ],
      hostIP: "192.168.34.246",
      podIP: "10.62.129.141",
      podIPs: [
        {
          ip: "10.62.129.141"
        }
      ],
      startTime: "2023-03-13T09:37:46Z",
      containerStatuses: [
        {
          name: "image-sync",
          state: {
            running: {
              startedAt: "2023-03-13T09:37:47Z"
            }
          },
          lastState: {},
          ready: true,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/kos-image-syncer:latest",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/kos-image-syncer@sha256:b2e73b8120ef1a253d8e478bb03b65853daf20776df92c888cc9bbd8e9447b96",
          containerID:
            "docker://b724b9b3358037a41db18fdb3461f203f305b82c597af979f6390df83a198006",
          started: true
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "ssl-handshake-1678700155",
      namespace: "kuberhealthy",
      selfLink: "/api/v1/namespaces/kuberhealthy/pods/ssl-handshake-1678700155",
      uid: "9dd0fed1-b32e-49bc-ae02-2ecaa7a8b487",
      resourceVersion: "2628814296",
      creationTimestamp: "2023-03-13T09:36:00Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "ssl-handshake",
        "kuberhealthy-run-id": "19de56f2-b5d9-4dc8-a7c1-83fc207c8e88"
      },
      annotations: {
        "comcast.github.io/check-name": "ssl-handshake",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "default-token-mffsm",
          secret: {
            secretName: "default-token-mffsm",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "main",
          image: "harbor.oneitfarm.com/zhirenyun/ssl-handshake-checker:latest",
          env: [
            {
              name: "DOMAIN_NAME",
              value: "kubernetes.default"
            },
            {
              name: "PORT",
              value: "443"
            },
            {
              name: "SELF_SIGNED",
              value: "true"
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "19de56f2-b5d9-4dc8-a7c1-83fc207c8e88"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678701055"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            requests: {
              cpu: "10m",
              memory: "50Mi"
            }
          },
          volumeMounts: [
            {
              name: "default-token-mffsm",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "Always"
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s002-w-34-37",
      securityContext: {},
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:36:00Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:36:08Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:36:08Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:36:00Z"
        }
      ],
      hostIP: "192.168.34.37",
      podIP: "10.56.141.4",
      podIPs: [
        {
          ip: "10.56.141.4"
        }
      ],
      startTime: "2023-03-13T09:36:00Z",
      containerStatuses: [
        {
          name: "main",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:36:02Z",
              finishedAt: "2023-03-13T09:36:07Z",
              containerID:
                "docker://37faa180cede403754269361c8aaab6c1842cc85a0c47fd7dc738653f0e4ebd4"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/ssl-handshake-checker:latest",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/ssl-handshake-checker@sha256:f07c382bec6e31127a91eacf2a1d4a3bb6707fb926b24abd307d5b8aecf8be06",
          containerID:
            "docker://37faa180cede403754269361c8aaab6c1842cc85a0c47fd7dc738653f0e4ebd4",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "network-connection-check-1678700097",
      namespace: "kuberhealthy",
      selfLink:
        "/api/v1/namespaces/kuberhealthy/pods/network-connection-check-1678700097",
      uid: "e76af3ec-95a8-4d80-a496-49cf4aaebda4",
      resourceVersion: "2628811952",
      creationTimestamp: "2023-03-13T09:35:02Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "network-connection-check",
        "kuberhealthy-run-id": "1da464c1-eb3b-46fc-be1e-15c06e2fddb5"
      },
      annotations: {
        "comcast.github.io/check-name": "network-connection-check",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "default-token-mffsm",
          secret: {
            secretName: "default-token-mffsm",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "deployment",
          image:
            "harbor.oneitfarm.com/zhirenyun/network-connection-check:v0.2.0",
          env: [
            {
              name: "CONNECTION_TARGET",
              value: "tcp://baidu.com:443"
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "1da464c1-eb3b-46fc-be1e-15c06e2fddb5"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678700997"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            requests: {
              cpu: "10m",
              memory: "5Mi"
            }
          },
          volumeMounts: [
            {
              name: "default-token-mffsm",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "IfNotPresent"
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s002-w-34-36",
      securityContext: {},
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:35:02Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:35:10Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:35:10Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:35:02Z"
        }
      ],
      hostIP: "192.168.34.36",
      podIP: "10.59.151.160",
      podIPs: [
        {
          ip: "10.59.151.160"
        }
      ],
      startTime: "2023-03-13T09:35:02Z",
      containerStatuses: [
        {
          name: "deployment",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:35:03Z",
              finishedAt: "2023-03-13T09:35:09Z",
              containerID:
                "docker://00dbd91296e3130f207f094fd738963b086204fd5563f8fc614ca6ff1c99deaf"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image:
            "harbor.oneitfarm.com/zhirenyun/network-connection-check:v0.2.0",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/network-connection-check@sha256:0761eebe30abf1aeb861f41555029322bb3e934894d8905d6b1d68c0d15968f0",
          containerID:
            "docker://00dbd91296e3130f207f094fd738963b086204fd5563f8fc614ca6ff1c99deaf",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "cronjob-checker-1678700066",
      namespace: "kuberhealthy",
      selfLink:
        "/api/v1/namespaces/kuberhealthy/pods/cronjob-checker-1678700066",
      uid: "9f456651-2823-45c9-bf3a-1fef133c5f01",
      resourceVersion: "2628810669",
      creationTimestamp: "2023-03-13T09:34:31Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "cronjob-checker",
        "kuberhealthy-run-id": "e7866447-7735-470d-bb51-de73a3a0aeea"
      },
      annotations: {
        "comcast.github.io/check-name": "cronjob-checker",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "cronjob-checker-token-6fpfv",
          secret: {
            secretName: "cronjob-checker-token-6fpfv",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "cronjob-checker",
          image: "harbor.oneitfarm.com/zhirenyun/cronjob-checker:v2.1.0",
          env: [
            {
              name: "NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "e7866447-7735-470d-bb51-de73a3a0aeea"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678700966"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            limits: {
              cpu: "25m"
            },
            requests: {
              cpu: "15m",
              memory: "15Mi"
            }
          },
          volumeMounts: [
            {
              name: "cronjob-checker-token-6fpfv",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "IfNotPresent"
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 5,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "cronjob-checker",
      serviceAccount: "cronjob-checker",
      nodeName: "s002-w-34-36",
      securityContext: {},
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:34:31Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:34:38Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:34:38Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:34:31Z"
        }
      ],
      hostIP: "192.168.34.36",
      podIP: "10.59.151.160",
      podIPs: [
        {
          ip: "10.59.151.160"
        }
      ],
      startTime: "2023-03-13T09:34:31Z",
      containerStatuses: [
        {
          name: "cronjob-checker",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:34:35Z",
              finishedAt: "2023-03-13T09:34:37Z",
              containerID:
                "docker://9dc66df02e7396c5f42e4a41689fd817e90890a39809befa137399cfaccd5cfb"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/cronjob-checker:v2.1.0",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/cronjob-checker@sha256:d8657ba99037a5741b48bb75abc561bfc9266f853b3057e92d5af48e8c7ea67b",
          containerID:
            "docker://9dc66df02e7396c5f42e4a41689fd817e90890a39809befa137399cfaccd5cfb",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "pod-status-1678699981",
      namespace: "kuberhealthy",
      selfLink: "/api/v1/namespaces/kuberhealthy/pods/pod-status-1678699981",
      uid: "0165318c-ecf9-4e8f-aaab-27e3fe07a7d1",
      resourceVersion: "2628807187",
      creationTimestamp: "2023-03-13T09:33:06Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "pod-status",
        "kuberhealthy-run-id": "fa2af09c-620a-490d-82fc-52628d579fbc"
      },
      annotations: {
        "comcast.github.io/check-name": "pod-status",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "pod-status-sa-token-scw5j",
          secret: {
            secretName: "pod-status-sa-token-scw5j",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "main",
          image: "harbor.oneitfarm.com/zhirenyun/pod-status-checker:latest",
          env: [
            {
              name: "SKIP_DURATION",
              value: "10m"
            },
            {
              name: "TARGET_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "fa2af09c-620a-490d-82fc-52628d579fbc"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678700881"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            requests: {
              cpu: "10m",
              memory: "50Mi"
            }
          },
          volumeMounts: [
            {
              name: "pod-status-sa-token-scw5j",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "IfNotPresent",
          securityContext: {
            readOnlyRootFilesystem: true,
            allowPrivilegeEscalation: false
          }
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "pod-status-sa",
      serviceAccount: "pod-status-sa",
      nodeName: "s002-w-34-37",
      securityContext: {
        runAsUser: 999,
        fsGroup: 999
      },
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:33:06Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:33:12Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:33:12Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:33:06Z"
        }
      ],
      hostIP: "192.168.34.37",
      podIP: "10.56.141.6",
      podIPs: [
        {
          ip: "10.56.141.6"
        }
      ],
      startTime: "2023-03-13T09:33:06Z",
      containerStatuses: [
        {
          name: "main",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:33:07Z",
              finishedAt: "2023-03-13T09:33:11Z",
              containerID:
                "docker://478ebee7ba1fbc743f450dc54919dd07bf64f0fb2e1fc990085d5a3160a9f71b"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/pod-status-checker:latest",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/pod-status-checker@sha256:0fe42502dab66bcfcab497294aff04e5eaf918433c672998650ced14bdcbf347",
          containerID:
            "docker://478ebee7ba1fbc743f450dc54919dd07bf64f0fb2e1fc990085d5a3160a9f71b",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "daemonset-1678699930",
      namespace: "kuberhealthy",
      selfLink: "/api/v1/namespaces/kuberhealthy/pods/daemonset-1678699930",
      uid: "71ef4d63-abf0-4e18-8526-7155ed0eb853",
      resourceVersion: "2628806471",
      creationTimestamp: "2023-03-13T09:32:15Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "daemonset",
        "kuberhealthy-run-id": "572c3453-48c5-4d1d-9ae9-d6d154c76c31"
      },
      annotations: {
        "comcast.github.io/check-name": "daemonset",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "daemonset-khcheck-token-4gjhl",
          secret: {
            secretName: "daemonset-khcheck-token-4gjhl",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "main",
          image: "harbor.oneitfarm.com/zhirenyun/daemonset-check:v3.3.0",
          env: [
            {
              name: "POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            },
            {
              name: "CHECK_POD_TIMEOUT",
              value: "10m"
            },
            {
              name: "NODE_SELECTOR",
              value: "node-role.kubernetes.io/master="
            },
            {
              name: "PAUSE_CONTAINER_IMAGE",
              value: "gcr.oneitfarm.com/google-containers/pause:3.1"
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "572c3453-48c5-4d1d-9ae9-d6d154c76c31"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678700830"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            requests: {
              cpu: "10m",
              memory: "50Mi"
            }
          },
          volumeMounts: [
            {
              name: "daemonset-khcheck-token-4gjhl",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "IfNotPresent",
          securityContext: {
            readOnlyRootFilesystem: true,
            allowPrivilegeEscalation: false
          }
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "daemonset-khcheck",
      serviceAccount: "daemonset-khcheck",
      nodeName: "s002-w-34-37",
      securityContext: {
        runAsUser: 999,
        fsGroup: 999
      },
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:32:15Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:32:53Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:32:53Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:32:15Z"
        }
      ],
      hostIP: "192.168.34.37",
      podIP: "10.56.141.5",
      podIPs: [
        {
          ip: "10.56.141.5"
        }
      ],
      startTime: "2023-03-13T09:32:15Z",
      containerStatuses: [
        {
          name: "main",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:32:16Z",
              finishedAt: "2023-03-13T09:32:52Z",
              containerID:
                "docker://354f739feadb7b320328765f5c2f77feac8fd138a0880bc515564511b88289bc"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/daemonset-check:v3.3.0",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/daemonset-check@sha256:2050dcd2d2833a12ee51ebd47fe41839d33a63e63b5b85d2ce9667653ec3b7a9",
          containerID:
            "docker://354f739feadb7b320328765f5c2f77feac8fd138a0880bc515564511b88289bc",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "dns-status-internal-1678699804",
      namespace: "kuberhealthy",
      selfLink:
        "/api/v1/namespaces/kuberhealthy/pods/dns-status-internal-1678699804",
      uid: "582846f2-7b01-413d-a4c9-4382b6e7bb68",
      resourceVersion: "2628800056",
      creationTimestamp: "2023-03-13T09:30:09Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "dns-status-internal",
        "kuberhealthy-run-id": "82f86823-1063-4b95-9a72-6962012322f9"
      },
      annotations: {
        "comcast.github.io/check-name": "dns-status-internal",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "default-token-mffsm",
          secret: {
            secretName: "default-token-mffsm",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "main",
          image: "harbor.oneitfarm.com/zhirenyun/dns-resolution-check:v1.5.0",
          env: [
            {
              name: "NODE_NAME",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "spec.nodeName"
                }
              }
            },
            {
              name: "HOSTNAME",
              value: "kubernetes.default"
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "82f86823-1063-4b95-9a72-6962012322f9"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678700704"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            requests: {
              cpu: "10m",
              memory: "50Mi"
            }
          },
          volumeMounts: [
            {
              name: "default-token-mffsm",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "IfNotPresent",
          securityContext: {
            readOnlyRootFilesystem: true,
            allowPrivilegeEscalation: false
          }
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s002-w-34-37",
      securityContext: {
        runAsUser: 999,
        fsGroup: 999
      },
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:30:09Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:30:14Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:30:14Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:30:09Z"
        }
      ],
      hostIP: "192.168.34.37",
      podIP: "10.56.141.45",
      podIPs: [
        {
          ip: "10.56.141.45"
        }
      ],
      startTime: "2023-03-13T09:30:09Z",
      containerStatuses: [
        {
          name: "main",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:30:10Z",
              finishedAt: "2023-03-13T09:30:13Z",
              containerID:
                "docker://bab14e2993927b2ea712aee1c78e644063770e85a5dc3dbfe27f84cb1d03f0e1"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/dns-resolution-check:v1.5.0",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/dns-resolution-check@sha256:f35a8d20f0a6dd85dbfc8ff3f53cceacdab0be9de5e2c121a0a1b2ef56872616",
          containerID:
            "docker://bab14e2993927b2ea712aee1c78e644063770e85a5dc3dbfe27f84cb1d03f0e1",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "docker-push-1678699497",
      namespace: "kuberhealthy",
      selfLink: "/api/v1/namespaces/kuberhealthy/pods/docker-push-1678699497",
      uid: "c412832e-ed84-4223-b4e6-670a245427be",
      resourceVersion: "2628787772",
      creationTimestamp: "2023-03-13T09:25:02Z",
      labels: {
        app: "kuberhealthy-check",
        "kuberhealthy-check-name": "docker-push",
        "kuberhealthy-run-id": "17874bb6-2db8-4dc4-b098-9b5521f3c120"
      },
      annotations: {
        "comcast.github.io/check-name": "docker-push",
        "msp-status": "Completed"
      },
      ownerReferences: [
        {
          apiVersion: "v1",
          kind: "Pod",
          name: "kuberhealthy-76f966f89-mqp98",
          uid: "74e30f56-768a-4e27-8607-be018b5c4749"
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "volume-dockersock",
          hostPath: {
            path: "/var/run/docker.sock",
            type: "File"
          }
        },
        {
          name: "default-token-mffsm",
          secret: {
            secretName: "default-token-mffsm",
            defaultMode: 420
          }
        }
      ],
      containers: [
        {
          name: "docker-push",
          image: "harbor.oneitfarm.com/zhirenyun/docker-push-checker:v1.0.0",
          env: [
            {
              name: "DOCKER_API_VERSION",
              value: "1.40"
            },
            {
              name: "DOCKER_PUSH_IMAGE",
              value: "harbor.oneitfarm.com/test/alpine:latest"
            },
            {
              name: "DOCKER_USER",
              value: "docker-test"
            },
            {
              name: "DOCKER_PWD",
              value: "Ci@12345"
            },
            {
              name: "KH_REPORTING_URL",
              value: "http://kuberhealthy.kuberhealthy/externalCheckStatus"
            },
            {
              name: "KH_RUN_UUID",
              value: "17874bb6-2db8-4dc4-b098-9b5521f3c120"
            },
            {
              name: "KH_CHECK_RUN_DEADLINE",
              value: "1678700397"
            },
            {
              name: "KH_POD_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            }
          ],
          resources: {
            limits: {
              cpu: "100m"
            },
            requests: {
              cpu: "25m",
              memory: "15Mi"
            }
          },
          volumeMounts: [
            {
              name: "volume-dockersock",
              mountPath: "/var/run/docker.sock"
            },
            {
              name: "default-token-mffsm",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "Always",
          securityContext: {
            privileged: true,
            runAsUser: 0
          }
        }
      ],
      restartPolicy: "Never",
      terminationGracePeriodSeconds: 60,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s003-w-34-43",
      securityContext: {},
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Succeeded",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:25:02Z",
          reason: "PodCompleted"
        },
        {
          type: "Ready",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:25:10Z",
          reason: "PodCompleted"
        },
        {
          type: "ContainersReady",
          status: "False",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:25:10Z",
          reason: "PodCompleted"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:25:02Z"
        }
      ],
      hostIP: "192.168.34.43",
      podIP: "10.60.105.27",
      podIPs: [
        {
          ip: "10.60.105.27"
        }
      ],
      startTime: "2023-03-13T09:25:02Z",
      containerStatuses: [
        {
          name: "docker-push",
          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:25:04Z",
              finishedAt: "2023-03-13T09:25:09Z",
              containerID:
                "docker://239ecc126bd213c06be6aca4dd33404472625996ba97606e723e9e6d6cb8abd3"
            }
          },
          lastState: {},
          ready: false,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/docker-push-checker:v1.0.0",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/docker-push-checker@sha256:d196d823f852eca32129b278b0410d4f4909a533ba5c8d79c5ab2c5b48d5fff9",
          containerID:
            "docker://239ecc126bd213c06be6aca4dd33404472625996ba97606e723e9e6d6cb8abd3",
          started: false
        }
      ],
      qosClass: "Burstable"
    }
  },
  {
    metadata: {
      name: "dp-c9jdbddgqongh-6fb5d44b4d-c9gmk",
      generateName: "dp-c9jdbddgqongh-6fb5d44b4d-",
      namespace: "ns-deploy",
      selfLink:
        "/api/v1/namespaces/ns-deploy/pods/dp-c9jdbddgqongh-6fb5d44b4d-c9gmk",
      uid: "82b67d44-c746-4b8c-a02e-37a3204f5874",
      resourceVersion: "2628783249",
      creationTimestamp: "2023-03-13T09:22:53Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "dp-c9jdbddgqongh",
        deploy_type: "deployment",
        deployserver_appid: "3b82aad04d774706aeab7a3be28ace67",
        deployserver_appversion: "3.0.99",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        parent_app: "dp-c9jdbddgqongh",
        "pod-template-hash": "6fb5d44b4d",
        resource_type: "deployment",
        "serving.knative.dev/revision": "sal200uw89a2f4572207133aht9w001o",
        "serving.knative.dev/revisionUID": "sal200uw89a2f4572207133aht9w001o",
        unique_id: "sal200uw89a2f4572207133aht9w001o"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw89a2f4572207133aht9w001o",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw89a2f4572207133aht9w001o",
        "msp-status": "Running"
      },
      ownerReferences: [
        {
          apiVersion: "apps/v1",
          kind: "ReplicaSet",
          name: "dp-c9jdbddgqongh-6fb5d44b4d",
          uid: "0a44646d-a976-475b-ab74-41230ce19abd",
          controller: true,
          blockOwnerDeletion: true
        }
      ]
    },
    spec: {
      volumes: [
        {
          name: "config-dynamic-update-extensions",
          configMap: {
            name: "dynamic-update-init",
            defaultMode: 493
          }
        },
        {
          name: "dp-c9jdbddgqongh-configmap",
          configMap: {
            name: "dp-c9jdbddgqongh-configmap",
            defaultMode: 420
          }
        },
        {
          name: "empty-dir-sidecar",
          emptyDir: {}
        },
        {
          name: "php-dynamic-extensions",
          emptyDir: {}
        },
        {
          name: "default-token-82cmn",
          secret: {
            secretName: "default-token-82cmn",
            defaultMode: 420
          }
        }
      ],
      initContainers: [
        {
          name: "php-dynamic-extensions",
          image: "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
          command: ["/bin/sh"],
          args: ["-c", "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],
          env: [
            {
              name: "CPU_REQUESTS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "php-dynamic-extensions",
                  resource: "requests.cpu",
                  divisor: "1m"
                }
              }
            },
            {
              name: "CPU_LIMITS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "php-dynamic-extensions",
                  resource: "limits.cpu",
                  divisor: "1m"
                }
              }
            },
            {
              name: "MEM_LIMITS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "php-dynamic-extensions",
                  resource: "limits.memory",
                  divisor: "1Mi"
                }
              }
            },
            {
              name: "MEM_REQUESTS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "php-dynamic-extensions",
                  resource: "requests.memory",
                  divisor: "1Mi"
                }
              }
            },
            {
              name: "PODNAME",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.name"
                }
              }
            },
            {
              name: "PODIP",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "status.podIP"
                }
              }
            },
            {
              name: "NODENAME",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "spec.nodeName"
                }
              }
            },
            {
              name: "NODEIP",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "status.hostIP"
                }
              }
            },
            {
              name: "CONTAINERNAME",
              value: "$(PODNAME)-php-dynamic-extensions"
            }
          ],
          resources: {
            limits: {
              cpu: "100m",
              memory: "64Mi"
            },
            requests: {
              cpu: "1m",
              memory: "1Mi"
            }
          },
          volumeMounts: [
            {
              name: "php-dynamic-extensions",
              mountPath: "/tmp/dynamic_extensions"
            },
            {
              name: "default-token-82cmn",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "Always"
        }
      ],
      containers: [
        {
          name: "service",
          image:
            "harbor.gw002.oneitfarm.com/library/sal2000089a2f4572303131vu9yec7pj:0.1.18",
          env: [
            {
              name: "CPU_REQUESTS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "requests.cpu",
                  divisor: "1m"
                }
              }
            },
            {
              name: "CPU_LIMITS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "limits.cpu",
                  divisor: "1m"
                }
              }
            },
            {
              name: "MEM_LIMITS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "limits.memory",
                  divisor: "1Mi"
                }
              }
            },
            {
              name: "MEM_REQUESTS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "requests.memory",
                  divisor: "1Mi"
                }
              }
            },
            {
              name: "PODNAME",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.name"
                }
              }
            },
            {
              name: "PODIP",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "status.podIP"
                }
              }
            },
            {
              name: "NODENAME",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "spec.nodeName"
                }
              }
            },
            {
              name: "NODEIP",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "status.hostIP"
                }
              }
            },
            {
              name: "CONTAINERNAME",
              value: "$(PODNAME)-service"
            },
            {
              name: "IDG_CPU_REQUESTS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "requests.cpu",
                  divisor: "1m"
                }
              }
            },
            {
              name: "IDG_MEM_LIMITS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "limits.memory",
                  divisor: "1Mi"
                }
              }
            },
            {
              name: "IDG_MEM_REQUESTS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "requests.memory",
                  divisor: "1Mi"
                }
              }
            },
            {
              name: "IDG_CPU_LIMITS",
              valueFrom: {
                resourceFieldRef: {
                  containerName: "service",
                  resource: "limits.cpu",
                  divisor: "1m"
                }
              }
            },
            {
              name: "IDG_NAMESPACE",
              valueFrom: {
                fieldRef: {
                  apiVersion: "v1",
                  fieldPath: "metadata.namespace"
                }
              }
            },
            {
              name: "IDG_CLUSTERUID",
              value: "aliyun-sh-prod"
            },
            {
              name: "IDG_IMAGEURL",
              value:
                "harbor.gw002.oneitfarm.com/library/sal2000089a2f4572303131vu9yec7pj:0.1.18"
            },
            {
              name: "IDG_UNIQUEID",
              value: "sal200uw89a2f4572207133aht9w001o"
            },
            {
              name: "IDG_SITEUID",
              value: "sal2"
            },
            {
              name: "IDG_WEIGHT",
              value: "10"
            },
            {
              name: "IDG_RUNTIME",
              value: "production"
            },
            {
              name: "IDG_SERVICE_NAME",
              value: "车联网工作站"
            },
            {
              name: "IDG_APPID",
              value: "3b82aad04d774706aeab7a3be28ace67"
            },
            {
              name: "IDG_VERSION",
              value: "3.0.99"
            },
            {
              name: "GATEWAY_HOST_SERVICE",
              value: "kong:http://127.0.0.1:9090"
            },
            {
              name: "IDG_NAMESPACEUID",
              value: "namespace-deploy"
            },
            {
              name: "MSP_LOG_REDIS_HOST",
              value: "redis-cluster-proxy-log.msp:6380"
            },
            {
              name: "isMigrate",
              value: "0"
            },
            {
              name: "isMigration",
              value: "0"
            },
            {
              name: "IDG_SERVICE_HOST_NAME",
              value: "dp-c9jdbddgqongh-clusterip.ns-deploy"
            }
          ],
          resources: {
            limits: {
              cpu: "4",
              memory: "4Gi"
            },
            requests: {
              cpu: "1m",
              memory: "128Mi"
            }
          },
          volumeMounts: [
            {
              name: "config-dynamic-update-extensions",
              mountPath: "/etc/my_init.d/dynamic-update-init.sh",
              subPath: "dynamic-update-init.sh"
            },
            {
              name: "dp-c9jdbddgqongh-configmap",
              mountPath: "/opt/ci123/www/html/webroot/static/js"
            },
            {
              name: "php-dynamic-extensions",
              mountPath: "/tmp/dynamic_extensions"
            },
            {
              name: "empty-dir-sidecar",
              mountPath: "/sidecar"
            },
            {
              name: "default-token-82cmn",
              readOnly: true,
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount"
            }
          ],
          readinessProbe: {
            tcpSocket: {
              port: 80
            },
            initialDelaySeconds: 2,
            timeoutSeconds: 2,
            periodSeconds: 2,
            successThreshold: 3,
            failureThreshold: 3
          },
          lifecycle: {
            preStop: {
              exec: {
                command: [
                  "/bin/bash",
                  "-c",
                  'if [ ! -d "/sidecar" ]; then exit; fi;for (( i = 0; i < 5; i++ )); do if [ -f "/sidecar/offline.lock" ];then exit;fi; sleep 1;done;'
                ]
              }
            }
          },
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          imagePullPolicy: "IfNotPresent"
        }
      ],
      restartPolicy: "Always",
      terminationGracePeriodSeconds: 30,
      dnsPolicy: "ClusterFirst",
      serviceAccountName: "default",
      serviceAccount: "default",
      nodeName: "s002-w-34-37",
      securityContext: {},
      imagePullSecrets: [
        {
          name: "harbor-registry"
        }
      ],
      schedulerName: "default-scheduler",
      tolerations: [
        {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          effect: "NoExecute",
          tolerationSeconds: 300
        },
        {
          key: "node.kubernetes.io/memory-pressure",
          operator: "Exists",
          effect: "NoSchedule"
        }
      ],
      priority: 0,
      enableServiceLinks: true
    },
    status: {
      phase: "Running",
      conditions: [
        {
          type: "Initialized",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:23:02Z"
        },
        {
          type: "Ready",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:23:17Z"
        },
        {
          type: "ContainersReady",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:23:17Z"
        },
        {
          type: "PodScheduled",
          status: "True",
          lastProbeTime: null,
          lastTransitionTime: "2023-03-13T09:22:53Z"
        }
      ],
      hostIP: "192.168.34.37",
      podIP: "10.56.140.222",
      podIPs: [
        {
          ip: "10.56.140.222"
        }
      ],
      startTime: "2023-03-13T09:22:53Z",
      initContainerStatuses: [
        {
          name: "php-dynamic-extensions",

          state: {
            terminated: {
              exitCode: 0,
              reason: "Completed",
              startedAt: "2023-03-13T09:22:57Z",
              finishedAt: "2023-03-13T09:23:02Z",
              containerID:
                "docker://54828bb488238023c4f7ba26b6df57918110413b2f6e345a4826d2373f57c67b"
            }
          },
          lastState: {},
          ready: true,
          restartCount: 0,
          image: "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
          imageID:
            "docker-pullable://harbor.oneitfarm.com/zhirenyun/php@sha256:4a48572e0fbcfecf3ebcef02916808dc6845d8955bfee7ff55f5d80e9ef29858",
          containerID:
            "docker://54828bb488238023c4f7ba26b6df57918110413b2f6e345a4826d2373f57c67b"
        }
      ],
      containerStatuses: [
        {
          name: "service",
          state: {
            running: {
              startedAt: "2023-03-13T09:23:04Z"
            }
          },
          lastState: {},
          ready: true,
          restartCount: 0,
          image:
            "harbor.gw002.oneitfarm.com/library/sal2000089a2f4572303131vu9yec7pj:0.1.18",
          imageID:
            "docker-pullable://harbor.gw002.oneitfarm.com/library/sal2000089a2f4572303131vu9yec7pj@sha256:0ad0e20714181f768af3bc2ee980446859d355386b11cded394d397d26b85756",
          containerID:
            "docker://b3010b80df8f8676289ddf1cb9b1714c72f36206783dcda7d67e3a677e392c7b",
          started: true
        }
      ],
      qosClass: "Burstable"
    }
  }
];
