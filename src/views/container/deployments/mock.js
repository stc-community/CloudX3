export default [
  {
    metadata: {
      name: "ws-nwtwbl3gao40u",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/ws-nwtwbl3gao40u",
      uid: "999cc959-1c2f-4c83-b7df-648370d820ed",
      resourceVersion: "2628630848",
      generation: 1,
      creationTimestamp: "2023-03-13T08:20:45Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "ws-nwtwbl3gao40u",
        "app.oam.dev/app-revision-hash": "16146567f2188827",
        "app.oam.dev/appRevision": "ws-nwtwbl3gao40u-v1",
        "app.oam.dev/cluster": "",
        "app.oam.dev/component": "ws-nwtwbl3gao40u",
        "app.oam.dev/name": "ws-nwtwbl3gao40u",
        "app.oam.dev/namespace": "ns-deploy",
        "app.oam.dev/resourceType": "WORKLOAD",
        "app.oam.dev/revision": "ws-nwtwbl3gao40u-v1",
        deploy_type: "deployment",
        deployserver_appid: "doatnnuotjlwbh6r83jed1m7yvwrps5q",
        deployserver_appversion: "0.0.0",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        "oam.aries.io/application-template-version": "0.0.0",
        "oam.dev/render-hash": "bbcdd23db25b6518",
        parent_app: "ws-nwtwbl3gao40u",
        resource_type: "kubevela",
        "serving.knative.dev/revision": "sal200uw89a2f4572303134yr35e00j3",
        "serving.knative.dev/revisionUID": "sal200uw89a2f4572303134yr35e00j3",
        sidecarset_version: "1638496451",
        unique_id: "sal200uw89a2f4572303134yr35e00j3",
        "workload.oam.dev/type": "t-deploy"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw89a2f4572303134yr35e00j3",
        "app.oam.dev/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw89a2f4572303134yr35e00j3","aries.image-policy.k8s.io/unique-id":"sal200uw89a2f4572303134yr35e00j3","oam.aries.io/description":"账号服务","oam.dev/kubevela-version":"v1.3.10"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"ws-nwtwbl3gao40u","app.oam.dev/app-revision-hash":"16146567f2188827","app.oam.dev/appRevision":"ws-nwtwbl3gao40u-v1","app.oam.dev/cluster":"","app.oam.dev/component":"ws-nwtwbl3gao40u","app.oam.dev/name":"ws-nwtwbl3gao40u","app.oam.dev/namespace":"ns-deploy","app.oam.dev/resourceType":"WORKLOAD","app.oam.dev/revision":"ws-nwtwbl3gao40u-v1","deploy_type":"deployment","deployserver_appid":"doatnnuotjlwbh6r83jed1m7yvwrps5q","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","oam.aries.io/application-template-version":"0.0.0","oam.dev/render-hash":"bbcdd23db25b6518","parent_app":"ws-nwtwbl3gao40u","resource_type":"kubevela","serving.knative.dev/revision":"sal200uw89a2f4572303134yr35e00j3","serving.knative.dev/revisionUID":"sal200uw89a2f4572303134yr35e00j3","sidecarset_version":"1638496451","unique_id":"sal200uw89a2f4572303134yr35e00j3","workload.oam.dev/type":"t-deploy"},"name":"ws-nwtwbl3gao40u","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app.oam.dev/component":"ws-nwtwbl3gao40u"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw89a2f4572303134yr35e00j3","aries.image-policy.k8s.io/unique-id":"sal200uw89a2f4572303134yr35e00j3"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"ws-nwtwbl3gao40u","app.oam.dev/component":"ws-nwtwbl3gao40u","app.oam.dev/revision":"ws-nwtwbl3gao40u-v1","deploy_type":"deployment","deployserver_appid":"doatnnuotjlwbh6r83jed1m7yvwrps5q","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"ws-nwtwbl3gao40u","resource_type":"kubevela","serving.knative.dev/revision":"sal200uw89a2f4572303134yr35e00j3","serving.knative.dev/revisionUID":"sal200uw89a2f4572303134yr35e00j3","sidecarset_version":"1638496451","unique_id":"sal200uw89a2f4572303134yr35e00j3"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.oneitfarm.com/zhirenyun/go:1.17.8"},{"name":"IDG_UNIQUEID","value":"sal200uw89a2f4572303134yr35e00j3"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"development"},{"name":"IDG_SERVICE_NAME","value":"账号服务"},{"name":"IDG_APPID","value":"doatnnuotjlwbh6r83jed1m7yvwrps5q"},{"name":"IDG_VERSION","value":"0.0.0"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.oneitfarm.com/zhirenyun/go:1.17.8"},{"name":"ENVIRONMENT","value":"development"},{"name":"PHP_EXTENSIONS_ENABLE","value":"apcu,bcmath,swoole,gd,gmp"},{"name":"ENABLE_SSHD","value":"true"},{"name":"SSH_CONFIG","value":"SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="},{"name":"SSH_PRIVATE_KEY","value":"LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRW93SUJBQUtDQVFFQXVIclp4V0lUUllwWDVBRHRYMDRyRlp0ZGttb2VLM25uMjdDcXhZZ2t3NmhGOFhheg0KV1ZrM2NOL0t2U1BOMW5ScCtHblFhZ1RRcjFsaTBqLy9tQ0pucjE4ZE40YTk5T3IvaWpWNHVXcTlwQ0IzSE1rSw0KbFBLTmtGWm1FbTdyUk10V1pKT0hRUGgwdjhLd2diSGlUODNyUlg4VU9mc0RnOFA5RUE4emsra2NYSUVza0tUOQ0KbFJzTDROTC82NDJzR1ljaytHL3QvS0ZBeDZ2NTV3RTQ0NWZEUXVySmRkOFE1c2o3U1BRQ3lsbS9mQlAxNnBPeQ0Kcm5zVDE1Wks5T294NW5ScHZwOVlTRTNPdXZiSzR4UlRBb3ZEQ1VMcDZUWTdqRnR5TzdVblBsSmwzUTBWYTlBbg0KS1FQOTBTT004WDk3Uk54ZWl5K3NLNGRicHgxTU5maERId0dvUFFJREFRQUJBb0lCQUUzbnMyZGpqM2ZpZ0ZOTg0KQVBFcWRZOWVXUm1ucnEzMWdUQ0pYdFNrTmNKYW9ZN2k3Y0pocHNRSC9mbjUwTWNyeWtTWml1WDZ1cFlTVFdVMA0KbVorSmgvZkxWdTlIKzVnZVZXUHNTTnNrZEltSEhFWVBzR1JPT2ZJbVNseW1jcnhPa21GTzIrTllDUldpQmgvLw0KR3U5UXFuWml3QXZzTVFQSUZHcGZ3UXhKZVN5bXVIdTNTNVp5MGJFenZza1Bla1NRRit3ZENiNkhjRVpYYTRacA0KQ1ZBTmxQcUpBWCt3K0hYd1pRQ01xSC95UXllQjdtK3BrVFV6UFpyai9sVmxHZkVrYks5eFlLR09TYnVkaTVTWQ0KeDBSVEgxaENzSzExZEZjdyt6WjRuY3V2Ykl0bWhPSm5hUDltV1pJTGJPTzdFaENOZXVaYTRIUWc2ZVEwZFpTag0KNDQySzE0RUNnWUVBNU9ad2pnc0o4QWtpMjRtR0NwUlFnakNzdlhtOUxzcXpzVWlBV3N5SEJqcHluU2M2UWZmdg0KTytETlQ1cjNiL2t2SWlZc24ydThIajY0VXZ5OUswMkJaODk0U3JYL3Fmc0FuSHR1SWlpRmFqRndhcjEvWU5TVg0Kd1ZxUm0zZUNUSm9QQnNhNjFzVVlwWTVEY0RrNUNJQXVISjd0dTdTT1RzV1pnRVFWTVdUZXYra0NnWUVBemxJYw0KWkhYWHdoVFZ4VkxXekRldGI5MzBESHBMeW9hSmZWMFZQUVZhVWkxZ2EwWWw1ZjVyWTBUcGg2c0MwcklGY1Y3Zw0KTkNvc2tDbGZZYjBFMERsdWRVelEvY2hWcVRwSjlLcHVHY3B0Qmg0anZUZTRLM0hub21GMGRpcUQ4NUhyMEZROA0KaWdKMzd5Uk4rVWcwTU9BamVpbnJYeERON1ZqUkVuNHMvaHFsWlRVQ2dZRUFwSVQ4WVJ1T0NQaUlGVUxERk5lRg0KQmczMkdqbGx3RHZ3NjNzd3hoSTYrajhJSWV3UDgxcEFtTWo2eUR5Wm0rRjkvdzF4QlNScUVWTURLS0ovVktCZw0KWWp5OE9QYVd5NVdjMnR2Y1RMRFRNNEJWVEdMbktyR2c4VmduVDVhV0VIaXFWRFNDRmR1VDIycGxEa1FTdWdsbg0KR3lzZnM4b1Nmb3VIeUtrbWtsbnR3QUVDZ1lCVlZ4bHZaRjhPWkZmWCt0L21NTkdJaUNJK1Z3ZXFpZU9zK3llaA0KeWVrR1BNYTVHSmJzZjBRa0Y0a1JHT2RlQjB6QkRDRm84bGprZUhoL2tSUEFuVURYUENMbUZrdDRhQ2ZYRC9maQ0KcXh4VmYzb0E5bDh6ZVRYNnNKemZrODVvblY4UkdRYkJmeXZrdXZ1VnRRd0JlM1N4UDAyZ1VPOGMwYlFKRmkrKw0KRzM5MlVRS0JnR2FxazFaVGF6Z09OZUMrZEM4NGgzbWgrd2hXV3dqNUFXa0YzdStDTklxNU1sVWxPa3JldDJSNw0KbUFQQmFPNnJPUzVDek5HV2tRcGN4dDV0cFBlOWlqRnMxMjcwZk03REFrSGdrc0UwRWwvdGRlN29Dd0FiZXdCWQ0KSFl2elVYbVF0OFIyeEZYaHdCVWdwblBVOVlXRHhKL3h1aVdsekVmTGd5d1hwS0swbThWZQ0KLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS0="},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"MYSQL_DATABASE_DB1_NAME","value":"dbg45ijr284phcde"},{"name":"MYSQL_DATABASE_DB1_PORT","value":"3306"},{"name":"MYSQL_DATABASE_DB1_HOST_WRITE","value":"rm-uf6k5be9i30fz7qp4.mysql.rds.aliyuncs.com"},{"name":"MYSQL_DATABASE_DB1_PASSWORD","value":"yn2qs4owy1i7kknjqzwnvimgnmgyzskz"},{"name":"MYSQL_DATABASE_DB1_USERNAME","value":"dbg45ijr284phcde"},{"name":"PVC_code-pvc_UNIQUE_ID","value":"sal2000189a2f4572303134yr2bz006q"},{"name":"SSH_AUTHORIZED_KEYS","value":"c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFERDVRNUpaemVXNktwVDdaYTBpOUJMSGorN1dRdFpVZXh4eThhS1o1TzZvT29IZDRvQmZsNlV1YXM2ZmpkeVlkdmF6K3R0cWR2N0NNQ3NqUzVOM1hKQTBhNmFnK1hoMGxtY0pOdXJkZGZlU1BsN2Q3c2ZXaWNGalFPTlUzNWNtcnlXZGxvZ2NoZ0RoZDlncXFna3pFQ3haNnZLbUhxTFBnbmpiRk03Wk8ydHBrU3pSbGdObXF0aUhaOUVqaWhTZVdJUnpCWGpHU2tzQWZoMjJUT0owbWlYVUFpU29PNitOQlFsYzQ5RUFoMVczQ1R5OWVXdHgrWFZSM1N0RmozL05nLzUxcmZCek5JRGVWSmsvQnlYWUhaQ0dScXQwdWxuM29kZGlJbmZOYmsraTVaNndjRnQvaHpHWVlnb0JiRk9EbDZxMWdKWTd0ZW4vNmd3akpXOXNBYVYK"},{"name":"ENABLE_SSHD","value":"true"},{"name":"isMigrate","value":"0"},{"name":"isMigration","value":"0"},{"name":"MSP_OPEN_HEALTHCHECK","value":"false"},{"name":"IDG_HOST_8080","value":"ws-nwtwbl3gao40u.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_GATEWAY_ADDR","value":"ws-nwtwbl3gao40u.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_HOST_NAME","value":"ws-nwtwbl3gao40u-clusterip.ns-deploy"}],"image":"harbor.oneitfarm.com/zhirenyun/go:1.17.8","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"500m","memory":"512Mi"},"requests":{"cpu":"5m","memory":"123Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/opt/ci123/www/html","name":"pvc-75c55196-962d-436c-8a2c-e785c9b7b67a"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"},{"name":"pvc-75c55196-962d-436c-8a2c-e785c9b7b67a","persistentVolumeClaim":{"claimName":"pvc-75c55196-962d-436c-8a2c-e785c9b7b67a"}}]}}}}',
        "app.oam.dev/last-applied-time": "2023-03-13T08:20:45Z",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw89a2f4572303134yr35e00j3",
        "deployment.kubernetes.io/revision": "1",
        "msp-status": "running",
        "oam.aries.io/description": "账号服务",
        "oam.dev/kubevela-version": "v1.3.10"
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          "app.oam.dev/component": "ws-nwtwbl3gao40u"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "ws-nwtwbl3gao40u",
            "app.oam.dev/component": "ws-nwtwbl3gao40u",
            "app.oam.dev/revision": "ws-nwtwbl3gao40u-v1",
            deploy_type: "deployment",
            deployserver_appid: "doatnnuotjlwbh6r83jed1m7yvwrps5q",
            deployserver_appversion: "0.0.0",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "ws-nwtwbl3gao40u",
            resource_type: "kubevela",
            "serving.knative.dev/revision": "sal200uw89a2f4572303134yr35e00j3",
            "serving.knative.dev/revisionUID":
              "sal200uw89a2f4572303134yr35e00j3",
            sidecarset_version: "1638496451",
            unique_id: "sal200uw89a2f4572303134yr35e00j3"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw89a2f4572303134yr35e00j3",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw89a2f4572303134yr35e00j3"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            },
            {
              name: "pvc-75c55196-962d-436c-8a2c-e785c9b7b67a",
              persistentVolumeClaim: {
                claimName: "pvc-75c55196-962d-436c-8a2c-e785c9b7b67a"
              }
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                }
              ],
              terminationMessagePath: "/dev/termination-log",
              terminationMessagePolicy: "File",
              imagePullPolicy: "IfNotPresent"
            }
          ],
          containers: [
            {
              name: "service",
              image: "harbor.oneitfarm.com/zhirenyun/go:1.17.8",
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
                  value: "harbor.oneitfarm.com/zhirenyun/go:1.17.8"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw89a2f4572303134yr35e00j3"
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
                  value: "development"
                },
                {
                  name: "IDG_SERVICE_NAME",
                  value: "账号服务"
                },
                {
                  name: "IDG_APPID",
                  value: "doatnnuotjlwbh6r83jed1m7yvwrps5q"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.0"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value: "harbor.oneitfarm.com/zhirenyun/go:1.17.8"
                },
                {
                  name: "ENVIRONMENT",
                  value: "development"
                },
                {
                  name: "PHP_EXTENSIONS_ENABLE",
                  value: "apcu,bcmath,swoole,gd,gmp"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
                },
                {
                  name: "SSH_CONFIG",
                  value:
                    "SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="
                },
                {
                  name: "SSH_PRIVATE_KEY",
                  value:
                    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRW93SUJBQUtDQVFFQXVIclp4V0lUUllwWDVBRHRYMDRyRlp0ZGttb2VLM25uMjdDcXhZZ2t3NmhGOFhheg0KV1ZrM2NOL0t2U1BOMW5ScCtHblFhZ1RRcjFsaTBqLy9tQ0pucjE4ZE40YTk5T3IvaWpWNHVXcTlwQ0IzSE1rSw0KbFBLTmtGWm1FbTdyUk10V1pKT0hRUGgwdjhLd2diSGlUODNyUlg4VU9mc0RnOFA5RUE4emsra2NYSUVza0tUOQ0KbFJzTDROTC82NDJzR1ljaytHL3QvS0ZBeDZ2NTV3RTQ0NWZEUXVySmRkOFE1c2o3U1BRQ3lsbS9mQlAxNnBPeQ0Kcm5zVDE1Wks5T294NW5ScHZwOVlTRTNPdXZiSzR4UlRBb3ZEQ1VMcDZUWTdqRnR5TzdVblBsSmwzUTBWYTlBbg0KS1FQOTBTT004WDk3Uk54ZWl5K3NLNGRicHgxTU5maERId0dvUFFJREFRQUJBb0lCQUUzbnMyZGpqM2ZpZ0ZOTg0KQVBFcWRZOWVXUm1ucnEzMWdUQ0pYdFNrTmNKYW9ZN2k3Y0pocHNRSC9mbjUwTWNyeWtTWml1WDZ1cFlTVFdVMA0KbVorSmgvZkxWdTlIKzVnZVZXUHNTTnNrZEltSEhFWVBzR1JPT2ZJbVNseW1jcnhPa21GTzIrTllDUldpQmgvLw0KR3U5UXFuWml3QXZzTVFQSUZHcGZ3UXhKZVN5bXVIdTNTNVp5MGJFenZza1Bla1NRRit3ZENiNkhjRVpYYTRacA0KQ1ZBTmxQcUpBWCt3K0hYd1pRQ01xSC95UXllQjdtK3BrVFV6UFpyai9sVmxHZkVrYks5eFlLR09TYnVkaTVTWQ0KeDBSVEgxaENzSzExZEZjdyt6WjRuY3V2Ykl0bWhPSm5hUDltV1pJTGJPTzdFaENOZXVaYTRIUWc2ZVEwZFpTag0KNDQySzE0RUNnWUVBNU9ad2pnc0o4QWtpMjRtR0NwUlFnakNzdlhtOUxzcXpzVWlBV3N5SEJqcHluU2M2UWZmdg0KTytETlQ1cjNiL2t2SWlZc24ydThIajY0VXZ5OUswMkJaODk0U3JYL3Fmc0FuSHR1SWlpRmFqRndhcjEvWU5TVg0Kd1ZxUm0zZUNUSm9QQnNhNjFzVVlwWTVEY0RrNUNJQXVISjd0dTdTT1RzV1pnRVFWTVdUZXYra0NnWUVBemxJYw0KWkhYWHdoVFZ4VkxXekRldGI5MzBESHBMeW9hSmZWMFZQUVZhVWkxZ2EwWWw1ZjVyWTBUcGg2c0MwcklGY1Y3Zw0KTkNvc2tDbGZZYjBFMERsdWRVelEvY2hWcVRwSjlLcHVHY3B0Qmg0anZUZTRLM0hub21GMGRpcUQ4NUhyMEZROA0KaWdKMzd5Uk4rVWcwTU9BamVpbnJYeERON1ZqUkVuNHMvaHFsWlRVQ2dZRUFwSVQ4WVJ1T0NQaUlGVUxERk5lRg0KQmczMkdqbGx3RHZ3NjNzd3hoSTYrajhJSWV3UDgxcEFtTWo2eUR5Wm0rRjkvdzF4QlNScUVWTURLS0ovVktCZw0KWWp5OE9QYVd5NVdjMnR2Y1RMRFRNNEJWVEdMbktyR2c4VmduVDVhV0VIaXFWRFNDRmR1VDIycGxEa1FTdWdsbg0KR3lzZnM4b1Nmb3VIeUtrbWtsbnR3QUVDZ1lCVlZ4bHZaRjhPWkZmWCt0L21NTkdJaUNJK1Z3ZXFpZU9zK3llaA0KeWVrR1BNYTVHSmJzZjBRa0Y0a1JHT2RlQjB6QkRDRm84bGprZUhoL2tSUEFuVURYUENMbUZrdDRhQ2ZYRC9maQ0KcXh4VmYzb0E5bDh6ZVRYNnNKemZrODVvblY4UkdRYkJmeXZrdXZ1VnRRd0JlM1N4UDAyZ1VPOGMwYlFKRmkrKw0KRzM5MlVRS0JnR2FxazFaVGF6Z09OZUMrZEM4NGgzbWgrd2hXV3dqNUFXa0YzdStDTklxNU1sVWxPa3JldDJSNw0KbUFQQmFPNnJPUzVDek5HV2tRcGN4dDV0cFBlOWlqRnMxMjcwZk03REFrSGdrc0UwRWwvdGRlN29Dd0FiZXdCWQ0KSFl2elVYbVF0OFIyeEZYaHdCVWdwblBVOVlXRHhKL3h1aVdsekVmTGd5d1hwS0swbThWZQ0KLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS0="
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
                  name: "MYSQL_DATABASE_DB1_NAME",
                  value: "dbg45ijr284phcde"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PORT",
                  value: "3306"
                },
                {
                  name: "MYSQL_DATABASE_DB1_HOST_WRITE",
                  value: "rm-uf6k5be9i30fz7qp4.mysql.rds.aliyuncs.com"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PASSWORD",
                  value: "yn2qs4owy1i7kknjqzwnvimgnmgyzskz"
                },
                {
                  name: "MYSQL_DATABASE_DB1_USERNAME",
                  value: "dbg45ijr284phcde"
                },
                {
                  name: "PVC_code-pvc_UNIQUE_ID",
                  value: "sal2000189a2f4572303134yr2bz006q"
                },
                {
                  name: "SSH_AUTHORIZED_KEYS",
                  value:
                    "c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFERDVRNUpaemVXNktwVDdaYTBpOUJMSGorN1dRdFpVZXh4eThhS1o1TzZvT29IZDRvQmZsNlV1YXM2ZmpkeVlkdmF6K3R0cWR2N0NNQ3NqUzVOM1hKQTBhNmFnK1hoMGxtY0pOdXJkZGZlU1BsN2Q3c2ZXaWNGalFPTlUzNWNtcnlXZGxvZ2NoZ0RoZDlncXFna3pFQ3haNnZLbUhxTFBnbmpiRk03Wk8ydHBrU3pSbGdObXF0aUhaOUVqaWhTZVdJUnpCWGpHU2tzQWZoMjJUT0owbWlYVUFpU29PNitOQlFsYzQ5RUFoMVczQ1R5OWVXdHgrWFZSM1N0RmozL05nLzUxcmZCek5JRGVWSmsvQnlYWUhaQ0dScXQwdWxuM29kZGlJbmZOYmsraTVaNndjRnQvaHpHWVlnb0JiRk9EbDZxMWdKWTd0ZW4vNmd3akpXOXNBYVYK"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
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
                  name: "MSP_OPEN_HEALTHCHECK",
                  value: "false"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "ws-nwtwbl3gao40u.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_GATEWAY_ADDR",
                  value: "ws-nwtwbl3gao40u.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_HOST_NAME",
                  value: "ws-nwtwbl3gao40u-clusterip.ns-deploy"
                }
              ],
              resources: {
                limits: {
                  cpu: "500m",
                  memory: "512Mi"
                },
                requests: {
                  cpu: "5m",
                  memory: "123Mi"
                }
              },
              volumeMounts: [
                {
                  name: "config-dynamic-update-extensions",
                  mountPath: "/etc/my_init.d/dynamic-update-init.sh",
                  subPath: "dynamic-update-init.sh"
                },
                {
                  name: "pvc-75c55196-962d-436c-8a2c-e785c9b7b67a",
                  mountPath: "/opt/ci123/www/html"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T08:21:05Z",
          lastTransitionTime: "2023-03-13T08:21:05Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T08:21:05Z",
          lastTransitionTime: "2023-03-13T08:20:45Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "ws-nwtwbl3gao40u-67b59b796f" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "ws-4zugsbgnf447u",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/ws-4zugsbgnf447u",
      uid: "fe5402d8-5a17-46c0-87d2-0b0d8a9128c5",
      resourceVersion: "2628580351",
      generation: 1,
      creationTimestamp: "2023-03-13T07:59:58Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "ws-4zugsbgnf447u",
        "app.oam.dev/app-revision-hash": "a45d38f5301e088",
        "app.oam.dev/appRevision": "ws-4zugsbgnf447u-v1",
        "app.oam.dev/cluster": "",
        "app.oam.dev/component": "ws-4zugsbgnf447u",
        "app.oam.dev/name": "ws-4zugsbgnf447u",
        "app.oam.dev/namespace": "ns-deploy",
        "app.oam.dev/resourceType": "WORKLOAD",
        "app.oam.dev/revision": "ws-4zugsbgnf447u-v1",
        deploy_type: "deployment",
        deployserver_appid: "04e94de6bf294d17a29381191b2907ed",
        deployserver_appversion: "0.0.0",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        "oam.aries.io/application-template-version": "0.0.0",
        "oam.dev/render-hash": "7f2f7ebc44a424b0",
        parent_app: "ws-4zugsbgnf447u",
        resource_type: "kubevela",
        "serving.knative.dev/revision": "sal200uw5a4dc54b2303134rb63100ya",
        "serving.knative.dev/revisionUID": "sal200uw5a4dc54b2303134rb63100ya",
        sidecarset_version: "1638496451",
        unique_id: "sal200uw5a4dc54b2303134rb63100ya",
        "workload.oam.dev/type": "t-deploy"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw5a4dc54b2303134rb63100ya",
        "app.oam.dev/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw5a4dc54b2303134rb63100ya","aries.image-policy.k8s.io/unique-id":"sal200uw5a4dc54b2303134rb63100ya","oam.aries.io/description":"GUI测试应用","oam.dev/kubevela-version":"v1.3.10"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"ws-4zugsbgnf447u","app.oam.dev/app-revision-hash":"a45d38f5301e088","app.oam.dev/appRevision":"ws-4zugsbgnf447u-v1","app.oam.dev/cluster":"","app.oam.dev/component":"ws-4zugsbgnf447u","app.oam.dev/name":"ws-4zugsbgnf447u","app.oam.dev/namespace":"ns-deploy","app.oam.dev/resourceType":"WORKLOAD","app.oam.dev/revision":"ws-4zugsbgnf447u-v1","deploy_type":"deployment","deployserver_appid":"04e94de6bf294d17a29381191b2907ed","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","oam.aries.io/application-template-version":"0.0.0","oam.dev/render-hash":"7f2f7ebc44a424b0","parent_app":"ws-4zugsbgnf447u","resource_type":"kubevela","serving.knative.dev/revision":"sal200uw5a4dc54b2303134rb63100ya","serving.knative.dev/revisionUID":"sal200uw5a4dc54b2303134rb63100ya","sidecarset_version":"1638496451","unique_id":"sal200uw5a4dc54b2303134rb63100ya","workload.oam.dev/type":"t-deploy"},"name":"ws-4zugsbgnf447u","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app.oam.dev/component":"ws-4zugsbgnf447u"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw5a4dc54b2303134rb63100ya","aries.image-policy.k8s.io/unique-id":"sal200uw5a4dc54b2303134rb63100ya"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"ws-4zugsbgnf447u","app.oam.dev/component":"ws-4zugsbgnf447u","app.oam.dev/revision":"ws-4zugsbgnf447u-v1","deploy_type":"deployment","deployserver_appid":"04e94de6bf294d17a29381191b2907ed","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"ws-4zugsbgnf447u","resource_type":"kubevela","serving.knative.dev/revision":"sal200uw5a4dc54b2303134rb63100ya","serving.knative.dev/revisionUID":"sal200uw5a4dc54b2303134rb63100ya","sidecarset_version":"1638496451","unique_id":"sal200uw5a4dc54b2303134rb63100ya"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2"},{"name":"IDG_UNIQUEID","value":"sal200uw5a4dc54b2303134rb63100ya"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"development"},{"name":"IDG_SERVICE_NAME","value":"GUI测试应用"},{"name":"IDG_APPID","value":"04e94de6bf294d17a29381191b2907ed"},{"name":"IDG_VERSION","value":"0.0.0"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2"},{"name":"ENVIRONMENT","value":"development"},{"name":"PHP_EXTENSIONS_ENABLE","value":"apcu,bcmath,swoole,gd,gmp"},{"name":"ENABLE_SSHD","value":"true"},{"name":"SSH_CONFIG","value":"SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="},{"name":"SSH_PRIVATE_KEY","value":"LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBBSUJBQUtDQVFFQXFOcGxCQUtvdE05cUI2MDQxWlo4NnBVMVJWd0t2RHpkMWVNVDlPeVQwNXlvdHV0Lw0KQVNwZTJaQVVXb1QwUk0vY0wrTTc5aysyMXk5ZnpjOUN5TlRxMWYwU0ZtYkFKOHdPYzdqakRPN1JqMVd6TFZIZQ0KaFdmelYyMnJKOG45enhTblVhYW1RV0N2THBxaTVYUXROb3htNjY0ajdsYWNlTSthQWp1MU5xNDhJMUNQbjQrcA0KNFR1dGo5Sm5ZZ2tVODdQUkhOMm4xbFZVaitlTFcrTVFjWXlRa2E3c0piaERxUHdlMXVGbnNMWk90YzBaSWJRQQ0KQjU4TzNvRGtBRXlQUWV3eStDOU1pSXhlSStaQ2VCemtEN0lGN1hnQ210NkUwcVRMeWtOR2laczZ3VlBJT2xIOQ0KMFluUEw1LzBGRE52RDRncmFvUkZ4OVNCS1RjeFp2aG1DcUtEOHdJREFRQUJBb0lCQVFDZFF2cCtKN1BVNHJEUQ0KQVlkRGRtdFZXQzVMTVJSV2lTSGJDU2tYSGhmNEtKb0I4NGRRSUpSQ2NTeGp1aHgrMGxFeTBLS1NIMkFkUG1RdQ0KSFBFSWR6VllvK0RxdUR3VFZMdkpEOU4zd2gydkw1UTNpMTZDUlhTZ1l1WGJvd2NlalEvZ3ZpTnVGSXhVRFhYVg0KMnNRWlg5Nmpkb2JFZmlveFlyai9oM2laT3VHTHlRTUl0alFSUTFJNG0yK2VEaDFNUm1RZVB3NzRUakNjSlVQbg0KalQ1VDF5aGgzWkZ6VVdPT05HZTBXOGZ3bXFLQ2RnSFRmNnNiNjhFS3phUWZic0R0bmtMY2U0RHNCcnc4WTdMcg0KR0J4MmliZ1J5bUQyQndvZlIyNFZhYWdHWVErNnhsU0Rkdm1ldENSams5MWVuYnN4QnBGOTRySmk0RU9nbTRXOA0KQ29ZU3MzRGhBb0dCQU5MOGdrYW9tVnVlVFZlaU9MVXdxc1A2b2E2Ykt0dHpSSFlmdGw2emVuaTlEaVpnanZjWQ0KcmV6VGFETTJsS25haTdUZnRzMTJ1SkJmKzgwdFUybHZUK0dPakMzNTAweTY1S2xqZU1QTFNPL1JJNDVJMlBHUQ0KaVJTMDM3RjBad3pZNUtTY1owcFNvd0tpNTNpSW9UckdOci9Kdi9KU0lpdm43VHA3V2Z2UTZkVzdBb0dCQU16Zw0KcndpZEsxNXpXSHhQeklCZGYwNkdqV3NGRzN6bTVPNGtmV1haaHdoRUlmN3k3SVhVN2Z1ZkJMRC9vS01NWkRXOQ0KSVZUWGpQcTYwZVZyNE56Q2dCQ0NpQ21Ca0REdHFvb2hKdXEvWi9vQStWcnRkSmU0TEo2KzdLR2p6SWk0TDFNVw0KTGtueXQvclVJd2k5OW9EQ001K1E0UHFoWE9ub1NQMTA1amUwM01zcEFvR0FkRzhqV2VrYlVPTkluVzhKeW54RQ0KRVFsVWhxNWM5V1JrU0tmeGxjdUliKzh0U3VLSW96WjhiVEN4MVdsdW0xbmZOWDhzTzdFajQ1RUV2ZE1nc0JQYw0KeW9aSE4rd2h2cnQ1Q3oyNDNKeG44T2pDclhmb09VOWhSd3NXVTdFQVdhZXNibWRkM1RkRGZHWDRSWjFwRksxaw0KYzJ6Y1A5Y3h3bmNvaE5pajdRTDZ1SmNDZ1lFQWlSOHNKeERDVVJIVVBFZFFjTzJpNGhTdUc5MnNPeGx5U1cwRQ0KdktFdGZqdlRvUVpIaFg4dzFNTG1hZXg5UUFOd0lvTjJCb25KNHBvZEYzYnZaZkdMc3dFYVR1VlhjMWZ1VjBxKw0KK0VpcE42dGxPUlZLZnEwV3VCekMxYUNDcVZMVTRjQXJ0UFNOYklTRStqbmgvT1Y5bGFOcTRIUVZjcnd6OWVkQw0KbWpBandwa0NnWUExQk9ZT3VlL1BZM1Fib1RQdlNNVnVPcHByZEt1YlJzT2NWallPdS9NWlQ4ZmowWi9vU3BCZw0KOUdFbHAvUE9TNEovYXRMeXZnSE1KWXNGUXdwM3BLQUVTN0NQRWhsT0NmYkFSZUxYeUVqVU0zaFRUenlKSVBjNQ0KMHREUDhjR2w3ZTFpUU1HbVlTUkJuZ1lHVTVsNnJhaUIxQXg4cFZ0UmNRM3FKaW5EeFVkaGdnPT0NCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"PVC_code-pvc_UNIQUE_ID","value":"sal200015a4dc54b2303134rb54r009o"},{"name":"SSH_AUTHORIZED_KEYS","value":"c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFDNmFWLzBMczZNR2xla25oNnVSMVQvdjBYTHV2amlXcG5NYkxieE1iZE1renpjcWpVQ1NLTzFETU41UnBlaWpobXpaeGs0R3NRcXBkd2hXOWFJMVlHR1cxY3lTdFZWTkhiY09oK2lGVlRjV1ZlZUtBSEpUV0UrL3czY1Y5K2lzTCt1LzNETXRnWmNYTFV4Qk9lMHh4WFU3d0xCKzNsR2paZ1hBbWxCZ2F0ZEl6YkI5R2NmRjJDUUtYcUNjOEdLTU9LNFhSUER3eFRsTzd6Q1JjRUU3QVlVMVJ6cnVKNWNrTnJNZnVueFEyN1dlMEtEYzZxOTBBdEtpcDVNTUN3WkVqcm4xZ2twSENVTkVDdjZSOHlTWDhwd2FYZ2Nac0FaOTlrTmhCRlJUY2E4bDhKZnphVUQxZ2E2ZTVPU2RjZ1gzdG1UNjZQUll3a3lKL1FzbnZQS1dlUjMK"},{"name":"ENABLE_SSHD","value":"true"},{"name":"isMigrate","value":"0"},{"name":"isMigration","value":"0"},{"name":"MSP_OPEN_HEALTHCHECK","value":"false"},{"name":"IDG_HOST_8080","value":"ws-4zugsbgnf447u.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_GATEWAY_ADDR","value":"ws-4zugsbgnf447u.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_HOST_NAME","value":"ws-4zugsbgnf447u-clusterip.ns-deploy"}],"image":"harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"500m","memory":"256Mi"},"requests":{"cpu":"10m","memory":"128Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/opt/ci123/www/html","name":"pvc-b7642632-d9fc-4eae-8a10-fba1f873e545"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"},{"name":"pvc-b7642632-d9fc-4eae-8a10-fba1f873e545","persistentVolumeClaim":{"claimName":"pvc-b7642632-d9fc-4eae-8a10-fba1f873e545"}}]}}}}',
        "app.oam.dev/last-applied-time": "2023-03-13T07:59:58Z",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw5a4dc54b2303134rb63100ya",
        "deployment.kubernetes.io/revision": "1",
        "msp-status": "running",
        "oam.aries.io/description": "GUI测试应用",
        "oam.dev/kubevela-version": "v1.3.10"
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          "app.oam.dev/component": "ws-4zugsbgnf447u"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "ws-4zugsbgnf447u",
            "app.oam.dev/component": "ws-4zugsbgnf447u",
            "app.oam.dev/revision": "ws-4zugsbgnf447u-v1",
            deploy_type: "deployment",
            deployserver_appid: "04e94de6bf294d17a29381191b2907ed",
            deployserver_appversion: "0.0.0",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "ws-4zugsbgnf447u",
            resource_type: "kubevela",
            "serving.knative.dev/revision": "sal200uw5a4dc54b2303134rb63100ya",
            "serving.knative.dev/revisionUID":
              "sal200uw5a4dc54b2303134rb63100ya",
            sidecarset_version: "1638496451",
            unique_id: "sal200uw5a4dc54b2303134rb63100ya"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw5a4dc54b2303134rb63100ya",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw5a4dc54b2303134rb63100ya"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            },
            {
              name: "pvc-b7642632-d9fc-4eae-8a10-fba1f873e545",
              persistentVolumeClaim: {
                claimName: "pvc-b7642632-d9fc-4eae-8a10-fba1f873e545"
              }
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                }
              ],
              terminationMessagePath: "/dev/termination-log",
              terminationMessagePolicy: "File",
              imagePullPolicy: "IfNotPresent"
            }
          ],
          containers: [
            {
              name: "service",
              image: "harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2",
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
                  value: "harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw5a4dc54b2303134rb63100ya"
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
                  value: "development"
                },
                {
                  name: "IDG_SERVICE_NAME",
                  value: "GUI测试应用"
                },
                {
                  name: "IDG_APPID",
                  value: "04e94de6bf294d17a29381191b2907ed"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.0"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value: "harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2"
                },
                {
                  name: "ENVIRONMENT",
                  value: "development"
                },
                {
                  name: "PHP_EXTENSIONS_ENABLE",
                  value: "apcu,bcmath,swoole,gd,gmp"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
                },
                {
                  name: "SSH_CONFIG",
                  value:
                    "SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="
                },
                {
                  name: "SSH_PRIVATE_KEY",
                  value:
                    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBBSUJBQUtDQVFFQXFOcGxCQUtvdE05cUI2MDQxWlo4NnBVMVJWd0t2RHpkMWVNVDlPeVQwNXlvdHV0Lw0KQVNwZTJaQVVXb1QwUk0vY0wrTTc5aysyMXk5ZnpjOUN5TlRxMWYwU0ZtYkFKOHdPYzdqakRPN1JqMVd6TFZIZQ0KaFdmelYyMnJKOG45enhTblVhYW1RV0N2THBxaTVYUXROb3htNjY0ajdsYWNlTSthQWp1MU5xNDhJMUNQbjQrcA0KNFR1dGo5Sm5ZZ2tVODdQUkhOMm4xbFZVaitlTFcrTVFjWXlRa2E3c0piaERxUHdlMXVGbnNMWk90YzBaSWJRQQ0KQjU4TzNvRGtBRXlQUWV3eStDOU1pSXhlSStaQ2VCemtEN0lGN1hnQ210NkUwcVRMeWtOR2laczZ3VlBJT2xIOQ0KMFluUEw1LzBGRE52RDRncmFvUkZ4OVNCS1RjeFp2aG1DcUtEOHdJREFRQUJBb0lCQVFDZFF2cCtKN1BVNHJEUQ0KQVlkRGRtdFZXQzVMTVJSV2lTSGJDU2tYSGhmNEtKb0I4NGRRSUpSQ2NTeGp1aHgrMGxFeTBLS1NIMkFkUG1RdQ0KSFBFSWR6VllvK0RxdUR3VFZMdkpEOU4zd2gydkw1UTNpMTZDUlhTZ1l1WGJvd2NlalEvZ3ZpTnVGSXhVRFhYVg0KMnNRWlg5Nmpkb2JFZmlveFlyai9oM2laT3VHTHlRTUl0alFSUTFJNG0yK2VEaDFNUm1RZVB3NzRUakNjSlVQbg0KalQ1VDF5aGgzWkZ6VVdPT05HZTBXOGZ3bXFLQ2RnSFRmNnNiNjhFS3phUWZic0R0bmtMY2U0RHNCcnc4WTdMcg0KR0J4MmliZ1J5bUQyQndvZlIyNFZhYWdHWVErNnhsU0Rkdm1ldENSams5MWVuYnN4QnBGOTRySmk0RU9nbTRXOA0KQ29ZU3MzRGhBb0dCQU5MOGdrYW9tVnVlVFZlaU9MVXdxc1A2b2E2Ykt0dHpSSFlmdGw2emVuaTlEaVpnanZjWQ0KcmV6VGFETTJsS25haTdUZnRzMTJ1SkJmKzgwdFUybHZUK0dPakMzNTAweTY1S2xqZU1QTFNPL1JJNDVJMlBHUQ0KaVJTMDM3RjBad3pZNUtTY1owcFNvd0tpNTNpSW9UckdOci9Kdi9KU0lpdm43VHA3V2Z2UTZkVzdBb0dCQU16Zw0KcndpZEsxNXpXSHhQeklCZGYwNkdqV3NGRzN6bTVPNGtmV1haaHdoRUlmN3k3SVhVN2Z1ZkJMRC9vS01NWkRXOQ0KSVZUWGpQcTYwZVZyNE56Q2dCQ0NpQ21Ca0REdHFvb2hKdXEvWi9vQStWcnRkSmU0TEo2KzdLR2p6SWk0TDFNVw0KTGtueXQvclVJd2k5OW9EQ001K1E0UHFoWE9ub1NQMTA1amUwM01zcEFvR0FkRzhqV2VrYlVPTkluVzhKeW54RQ0KRVFsVWhxNWM5V1JrU0tmeGxjdUliKzh0U3VLSW96WjhiVEN4MVdsdW0xbmZOWDhzTzdFajQ1RUV2ZE1nc0JQYw0KeW9aSE4rd2h2cnQ1Q3oyNDNKeG44T2pDclhmb09VOWhSd3NXVTdFQVdhZXNibWRkM1RkRGZHWDRSWjFwRksxaw0KYzJ6Y1A5Y3h3bmNvaE5pajdRTDZ1SmNDZ1lFQWlSOHNKeERDVVJIVVBFZFFjTzJpNGhTdUc5MnNPeGx5U1cwRQ0KdktFdGZqdlRvUVpIaFg4dzFNTG1hZXg5UUFOd0lvTjJCb25KNHBvZEYzYnZaZkdMc3dFYVR1VlhjMWZ1VjBxKw0KK0VpcE42dGxPUlZLZnEwV3VCekMxYUNDcVZMVTRjQXJ0UFNOYklTRStqbmgvT1Y5bGFOcTRIUVZjcnd6OWVkQw0KbWpBandwa0NnWUExQk9ZT3VlL1BZM1Fib1RQdlNNVnVPcHByZEt1YlJzT2NWallPdS9NWlQ4ZmowWi9vU3BCZw0KOUdFbHAvUE9TNEovYXRMeXZnSE1KWXNGUXdwM3BLQUVTN0NQRWhsT0NmYkFSZUxYeUVqVU0zaFRUenlKSVBjNQ0KMHREUDhjR2w3ZTFpUU1HbVlTUkJuZ1lHVTVsNnJhaUIxQXg4cFZ0UmNRM3FKaW5EeFVkaGdnPT0NCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"
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
                  name: "PVC_code-pvc_UNIQUE_ID",
                  value: "sal200015a4dc54b2303134rb54r009o"
                },
                {
                  name: "SSH_AUTHORIZED_KEYS",
                  value:
                    "c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFDNmFWLzBMczZNR2xla25oNnVSMVQvdjBYTHV2amlXcG5NYkxieE1iZE1renpjcWpVQ1NLTzFETU41UnBlaWpobXpaeGs0R3NRcXBkd2hXOWFJMVlHR1cxY3lTdFZWTkhiY09oK2lGVlRjV1ZlZUtBSEpUV0UrL3czY1Y5K2lzTCt1LzNETXRnWmNYTFV4Qk9lMHh4WFU3d0xCKzNsR2paZ1hBbWxCZ2F0ZEl6YkI5R2NmRjJDUUtYcUNjOEdLTU9LNFhSUER3eFRsTzd6Q1JjRUU3QVlVMVJ6cnVKNWNrTnJNZnVueFEyN1dlMEtEYzZxOTBBdEtpcDVNTUN3WkVqcm4xZ2twSENVTkVDdjZSOHlTWDhwd2FYZ2Nac0FaOTlrTmhCRlJUY2E4bDhKZnphVUQxZ2E2ZTVPU2RjZ1gzdG1UNjZQUll3a3lKL1FzbnZQS1dlUjMK"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
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
                  name: "MSP_OPEN_HEALTHCHECK",
                  value: "false"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "ws-4zugsbgnf447u.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_GATEWAY_ADDR",
                  value: "ws-4zugsbgnf447u.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_HOST_NAME",
                  value: "ws-4zugsbgnf447u-clusterip.ns-deploy"
                }
              ],
              resources: {
                limits: {
                  cpu: "500m",
                  memory: "256Mi"
                },
                requests: {
                  cpu: "10m",
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
                  name: "pvc-b7642632-d9fc-4eae-8a10-fba1f873e545",
                  mountPath: "/opt/ci123/www/html"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T08:00:19Z",
          lastTransitionTime: "2023-03-13T08:00:19Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T08:00:19Z",
          lastTransitionTime: "2023-03-13T07:59:58Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "ws-4zugsbgnf447u-78b4fd8b7f" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "ingress-nginx-defaultbackend",
      namespace: "ingress-nginx",
      selfLink:
        "/apis/apps/v1/namespaces/ingress-nginx/deployments/ingress-nginx-defaultbackend",
      uid: "9f0403dd-624f-4ca0-bbc0-8376f8b4b6ab",
      resourceVersion: "2628551520",
      generation: 1,
      creationTimestamp: "2023-03-13T07:48:03Z",
      labels: {
        "app.kubernetes.io/component": "default-backend",
        "app.kubernetes.io/instance": "ingress-nginx",
        "app.kubernetes.io/managed-by": "Tiller",
        "app.kubernetes.io/name": "ingress-nginx",
        "app.kubernetes.io/version": "0.35.0",
        "app.zhiren.cloud/instance": "aliyun-prod-ingress-nginx",
        "helm.sh/chart": "ingress-nginx-3.3.0"
      },
      annotations: {
        "deployment.kubernetes.io/revision": "1",
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"default-backend","app.kubernetes.io/instance":"ingress-nginx","app.kubernetes.io/managed-by":"Tiller","app.kubernetes.io/name":"ingress-nginx","app.kubernetes.io/version":"0.35.0","app.zhiren.cloud/instance":"aliyun-prod-ingress-nginx","helm.sh/chart":"ingress-nginx-3.3.0"},"name":"ingress-nginx-defaultbackend","namespace":"ingress-nginx"},"spec":{"replicas":1,"revisionHistoryLimit":10,"selector":{"matchLabels":{"app.kubernetes.io/component":"default-backend","app.kubernetes.io/instance":"ingress-nginx","app.kubernetes.io/name":"ingress-nginx"}},"template":{"metadata":{"labels":{"app.kubernetes.io/component":"default-backend","app.kubernetes.io/instance":"ingress-nginx","app.kubernetes.io/name":"ingress-nginx"}},"spec":{"containers":[{"image":"harbor.oneitfarm.com/gcr/defaultbackend-amd64:1.5","imagePullPolicy":"IfNotPresent","livenessProbe":{"failureThreshold":3,"httpGet":{"path":"/healthz","port":8080,"scheme":"HTTP"},"initialDelaySeconds":30,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":5},"name":"ingress-nginx-default-backend","ports":[{"containerPort":8080,"name":"http","protocol":"TCP"}],"readinessProbe":{"failureThreshold":6,"httpGet":{"path":"/healthz","port":8080,"scheme":"HTTP"},"initialDelaySeconds":0,"periodSeconds":5,"successThreshold":1,"timeoutSeconds":5},"securityContext":{"runAsUser":65534}}],"serviceAccountName":"ingress-nginx-backend","terminationGracePeriodSeconds":60}}}}\n',
        "msp-status": "running"
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          "app.kubernetes.io/component": "default-backend",
          "app.kubernetes.io/instance": "ingress-nginx",
          "app.kubernetes.io/name": "ingress-nginx"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            "app.kubernetes.io/component": "default-backend",
            "app.kubernetes.io/instance": "ingress-nginx",
            "app.kubernetes.io/name": "ingress-nginx"
          }
        },
        spec: {
          containers: [
            {
              name: "ingress-nginx-default-backend",
              image: "harbor.oneitfarm.com/gcr/defaultbackend-amd64:1.5",
              ports: [
                {
                  name: "http",
                  containerPort: 8080,
                  protocol: "TCP"
                }
              ],
              resources: {},
              livenessProbe: {
                httpGet: {
                  path: "/healthz",
                  port: 8080,
                  scheme: "HTTP"
                },
                initialDelaySeconds: 30,
                timeoutSeconds: 5,
                periodSeconds: 10,
                successThreshold: 1,
                failureThreshold: 3
              },
              readinessProbe: {
                httpGet: {
                  path: "/healthz",
                  port: 8080,
                  scheme: "HTTP"
                },
                timeoutSeconds: 5,
                periodSeconds: 5,
                successThreshold: 1,
                failureThreshold: 6
              },
              terminationMessagePath: "/dev/termination-log",
              terminationMessagePolicy: "File",
              imagePullPolicy: "IfNotPresent",
              securityContext: {
                runAsUser: 65534
              }
            }
          ],
          restartPolicy: "Always",
          terminationGracePeriodSeconds: 60,
          dnsPolicy: "ClusterFirst",
          serviceAccountName: "ingress-nginx-backend",
          serviceAccount: "ingress-nginx-backend",
          securityContext: {},
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T07:48:09Z",
          lastTransitionTime: "2023-03-13T07:48:09Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T07:48:09Z",
          lastTransitionTime: "2023-03-13T07:48:03Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "ingress-nginx-defaultbackend-7ddc9cdc87" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "ingress-nginx-controller",
      namespace: "ingress-nginx",
      selfLink:
        "/apis/apps/v1/namespaces/ingress-nginx/deployments/ingress-nginx-controller",
      uid: "bdb91819-5dfa-4b14-86d5-567000c6c974",
      resourceVersion: "2628574985",
      generation: 1,
      creationTimestamp: "2023-03-13T07:48:03Z",
      labels: {
        "app.kubernetes.io/component": "controller",
        "app.kubernetes.io/instance": "ingress-nginx",
        "app.kubernetes.io/managed-by": "Tiller",
        "app.kubernetes.io/name": "ingress-nginx",
        "app.kubernetes.io/version": "0.35.0",
        "app.zhiren.cloud/instance": "aliyun-prod-ingress-nginx",
        "helm.sh/chart": "ingress-nginx-3.3.0"
      },
      annotations: {
        "deployment.kubernetes.io/revision": "1",
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"controller","app.kubernetes.io/instance":"ingress-nginx","app.kubernetes.io/managed-by":"Tiller","app.kubernetes.io/name":"ingress-nginx","app.kubernetes.io/version":"0.35.0","app.zhiren.cloud/instance":"aliyun-prod-ingress-nginx","helm.sh/chart":"ingress-nginx-3.3.0"},"name":"ingress-nginx-controller","namespace":"ingress-nginx"},"spec":{"minReadySeconds":0,"replicas":3,"revisionHistoryLimit":10,"selector":{"matchLabels":{"app.kubernetes.io/component":"controller","app.kubernetes.io/instance":"ingress-nginx","app.kubernetes.io/name":"ingress-nginx"}},"strategy":{"rollingUpdate":{"maxUnavailable":1},"type":"RollingUpdate"},"template":{"metadata":{"labels":{"app.kubernetes.io/component":"controller","app.kubernetes.io/instance":"ingress-nginx","app.kubernetes.io/name":"ingress-nginx"}},"spec":{"affinity":{"nodeAffinity":{"requiredDuringSchedulingIgnoredDuringExecution":{"nodeSelectorTerms":[{"matchExpressions":[{"key":"zhiren.cloud/dedicated","operator":"In","values":["ingress"]}]}]}},"podAntiAffinity":{"requiredDuringSchedulingIgnoredDuringExecution":[{"labelSelector":{"matchExpressions":[{"key":"app.kubernetes.io/name","operator":"In","values":["ingress-nginx"]},{"key":"app.kubernetes.io/instance","operator":"In","values":["ingress-nginx"]},{"key":"app.kubernetes.io/component","operator":"In","values":["controller"]}]},"topologyKey":"kubernetes.io/hostname"}]}},"containers":[{"args":["/nginx-ingress-controller","--default-backend-service=$(POD_NAMESPACE)/ingress-nginx-defaultbackend","--election-id=ingress-controller-leader","--ingress-class=nginx","--configmap=$(POD_NAMESPACE)/ingress-nginx-controller","--report-node-internal-ip-address=true","--enable-ssl-passthrough"],"env":[{"name":"POD_NAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"POD_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"LD_PRELOAD","value":"/usr/local/lib/libmimalloc.so"}],"image":"harbor.oneitfarm.com/gcr/ingress-nginx.controller:v0.35.0@sha256:51b3966f02453315e7b4cbd04f20b83be73f76aad02dc6207f8d9ffac6bf5c7b","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/wait-shutdown"]}}},"livenessProbe":{"failureThreshold":5,"httpGet":{"path":"/healthz","port":10254,"scheme":"HTTP"},"initialDelaySeconds":10,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":1},"name":"controller","ports":[{"containerPort":80,"name":"http","protocol":"TCP"},{"containerPort":443,"name":"https","protocol":"TCP"},{"containerPort":10254,"name":"metrics","protocol":"TCP"}],"readinessProbe":{"failureThreshold":3,"httpGet":{"path":"/healthz","port":10254,"scheme":"HTTP"},"initialDelaySeconds":10,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":1},"resources":{"requests":{"cpu":"2","memory":"4G"}},"securityContext":{"allowPrivilegeEscalation":true,"capabilities":{"add":["NET_BIND_SERVICE"],"drop":["ALL"]},"runAsUser":101}}],"dnsPolicy":"ClusterFirstWithHostNet","hostNetwork":true,"serviceAccountName":"ingress-nginx","terminationGracePeriodSeconds":300,"tolerations":[{"effect":"NoSchedule","key":"zhiren.cloud/dedicated","operator":"Equal","value":"ingress"}]}}}}\n',
        "msp-status": "updating"
      }
    },
    spec: {
      replicas: 3,
      selector: {
        matchLabels: {
          "app.kubernetes.io/component": "controller",
          "app.kubernetes.io/instance": "ingress-nginx",
          "app.kubernetes.io/name": "ingress-nginx"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            "app.kubernetes.io/component": "controller",
            "app.kubernetes.io/instance": "ingress-nginx",
            "app.kubernetes.io/name": "ingress-nginx"
          }
        },
        spec: {
          containers: [
            {
              name: "controller",
              image:
                "harbor.oneitfarm.com/gcr/ingress-nginx.controller:v0.35.0@sha256:51b3966f02453315e7b4cbd04f20b83be73f76aad02dc6207f8d9ffac6bf5c7b",
              args: [
                "/nginx-ingress-controller",
                "--default-backend-service=$(POD_NAMESPACE)/ingress-nginx-defaultbackend",
                "--election-id=ingress-controller-leader",
                "--ingress-class=nginx",
                "--configmap=$(POD_NAMESPACE)/ingress-nginx-controller",
                "--report-node-internal-ip-address=true",
                "--enable-ssl-passthrough"
              ],
              ports: [
                {
                  name: "http",
                  hostPort: 80,
                  containerPort: 80,
                  protocol: "TCP"
                },
                {
                  name: "https",
                  hostPort: 443,
                  containerPort: 443,
                  protocol: "TCP"
                },
                {
                  name: "metrics",
                  hostPort: 10254,
                  containerPort: 10254,
                  protocol: "TCP"
                }
              ],
              env: [
                {
                  name: "POD_NAME",
                  valueFrom: {
                    fieldRef: {
                      apiVersion: "v1",
                      fieldPath: "metadata.name"
                    }
                  }
                },
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
                  name: "LD_PRELOAD",
                  value: "/usr/local/lib/libmimalloc.so"
                }
              ],
              resources: {
                requests: {
                  cpu: "2",
                  memory: "4G"
                }
              },
              livenessProbe: {
                httpGet: {
                  path: "/healthz",
                  port: 10254,
                  scheme: "HTTP"
                },
                initialDelaySeconds: 10,
                timeoutSeconds: 1,
                periodSeconds: 10,
                successThreshold: 1,
                failureThreshold: 5
              },
              readinessProbe: {
                httpGet: {
                  path: "/healthz",
                  port: 10254,
                  scheme: "HTTP"
                },
                initialDelaySeconds: 10,
                timeoutSeconds: 1,
                periodSeconds: 10,
                successThreshold: 1,
                failureThreshold: 3
              },
              lifecycle: {
                preStop: {
                  exec: {
                    command: ["/wait-shutdown"]
                  }
                }
              },
              terminationMessagePath: "/dev/termination-log",
              terminationMessagePolicy: "File",
              imagePullPolicy: "IfNotPresent",
              securityContext: {
                capabilities: {
                  add: ["NET_BIND_SERVICE"],
                  drop: ["ALL"]
                },
                runAsUser: 101,
                allowPrivilegeEscalation: true
              }
            }
          ],
          restartPolicy: "Always",
          terminationGracePeriodSeconds: 300,
          dnsPolicy: "ClusterFirstWithHostNet",
          serviceAccountName: "ingress-nginx",
          serviceAccount: "ingress-nginx",
          hostNetwork: true,
          securityContext: {},
          affinity: {
            nodeAffinity: {
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "zhiren.cloud/dedicated",
                        operator: "In",
                        values: ["ingress"]
                      }
                    ]
                  }
                ]
              }
            },
            podAntiAffinity: {
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "app.kubernetes.io/name",
                        operator: "In",
                        values: ["ingress-nginx"]
                      },
                      {
                        key: "app.kubernetes.io/instance",
                        operator: "In",
                        values: ["ingress-nginx"]
                      },
                      {
                        key: "app.kubernetes.io/component",
                        operator: "In",
                        values: ["controller"]
                      }
                    ]
                  },
                  topologyKey: "kubernetes.io/hostname"
                }
              ]
            }
          },
          schedulerName: "default-scheduler",
          tolerations: [
            {
              key: "zhiren.cloud/dedicated",
              operator: "Equal",
              value: "ingress",
              effect: "NoSchedule"
            }
          ]
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: 1,
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 3,
      updatedReplicas: 3,
      unavailableReplicas: 3,
      conditions: [
        {
          type: "Available",
          status: "False",
          lastUpdateTime: "2023-03-13T07:48:03Z",
          lastTransitionTime: "2023-03-13T07:48:03Z",
          reason: "MinimumReplicasUnavailable",
          message: "Deployment does not have minimum availability."
        },
        {
          type: "Progressing",
          status: "False",
          lastUpdateTime: "2023-03-13T07:58:04Z",
          lastTransitionTime: "2023-03-13T07:58:04Z",
          reason: "ProgressDeadlineExceeded",
          message:
            'ReplicaSet "ingress-nginx-controller-bfbd74785" has timed out progressing.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "dp-0xoj3a3zi13rn",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/dp-0xoj3a3zi13rn",
      uid: "7cc9b8fa-4b4a-4e0e-85cc-c5c338923326",
      resourceVersion: "2628475926",
      generation: 1,
      creationTimestamp: "2023-03-13T07:16:24Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "dp-0xoj3a3zi13rn",
        deploy_type: "deployment",
        deployserver_appid: "f056bd69f94748929fb73b96e845e163",
        deployserver_appversion: "0.0.0",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        parent_app: "dp-0xoj3a3zi13rn",
        resource_type: "deployment",
        "serving.knative.dev/revision": "sal200uw7b9065f02303134bpd8o00ao",
        "serving.knative.dev/revisionUID": "sal200uw7b9065f02303134bpd8o00ao",
        unique_id: "sal200uw7b9065f02303134bpd8o00ao"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw7b9065f02303134bpd8o00ao",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw7b9065f02303134bpd8o00ao",
        "deployment.kubernetes.io/revision": "1",
        "msp-status": "running",
        "zhiren.cloud/last-applied":
          '{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02303134bpd8o00ao","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02303134bpd8o00ao"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-0xoj3a3zi13rn","deploy_type":"deployment","deployserver_appid":"f056bd69f94748929fb73b96e845e163","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-0xoj3a3zi13rn","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02303134bpd8o00ao","serving.knative.dev/revisionUID":"sal200uw7b9065f02303134bpd8o00ao","unique_id":"sal200uw7b9065f02303134bpd8o00ao"},"name":"dp-0xoj3a3zi13rn","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"dp-0xoj3a3zi13rn"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02303134bpd8o00ao","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02303134bpd8o00ao"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-0xoj3a3zi13rn","deploy_type":"deployment","deployserver_appid":"f056bd69f94748929fb73b96e845e163","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-0xoj3a3zi13rn","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02303134bpd8o00ao","serving.knative.dev/revisionUID":"sal200uw7b9065f02303134bpd8o00ao","unique_id":"sal200uw7b9065f02303134bpd8o00ao"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303073oft5a3cbd:0.0.38"},{"name":"IDG_UNIQUEID","value":"sal200uw7b9065f02303134bpd8o00ao"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"test"},{"name":"IDG_SERVICE_NAME","value":"团购小程序"},{"name":"IDG_APPID","value":"f056bd69f94748929fb73b96e845e163"},{"name":"IDG_VERSION","value":"0.0.0"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"isMigrate","value":"0"},{"name":"isMigration","value":"0"},{"name":"IDG_SERVICE_HOST_NAME","value":"dp-0xoj3a3zi13rn-clusterip.ns-deploy"}],"image":"harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303073oft5a3cbd:0.0.38","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","readinessProbe":{"failureThreshold":3,"initialDelaySeconds":2,"periodSeconds":2,"successThreshold":3,"tcpSocket":{"port":80},"timeoutSeconds":2},"resources":{"limits":{"cpu":"4","memory":"4Gi"},"requests":{"cpu":"1m","memory":"128Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/opt/ci123/www/html/webroot/static/js","name":"dp-0xoj3a3zi13rn-configmap"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","imagePullPolicy":"Always","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"configMap":{"name":"dp-0xoj3a3zi13rn-configmap"},"name":"dp-0xoj3a3zi13rn-configmap"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"}]}}},"status":{}}'
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: "dp-0xoj3a3zi13rn"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "dp-0xoj3a3zi13rn",
            deploy_type: "deployment",
            deployserver_appid: "f056bd69f94748929fb73b96e845e163",
            deployserver_appversion: "0.0.0",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "dp-0xoj3a3zi13rn",
            resource_type: "deployment",
            "serving.knative.dev/revision": "sal200uw7b9065f02303134bpd8o00ao",
            "serving.knative.dev/revisionUID":
              "sal200uw7b9065f02303134bpd8o00ao",
            unique_id: "sal200uw7b9065f02303134bpd8o00ao"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw7b9065f02303134bpd8o00ao",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw7b9065f02303134bpd8o00ao"
          }
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
              name: "dp-0xoj3a3zi13rn-configmap",
              configMap: {
                name: "dp-0xoj3a3zi13rn-configmap",
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
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                "harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303073oft5a3cbd:0.0.38",
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
                    "harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303073oft5a3cbd:0.0.38"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw7b9065f02303134bpd8o00ao"
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
                  value: "test"
                },
                {
                  name: "IDG_SERVICE_NAME",
                  value: "团购小程序"
                },
                {
                  name: "IDG_APPID",
                  value: "f056bd69f94748929fb73b96e845e163"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.0"
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
                  value: "dp-0xoj3a3zi13rn-clusterip.ns-deploy"
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
                  name: "dp-0xoj3a3zi13rn-configmap",
                  mountPath: "/opt/ci123/www/html/webroot/static/js"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T07:16:49Z",
          lastTransitionTime: "2023-03-13T07:16:49Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T07:16:49Z",
          lastTransitionTime: "2023-03-13T07:16:24Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "dp-0xoj3a3zi13rn-6bb89797b" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "dp-0baylgmckoge8",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/dp-0baylgmckoge8",
      uid: "e3eb6582-5059-46ef-bf7e-a7d7685fe6ea",
      resourceVersion: "2628476661",
      generation: 1,
      creationTimestamp: "2023-03-13T07:16:22Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "dp-0baylgmckoge8",
        deploy_type: "deployment",
        deployserver_appid: "f056bd69f94748929fb73b96e845e163",
        deployserver_appversion: "0.0.0",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        parent_app: "dp-0baylgmckoge8",
        resource_type: "deployment",
        "serving.knative.dev/revision": "sal200uw7b9065f02303134bpd7100x3",
        "serving.knative.dev/revisionUID": "sal200uw7b9065f02303134bpd7100x3",
        sidecarset_version: "1638496451",
        unique_id: "sal200uw7b9065f02303134bpd7100x3"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw7b9065f02303134bpd7100x3",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw7b9065f02303134bpd7100x3",
        "deployment.kubernetes.io/revision": "1",
        "msp-status": "running",
        "zhiren.cloud/last-applied":
          '{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02303134bpd7100x3","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02303134bpd7100x3"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-0baylgmckoge8","deploy_type":"deployment","deployserver_appid":"f056bd69f94748929fb73b96e845e163","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-0baylgmckoge8","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02303134bpd7100x3","serving.knative.dev/revisionUID":"sal200uw7b9065f02303134bpd7100x3","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02303134bpd7100x3"},"name":"dp-0baylgmckoge8","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"dp-0baylgmckoge8"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02303134bpd7100x3","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02303134bpd7100x3"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-0baylgmckoge8","deploy_type":"deployment","deployserver_appid":"f056bd69f94748929fb73b96e845e163","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-0baylgmckoge8","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02303134bpd7100x3","serving.knative.dev/revisionUID":"sal200uw7b9065f02303134bpd7100x3","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02303134bpd7100x3"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303104nnv5rea5x:0.0.43"},{"name":"IDG_UNIQUEID","value":"sal200uw7b9065f02303134bpd7100x3"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"test"},{"name":"IDG_SERVICE_NAME","value":"团购小程序"},{"name":"IDG_APPID","value":"f056bd69f94748929fb73b96e845e163"},{"name":"IDG_VERSION","value":"0.0.0"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303104nnv5rea5x:0.0.43"},{"name":"ENVIRONMENT","value":"production"},{"name":"ENABLE_SSHD","value":"true"},{"name":"SSH_CONFIG","value":"SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="},{"name":"SSH_PRIVATE_KEY","value":"LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBBSUJBQUtDQVFFQXVGOFkvY0llK0taTjJsYWdaZS84L2lCSTBkN2orZkg3a3k4akhhbmJLdnZSbkZyQg0KcGxrR3UxSkxmOFFBU3JVZDR4ZHFQWG5FRS85bldKZ2EwTG5XYmVIR0tjZEhYZGplcW1JbXlMMU9FcW16OGovTQ0Kbmg4ck52RWhBVktsc0R0dnk1bng5SnhiQndrNlhvenVST1RhdFlVRzBkVm12UmdlVCtWVytlSGRWVGZ2emRBSw0Kd0RXL3JGZU5OZWgwbnlmeXpaUEVxckRJcDJyRmNBeVdyYWJBMjBYQi9vZ2VKV3hBL2hPTDJ0VTdvc2ZpUVlaaQ0KbDZqOTlyTE5yV1NOaXRDYnExQ2NNVU9uRTFGV1VlQ1IvZ3RGdi9KcWFSSk9aNTBvNDFxYWVoZFFSZW9FcEhaKw0KWDNIczFHeXZJQktyd29wWlErK3RZZUNyYjBSd1VYL1ZPZ2Z6cHdJREFRQUJBb0lCQUVyR3B3Z2tOeE41djVHUw0KR0xPL1JjaDdwNDBXN1RkdUlTNXNxNzFZS24rZ2FqOFR2LzZMbE9OY1dTcVVmOW5NNHpZN1JPZHgvMGh0Q2Frdw0KNTQ5SUQrTzQ4Zm4zek1ZUE14Ky9keU5yUThMbCtRbURQcVhTMW1BT0kraTVjR0d0ZVlZR0JjL0RxbGVNTXBRdQ0KYkdTY3ZPZHA4SDRpSXUwR1h5VGdTd3BGeE5MT2tIRWlyajJOeEpsZkJsSTZhRUxCNkt4MWVxYlhaZ2ZoUXVITw0KV1BPYVQ0aWd1eTMwWDErb2FodHlwTHUwTzc3L0RQQUFGVEdzMVFRaUtaM3I5bmNUSHBsdXR0clhnQ2d4ekNESw0KeFZtcExlSHp5NEpUWlltQXZqcDdJOVVadzRWTGVnemtnZlNUWHFHSUR4MXB5K01HNGcvVGNLdDJxZTdIcVFDRw0KQzVnSVBnRUNnWUVBNXZtN2pSSjBSbkhnSm5kREh6U0tUMG80OVNJSDc0bGh1dWZUQmZldTZackc2STlSNjcxNQ0KNVNKN29vU0FLNjh4NWlzTW9BVHFraVkzQWdGVmhIdWI2ZmVnSHRhWVhBUU1JYnVOZ2crTWoyallIcmVGUnBMag0KLzRFOTlDUmgxc2ZLSjhFWlE1NVFySGtNVVRsVTBJNG1LOU52VzQzenVEZVhRcm9CS1F4QUZlY0NnWUVBekZqRQ0KOFVDSlpnMFdXL3Z1czBDdDhMdThJa2hyRlhScWFBRFYzNzdwdjdrblppUWhZV2dRZC9HcFB2Nmp2Ryt2NmE2UQ0KTlhBK2g3S0UxUWh0VFljb2R5MURKd0VUU0VuczV3eXZPMy9kWDROR1pKbFVQdW5RS2U0WmJnd1NaREtDVnU2MA0KV0puY0pSS0pzcmc3b09oNFVORnFqRkhWRnVxY1dEekc4ZG5WL0VFQ2dZRUF0OVNMTVB3L0R0SVRWSW9YSWY3dg0KRmF3OUtOeXM5RGlqVDk2eVZVMk1LT0RHN3RFaW9qMXJocktyTSszQkZRT2E4MVhQOW92ekpkN0VhUlFtdkFxbA0KVE5HSTN3SnN3TTkzMkdFdGZ4WmhDTUtwUDhsUWlacmZXN3ZCVTA2aGtBL3pGVERhcXJhVi9xOVkza3lDOUhvdQ0KWnpNZ3JmMk12RkdDVWRrNGt6THN6b0VDZ1lFQXJsWHRiNFdIc3pEbktvSzlHdURMaE40bG0zbjlJY2k0SHhMWA0KWkpRVUNDV0duM1dqcE42TGJra1dBMUJya0pBWW5GejVXeDN2dXdWcW5mVWFpMUlNQytEcHNaVVJSbE1MY2ZNNA0KYktLaDBxTEVvMzdNaVFBaFFDU0tQWUMvRUF5bmRsTWdPWmJLWWpaMms2cnA5RlZna0ZLWmZDMDBodUNSa2hZSQ0KQkwyNytnRUNnWUFUNFdzMFI2ZVB5cTJPNXozdG1NLzRWczFtaXpHbXhOVXJnc3owMndoczZ0cjVDUHlnMjh3Mw0KaWVVZERNQ2l5WmZVNkZlODJTK29MZ3hWK2QwOFRDd20yVm5FbmpXcVlLV1V3V0Z4WHRxY0JiTHEwWnc3eFVTcw0Kb25lVGFPWGZ0OE5wSE9KalVDaXJCV2I1dCtBTHVyL2ZtVEJ5R1dpZmZpMVhOOHdpS25FaUdRPT0NCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"},{"name":"PHP_EXTENSIONS_ENABLE","value":"apcu,bcmath,swoole,gd,gmp"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"MYSQL_DATABASE_DB1_HOST_WRITE","value":"127.0.0.1"},{"name":"MYSQL_DATABASE_DB1_PORT","value":"3306"},{"name":"MYSQL_DATABASE_DB1_NAME","value":"dbnnpzqvih1cuzib"},{"name":"MYSQL_DATABASE_DB1_PASSWORD","value":"DB1"},{"name":"MYSQL_DATABASE_DB1_USERNAME","value":"DB1"},{"name":"isMigrate","value":"1"},{"name":"isMigration","value":"1"},{"name":"IDG_HOST_8080","value":"dp-0baylgmckoge8.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_GATEWAY_ADDR","value":"dp-0baylgmckoge8.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_HOST_NAME","value":"dp-0baylgmckoge8-clusterip.ns-deploy"}],"image":"harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303104nnv5rea5x:0.0.43","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"4","memory":"4Gi"},"requests":{"cpu":"1m","memory":"128Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","imagePullPolicy":"Always","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"}]}}},"status":{}}'
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: "dp-0baylgmckoge8"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "dp-0baylgmckoge8",
            deploy_type: "deployment",
            deployserver_appid: "f056bd69f94748929fb73b96e845e163",
            deployserver_appversion: "0.0.0",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "dp-0baylgmckoge8",
            resource_type: "deployment",
            "serving.knative.dev/revision": "sal200uw7b9065f02303134bpd7100x3",
            "serving.knative.dev/revisionUID":
              "sal200uw7b9065f02303134bpd7100x3",
            sidecarset_version: "1638496451",
            unique_id: "sal200uw7b9065f02303134bpd7100x3"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw7b9065f02303134bpd7100x3",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw7b9065f02303134bpd7100x3"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                "harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303104nnv5rea5x:0.0.43",
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
                    "harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303104nnv5rea5x:0.0.43"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw7b9065f02303134bpd7100x3"
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
                  value: "test"
                },
                {
                  name: "IDG_SERVICE_NAME",
                  value: "团购小程序"
                },
                {
                  name: "IDG_APPID",
                  value: "f056bd69f94748929fb73b96e845e163"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.0"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value:
                    "harbor.oneitfarm.com/itfarm-test/sal200007b9065f02303104nnv5rea5x:0.0.43"
                },
                {
                  name: "ENVIRONMENT",
                  value: "production"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
                },
                {
                  name: "SSH_CONFIG",
                  value:
                    "SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="
                },
                {
                  name: "SSH_PRIVATE_KEY",
                  value:
                    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBBSUJBQUtDQVFFQXVGOFkvY0llK0taTjJsYWdaZS84L2lCSTBkN2orZkg3a3k4akhhbmJLdnZSbkZyQg0KcGxrR3UxSkxmOFFBU3JVZDR4ZHFQWG5FRS85bldKZ2EwTG5XYmVIR0tjZEhYZGplcW1JbXlMMU9FcW16OGovTQ0Kbmg4ck52RWhBVktsc0R0dnk1bng5SnhiQndrNlhvenVST1RhdFlVRzBkVm12UmdlVCtWVytlSGRWVGZ2emRBSw0Kd0RXL3JGZU5OZWgwbnlmeXpaUEVxckRJcDJyRmNBeVdyYWJBMjBYQi9vZ2VKV3hBL2hPTDJ0VTdvc2ZpUVlaaQ0KbDZqOTlyTE5yV1NOaXRDYnExQ2NNVU9uRTFGV1VlQ1IvZ3RGdi9KcWFSSk9aNTBvNDFxYWVoZFFSZW9FcEhaKw0KWDNIczFHeXZJQktyd29wWlErK3RZZUNyYjBSd1VYL1ZPZ2Z6cHdJREFRQUJBb0lCQUVyR3B3Z2tOeE41djVHUw0KR0xPL1JjaDdwNDBXN1RkdUlTNXNxNzFZS24rZ2FqOFR2LzZMbE9OY1dTcVVmOW5NNHpZN1JPZHgvMGh0Q2Frdw0KNTQ5SUQrTzQ4Zm4zek1ZUE14Ky9keU5yUThMbCtRbURQcVhTMW1BT0kraTVjR0d0ZVlZR0JjL0RxbGVNTXBRdQ0KYkdTY3ZPZHA4SDRpSXUwR1h5VGdTd3BGeE5MT2tIRWlyajJOeEpsZkJsSTZhRUxCNkt4MWVxYlhaZ2ZoUXVITw0KV1BPYVQ0aWd1eTMwWDErb2FodHlwTHUwTzc3L0RQQUFGVEdzMVFRaUtaM3I5bmNUSHBsdXR0clhnQ2d4ekNESw0KeFZtcExlSHp5NEpUWlltQXZqcDdJOVVadzRWTGVnemtnZlNUWHFHSUR4MXB5K01HNGcvVGNLdDJxZTdIcVFDRw0KQzVnSVBnRUNnWUVBNXZtN2pSSjBSbkhnSm5kREh6U0tUMG80OVNJSDc0bGh1dWZUQmZldTZackc2STlSNjcxNQ0KNVNKN29vU0FLNjh4NWlzTW9BVHFraVkzQWdGVmhIdWI2ZmVnSHRhWVhBUU1JYnVOZ2crTWoyallIcmVGUnBMag0KLzRFOTlDUmgxc2ZLSjhFWlE1NVFySGtNVVRsVTBJNG1LOU52VzQzenVEZVhRcm9CS1F4QUZlY0NnWUVBekZqRQ0KOFVDSlpnMFdXL3Z1czBDdDhMdThJa2hyRlhScWFBRFYzNzdwdjdrblppUWhZV2dRZC9HcFB2Nmp2Ryt2NmE2UQ0KTlhBK2g3S0UxUWh0VFljb2R5MURKd0VUU0VuczV3eXZPMy9kWDROR1pKbFVQdW5RS2U0WmJnd1NaREtDVnU2MA0KV0puY0pSS0pzcmc3b09oNFVORnFqRkhWRnVxY1dEekc4ZG5WL0VFQ2dZRUF0OVNMTVB3L0R0SVRWSW9YSWY3dg0KRmF3OUtOeXM5RGlqVDk2eVZVMk1LT0RHN3RFaW9qMXJocktyTSszQkZRT2E4MVhQOW92ekpkN0VhUlFtdkFxbA0KVE5HSTN3SnN3TTkzMkdFdGZ4WmhDTUtwUDhsUWlacmZXN3ZCVTA2aGtBL3pGVERhcXJhVi9xOVkza3lDOUhvdQ0KWnpNZ3JmMk12RkdDVWRrNGt6THN6b0VDZ1lFQXJsWHRiNFdIc3pEbktvSzlHdURMaE40bG0zbjlJY2k0SHhMWA0KWkpRVUNDV0duM1dqcE42TGJra1dBMUJya0pBWW5GejVXeDN2dXdWcW5mVWFpMUlNQytEcHNaVVJSbE1MY2ZNNA0KYktLaDBxTEVvMzdNaVFBaFFDU0tQWUMvRUF5bmRsTWdPWmJLWWpaMms2cnA5RlZna0ZLWmZDMDBodUNSa2hZSQ0KQkwyNytnRUNnWUFUNFdzMFI2ZVB5cTJPNXozdG1NLzRWczFtaXpHbXhOVXJnc3owMndoczZ0cjVDUHlnMjh3Mw0KaWVVZERNQ2l5WmZVNkZlODJTK29MZ3hWK2QwOFRDd20yVm5FbmpXcVlLV1V3V0Z4WHRxY0JiTHEwWnc3eFVTcw0Kb25lVGFPWGZ0OE5wSE9KalVDaXJCV2I1dCtBTHVyL2ZtVEJ5R1dpZmZpMVhOOHdpS25FaUdRPT0NCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"
                },
                {
                  name: "PHP_EXTENSIONS_ENABLE",
                  value: "apcu,bcmath,swoole,gd,gmp"
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
                  name: "MYSQL_DATABASE_DB1_HOST_WRITE",
                  value: "127.0.0.1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PORT",
                  value: "3306"
                },
                {
                  name: "MYSQL_DATABASE_DB1_NAME",
                  value: "dbnnpzqvih1cuzib"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PASSWORD",
                  value: "DB1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_USERNAME",
                  value: "DB1"
                },
                {
                  name: "isMigrate",
                  value: "1"
                },
                {
                  name: "isMigration",
                  value: "1"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "dp-0baylgmckoge8.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_GATEWAY_ADDR",
                  value: "dp-0baylgmckoge8.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_HOST_NAME",
                  value: "dp-0baylgmckoge8-clusterip.ns-deploy"
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
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T07:17:00Z",
          lastTransitionTime: "2023-03-13T07:17:00Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T07:17:00Z",
          lastTransitionTime: "2023-03-13T07:16:22Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "dp-0baylgmckoge8-656748469d" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "dp-wcs6yn1mnpkql",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/dp-wcs6yn1mnpkql",
      uid: "b602aeb0-026e-4f98-92be-e85fdd18efde",
      resourceVersion: "2628476327",
      generation: 1,
      creationTimestamp: "2023-03-13T07:16:21Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "dp-wcs6yn1mnpkql",
        deploy_type: "deployment",
        deployserver_appid: "62357aebd7fc480fa88b9e92249e57d8",
        deployserver_appversion: "0.0.74",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        parent_app: "dp-wcs6yn1mnpkql",
        resource_type: "deployment",
        "serving.knative.dev/revision": "sal200uw7b9065f02303134bpd7800t0",
        "serving.knative.dev/revisionUID": "sal200uw7b9065f02303134bpd7800t0",
        sidecarset_version: "1638496451",
        unique_id: "sal200uw7b9065f02303134bpd7800t0"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw7b9065f02303134bpd7800t0",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw7b9065f02303134bpd7800t0",
        "deployment.kubernetes.io/revision": "1",
        "msp-status": "running",
        "zhiren.cloud/last-applied":
          '{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02303134bpd7800t0","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02303134bpd7800t0"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-wcs6yn1mnpkql","deploy_type":"deployment","deployserver_appid":"62357aebd7fc480fa88b9e92249e57d8","deployserver_appversion":"0.0.74","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-wcs6yn1mnpkql","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02303134bpd7800t0","serving.knative.dev/revisionUID":"sal200uw7b9065f02303134bpd7800t0","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02303134bpd7800t0"},"name":"dp-wcs6yn1mnpkql","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"dp-wcs6yn1mnpkql"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02303134bpd7800t0","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02303134bpd7800t0"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-wcs6yn1mnpkql","deploy_type":"deployment","deployserver_appid":"62357aebd7fc480fa88b9e92249e57d8","deployserver_appversion":"0.0.74","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-wcs6yn1mnpkql","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02303134bpd7800t0","serving.knative.dev/revisionUID":"sal200uw7b9065f02303134bpd7800t0","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02303134bpd7800t0"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022091944xa3lb7up:0.0.13"},{"name":"IDG_UNIQUEID","value":"sal200uw7b9065f02303134bpd7800t0"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"test"},{"name":"IDG_SERVICE_NAME","value":"广告服务"},{"name":"IDG_APPID","value":"62357aebd7fc480fa88b9e92249e57d8"},{"name":"IDG_VERSION","value":"0.0.74"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022091944xa3lb7up:0.0.13"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"MYSQL_DATABASE_DB1_HOST_WRITE","value":"127.0.0.1"},{"name":"MYSQL_DATABASE_DB1_PORT","value":"3306"},{"name":"MYSQL_DATABASE_DB1_NAME","value":"dbg693afu7ndzgkf"},{"name":"MYSQL_DATABASE_DB1_PASSWORD","value":"DB1"},{"name":"MYSQL_DATABASE_DB1_USERNAME","value":"DB1"},{"name":"isMigrate","value":"1"},{"name":"isMigration","value":"1"}],"image":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022091944xa3lb7up:0.0.13","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"4","memory":"4Gi"},"requests":{"cpu":"5m","memory":"129Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","imagePullPolicy":"Always","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"}]}}},"status":{}}'
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: "dp-wcs6yn1mnpkql"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "dp-wcs6yn1mnpkql",
            deploy_type: "deployment",
            deployserver_appid: "62357aebd7fc480fa88b9e92249e57d8",
            deployserver_appversion: "0.0.74",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "dp-wcs6yn1mnpkql",
            resource_type: "deployment",
            "serving.knative.dev/revision": "sal200uw7b9065f02303134bpd7800t0",
            "serving.knative.dev/revisionUID":
              "sal200uw7b9065f02303134bpd7800t0",
            sidecarset_version: "1638496451",
            unique_id: "sal200uw7b9065f02303134bpd7800t0"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw7b9065f02303134bpd7800t0",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw7b9065f02303134bpd7800t0"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                "harbor.gw002.oneitfarm.com/library/sal200007b9065f022091944xa3lb7up:0.0.13",
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
                    "harbor.gw002.oneitfarm.com/library/sal200007b9065f022091944xa3lb7up:0.0.13"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw7b9065f02303134bpd7800t0"
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
                  value: "test"
                },
                {
                  name: "IDG_SERVICE_NAME",
                  value: "广告服务"
                },
                {
                  name: "IDG_APPID",
                  value: "62357aebd7fc480fa88b9e92249e57d8"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.74"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value:
                    "harbor.gw002.oneitfarm.com/library/sal200007b9065f022091944xa3lb7up:0.0.13"
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
                  name: "MYSQL_DATABASE_DB1_HOST_WRITE",
                  value: "127.0.0.1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PORT",
                  value: "3306"
                },
                {
                  name: "MYSQL_DATABASE_DB1_NAME",
                  value: "dbg693afu7ndzgkf"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PASSWORD",
                  value: "DB1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_USERNAME",
                  value: "DB1"
                },
                {
                  name: "isMigrate",
                  value: "1"
                },
                {
                  name: "isMigration",
                  value: "1"
                }
              ],
              resources: {
                limits: {
                  cpu: "4",
                  memory: "4Gi"
                },
                requests: {
                  cpu: "5m",
                  memory: "129Mi"
                }
              },
              volumeMounts: [
                {
                  name: "config-dynamic-update-extensions",
                  mountPath: "/etc/my_init.d/dynamic-update-init.sh",
                  subPath: "dynamic-update-init.sh"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 1,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T07:16:52Z",
          lastTransitionTime: "2023-03-13T07:16:52Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T07:16:52Z",
          lastTransitionTime: "2023-03-13T07:16:21Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "dp-wcs6yn1mnpkql-67d67f549c" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "dp-ygxwjdhayu9us",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/dp-ygxwjdhayu9us",
      uid: "e1cc4a1f-0939-47e0-af03-d0da0b0f9caa",
      resourceVersion: "2628329130",
      generation: 2,
      creationTimestamp: "2023-03-13T06:01:22Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "dp-ygxwjdhayu9us",
        deploy_type: "deployment",
        deployserver_appid: "6b17a55a9eca4363b858adef808e9a37",
        deployserver_appversion: "0.0.35",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        parent_app: "dp-ygxwjdhayu9us",
        resource_type: "deployment",
        "serving.knative.dev/revision": "sal200uw7b9065f02205063xu3s400ku",
        "serving.knative.dev/revisionUID": "sal200uw7b9065f02205063xu3s400ku",
        sidecarset_version: "1638496451",
        unique_id: "sal200uw7b9065f02205063xu3s400ku"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw7b9065f02205063xu3s400ku",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw7b9065f02205063xu3s400ku",
        "deployment.kubernetes.io/revision": "2",
        "msp-status": "running",
        "zhiren.cloud/last-applied":
          '{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02205063xu3s400ku","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02205063xu3s400ku"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-ygxwjdhayu9us","deploy_type":"deployment","deployserver_appid":"6b17a55a9eca4363b858adef808e9a37","deployserver_appversion":"0.0.35","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-ygxwjdhayu9us","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02205063xu3s400ku","serving.knative.dev/revisionUID":"sal200uw7b9065f02205063xu3s400ku","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02205063xu3s400ku"},"name":"dp-ygxwjdhayu9us","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"dp-ygxwjdhayu9us"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02205063xu3s400ku","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02205063xu3s400ku"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-ygxwjdhayu9us","deploy_type":"deployment","deployserver_appid":"6b17a55a9eca4363b858adef808e9a37","deployserver_appversion":"0.0.35","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-ygxwjdhayu9us","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02205063xu3s400ku","serving.knative.dev/revisionUID":"sal200uw7b9065f02205063xu3s400ku","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02205063xu3s400ku"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127amr3b7ep:0.0.14"},{"name":"IDG_UNIQUEID","value":"sal200uw7b9065f02205063xu3s400ku"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"production"},{"name":"IDG_SERVICE_NAME","value":"类目中心服务"},{"name":"IDG_APPID","value":"6b17a55a9eca4363b858adef808e9a37"},{"name":"IDG_VERSION","value":"0.0.35"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127amr3b7ep:0.0.14"},{"name":"PHP72_FPM_ALLOCATABLE_MEMORY","value":"1024"},{"name":"PHP72_FPM_PROCESS_MEMORY_COST","value":"70"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"MYSQL_DATABASE_DB1_HOST_WRITE","value":"127.0.0.1"},{"name":"MYSQL_DATABASE_DB1_PORT","value":"3306"},{"name":"MYSQL_DATABASE_DB1_NAME","value":"dbd5rjtypa5slfps"},{"name":"MYSQL_DATABASE_DB1_PASSWORD","value":"DB1"},{"name":"MYSQL_DATABASE_DB1_USERNAME","value":"DB1"},{"name":"isMigrate","value":"1"},{"name":"isMigration","value":"1"},{"name":"IDG_HOST_8080","value":"dp-ygxwjdhayu9us.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_GATEWAY_ADDR","value":"dp-ygxwjdhayu9us.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_HOST_NAME","value":"dp-ygxwjdhayu9us-clusterip.ns-deploy"}],"image":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127amr3b7ep:0.0.14","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"2","memory":"2Gi"},"requests":{"cpu":"5m","memory":"83Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","imagePullPolicy":"Always","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"}]}}},"status":{}}'
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: "dp-ygxwjdhayu9us"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "dp-ygxwjdhayu9us",
            deploy_type: "deployment",
            deployserver_appid: "6b17a55a9eca4363b858adef808e9a37",
            deployserver_appversion: "0.0.35",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "dp-ygxwjdhayu9us",
            resource_type: "deployment",
            "serving.knative.dev/revision": "sal200uw7b9065f02205063xu3s400ku",
            "serving.knative.dev/revisionUID":
              "sal200uw7b9065f02205063xu3s400ku",
            sidecarset_version: "1638496451",
            unique_id: "sal200uw7b9065f02205063xu3s400ku"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw7b9065f02205063xu3s400ku",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw7b9065f02205063xu3s400ku"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                "harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127amr3b7ep:0.0.14",
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
                    "harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127amr3b7ep:0.0.14"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw7b9065f02205063xu3s400ku"
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
                  value: "类目中心服务"
                },
                {
                  name: "IDG_APPID",
                  value: "6b17a55a9eca4363b858adef808e9a37"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.35"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value:
                    "harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127amr3b7ep:0.0.14"
                },
                {
                  name: "PHP72_FPM_ALLOCATABLE_MEMORY",
                  value: "1024"
                },
                {
                  name: "PHP72_FPM_PROCESS_MEMORY_COST",
                  value: "70"
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
                  name: "MYSQL_DATABASE_DB1_HOST_WRITE",
                  value: "127.0.0.1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PORT",
                  value: "3306"
                },
                {
                  name: "MYSQL_DATABASE_DB1_NAME",
                  value: "dbd5rjtypa5slfps"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PASSWORD",
                  value: "DB1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_USERNAME",
                  value: "DB1"
                },
                {
                  name: "isMigrate",
                  value: "1"
                },
                {
                  name: "isMigration",
                  value: "1"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "dp-ygxwjdhayu9us.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_GATEWAY_ADDR",
                  value: "dp-ygxwjdhayu9us.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_HOST_NAME",
                  value: "dp-ygxwjdhayu9us-clusterip.ns-deploy"
                }
              ],
              resources: {
                limits: {
                  cpu: "2",
                  memory: "2Gi"
                },
                requests: {
                  cpu: "5m",
                  memory: "83Mi"
                }
              },
              volumeMounts: [
                {
                  name: "config-dynamic-update-extensions",
                  mountPath: "/etc/my_init.d/dynamic-update-init.sh",
                  subPath: "dynamic-update-init.sh"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 2,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T06:02:07Z",
          lastTransitionTime: "2023-03-13T06:02:07Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T06:15:24Z",
          lastTransitionTime: "2023-03-13T06:01:22Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "dp-ygxwjdhayu9us-558847ff97" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "dp-yfvcuiob4waby",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/dp-yfvcuiob4waby",
      uid: "c1031ab8-383b-4a7f-a8b0-65848d86f24b",
      resourceVersion: "2628386187",
      generation: 4,
      creationTimestamp: "2023-03-13T06:01:20Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "dp-yfvcuiob4waby",
        deploy_type: "deployment",
        deployserver_appid: "866674bd1da4468db55f81ceee17e998",
        deployserver_appversion: "0.0.27",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        parent_app: "dp-yfvcuiob4waby",
        resource_type: "deployment",
        "serving.knative.dev/revision": "sal200uw7b9065f02205063xu3s30017",
        "serving.knative.dev/revisionUID": "sal200uw7b9065f02205063xu3s30017",
        sidecarset_version: "1638496451",
        unique_id: "sal200uw7b9065f02205063xu3s30017"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uw7b9065f02205063xu3s30017",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uw7b9065f02205063xu3s30017",
        "deployment.kubernetes.io/revision": "3",
        "msp-status": "running",
        "zhiren.cloud/last-applied":
          '{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02205063xu3s30017","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02205063xu3s30017"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-yfvcuiob4waby","deploy_type":"deployment","deployserver_appid":"866674bd1da4468db55f81ceee17e998","deployserver_appversion":"0.0.27","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-yfvcuiob4waby","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02205063xu3s30017","serving.knative.dev/revisionUID":"sal200uw7b9065f02205063xu3s30017","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02205063xu3s30017"},"name":"dp-yfvcuiob4waby","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"dp-yfvcuiob4waby"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uw7b9065f02205063xu3s30017","aries.image-policy.k8s.io/unique-id":"sal200uw7b9065f02205063xu3s30017"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"dp-yfvcuiob4waby","deploy_type":"deployment","deployserver_appid":"866674bd1da4468db55f81ceee17e998","deployserver_appversion":"0.0.27","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"dp-yfvcuiob4waby","resource_type":"deployment","serving.knative.dev/revision":"sal200uw7b9065f02205063xu3s30017","serving.knative.dev/revisionUID":"sal200uw7b9065f02205063xu3s30017","sidecarset_version":"1638496451","unique_id":"sal200uw7b9065f02205063xu3s30017"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127xm29b729:0.0.4"},{"name":"IDG_UNIQUEID","value":"sal200uw7b9065f02205063xu3s30017"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"production"},{"name":"IDG_SERVICE_NAME","value":"类目中心运营商"},{"name":"IDG_APPID","value":"866674bd1da4468db55f81ceee17e998"},{"name":"IDG_VERSION","value":"0.0.27"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127xm29b729:0.0.4"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"MYSQL_DATABASE_DB1_HOST_WRITE","value":"127.0.0.1"},{"name":"MYSQL_DATABASE_DB1_PORT","value":"3306"},{"name":"MYSQL_DATABASE_DB1_NAME","value":"dbstgclztase8hsp"},{"name":"MYSQL_DATABASE_DB1_PASSWORD","value":"DB1"},{"name":"MYSQL_DATABASE_DB1_USERNAME","value":"DB1"},{"name":"isMigrate","value":"1"},{"name":"isMigration","value":"1"},{"name":"IDG_HOST_8080","value":"dp-qon2gf570y9sd.gw002.oneitfarm.com"},{"name":"IDG_HOST_8080","value":"dp-yfvcuiob4waby.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_GATEWAY_ADDR","value":"dp-qon2gf570y9sd.gw002.oneitfarm.com,dp-yfvcuiob4waby.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_HOST_NAME","value":"dp-yfvcuiob4waby-clusterip.ns-deploy"}],"image":"harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127xm29b729:0.0.4","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"4","memory":"4Gi"},"requests":{"cpu":"3m","memory":"68Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","imagePullPolicy":"Always","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"}]}}},"status":{}}'
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: "dp-yfvcuiob4waby"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "dp-yfvcuiob4waby",
            deploy_type: "deployment",
            deployserver_appid: "866674bd1da4468db55f81ceee17e998",
            deployserver_appversion: "0.0.27",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "dp-yfvcuiob4waby",
            resource_type: "deployment",
            "serving.knative.dev/revision": "sal200uw7b9065f02205063xu3s30017",
            "serving.knative.dev/revisionUID":
              "sal200uw7b9065f02205063xu3s30017",
            sidecarset_version: "1638496451",
            unique_id: "sal200uw7b9065f02205063xu3s30017"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uw7b9065f02205063xu3s30017",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uw7b9065f02205063xu3s30017"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                "harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127xm29b729:0.0.4",
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
                    "harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127xm29b729:0.0.4"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uw7b9065f02205063xu3s30017"
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
                  value: "类目中心运营商"
                },
                {
                  name: "IDG_APPID",
                  value: "866674bd1da4468db55f81ceee17e998"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.27"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value:
                    "harbor.gw002.oneitfarm.com/library/sal200007b9065f022040127xm29b729:0.0.4"
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
                  name: "MYSQL_DATABASE_DB1_HOST_WRITE",
                  value: "127.0.0.1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PORT",
                  value: "3306"
                },
                {
                  name: "MYSQL_DATABASE_DB1_NAME",
                  value: "dbstgclztase8hsp"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PASSWORD",
                  value: "DB1"
                },
                {
                  name: "MYSQL_DATABASE_DB1_USERNAME",
                  value: "DB1"
                },
                {
                  name: "isMigrate",
                  value: "1"
                },
                {
                  name: "isMigration",
                  value: "1"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "dp-qon2gf570y9sd.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "dp-yfvcuiob4waby.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_GATEWAY_ADDR",
                  value:
                    "dp-qon2gf570y9sd.gw002.oneitfarm.com,dp-yfvcuiob4waby.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_HOST_NAME",
                  value: "dp-yfvcuiob4waby-clusterip.ns-deploy"
                }
              ],
              resources: {
                limits: {
                  cpu: "4",
                  memory: "4Gi"
                },
                requests: {
                  cpu: "3m",
                  memory: "68Mi"
                }
              },
              volumeMounts: [
                {
                  name: "config-dynamic-update-extensions",
                  mountPath: "/etc/my_init.d/dynamic-update-init.sh",
                  subPath: "dynamic-update-init.sh"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 4,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T06:01:58Z",
          lastTransitionTime: "2023-03-13T06:01:58Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T06:39:35Z",
          lastTransitionTime: "2023-03-13T06:01:20Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "dp-yfvcuiob4waby-7b8684b9d" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  },
  {
    metadata: {
      name: "ws-72aucpfsr1osq",
      namespace: "ns-deploy",
      selfLink:
        "/apis/apps/v1/namespaces/ns-deploy/deployments/ws-72aucpfsr1osq",
      uid: "26973de3-ead2-4165-9920-686ccde5c043",
      resourceVersion: "2628421524",
      generation: 2,
      creationTimestamp: "2023-03-13T05:51:37Z",
      labels: {
        WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
        app: "ws-72aucpfsr1osq",
        "app.oam.dev/app-revision-hash": "a449232522d3742c",
        "app.oam.dev/appRevision": "ws-72aucpfsr1osq-v2",
        "app.oam.dev/cluster": "",
        "app.oam.dev/component": "ws-72aucpfsr1osq",
        "app.oam.dev/name": "ws-72aucpfsr1osq",
        "app.oam.dev/namespace": "ns-deploy",
        "app.oam.dev/resourceType": "WORKLOAD",
        "app.oam.dev/revision": "ws-72aucpfsr1osq-v2",
        deploy_type: "deployment",
        deployserver_appid: "581a3008b44c49f08f1e8e7fb622f7d6",
        deployserver_appversion: "0.0.0",
        deployserver_env: "production",
        deployserver_id: "1dc87804729999cda9e62f8e653a7534",
        deployserver_secret_cache: "false",
        deployserver_type: "deployment",
        "oam.aries.io/application-template-version": "0.0.0",
        "oam.dev/render-hash": "dcc9c67131ead249",
        parent_app: "ws-72aucpfsr1osq",
        resource_type: "kubevela",
        "serving.knative.dev/revision": "sal200uwd5a389712303133hgic6007h",
        "serving.knative.dev/revisionUID": "sal200uwd5a389712303133hgic6007h",
        sidecarset_version: "1638496451",
        unique_id: "sal200uwd5a389712303133hgic6007h",
        "workload.oam.dev/type": "t-deploy"
      },
      annotations: {
        WORKER_IDG_TYPE_UNIQID: "Deployment_sal200uwd5a389712303133hgic6007h",
        "app.oam.dev/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uwd5a389712303133hgic6007h","aries.image-policy.k8s.io/unique-id":"sal200uwd5a389712303133hgic6007h","oam.aries.io/description":"移动端云测服务","oam.dev/kubevela-version":"v1.3.10"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"ws-72aucpfsr1osq","app.oam.dev/app-revision-hash":"a449232522d3742c","app.oam.dev/appRevision":"ws-72aucpfsr1osq-v2","app.oam.dev/cluster":"","app.oam.dev/component":"ws-72aucpfsr1osq","app.oam.dev/name":"ws-72aucpfsr1osq","app.oam.dev/namespace":"ns-deploy","app.oam.dev/resourceType":"WORKLOAD","app.oam.dev/revision":"ws-72aucpfsr1osq-v2","deploy_type":"deployment","deployserver_appid":"581a3008b44c49f08f1e8e7fb622f7d6","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","oam.aries.io/application-template-version":"0.0.0","oam.dev/render-hash":"dcc9c67131ead249","parent_app":"ws-72aucpfsr1osq","resource_type":"kubevela","serving.knative.dev/revision":"sal200uwd5a389712303133hgic6007h","serving.knative.dev/revisionUID":"sal200uwd5a389712303133hgic6007h","sidecarset_version":"1638496451","unique_id":"sal200uwd5a389712303133hgic6007h","workload.oam.dev/type":"t-deploy"},"name":"ws-72aucpfsr1osq","namespace":"ns-deploy"},"spec":{"replicas":1,"selector":{"matchLabels":{"app.oam.dev/component":"ws-72aucpfsr1osq"}},"strategy":{"rollingUpdate":{},"type":"RollingUpdate"},"template":{"metadata":{"annotations":{"WORKER_IDG_TYPE_UNIQID":"Deployment_sal200uwd5a389712303133hgic6007h","aries.image-policy.k8s.io/unique-id":"sal200uwd5a389712303133hgic6007h"},"labels":{"WORKER_IDG_UNIQUEID":"03421a704deae4856c364778ef6336b2","app":"ws-72aucpfsr1osq","app.oam.dev/component":"ws-72aucpfsr1osq","app.oam.dev/revision":"ws-72aucpfsr1osq-v2","deploy_type":"deployment","deployserver_appid":"581a3008b44c49f08f1e8e7fb622f7d6","deployserver_appversion":"0.0.0","deployserver_env":"production","deployserver_id":"1dc87804729999cda9e62f8e653a7534","deployserver_secret_cache":"false","deployserver_type":"deployment","parent_app":"ws-72aucpfsr1osq","resource_type":"kubevela","serving.knative.dev/revision":"sal200uwd5a389712303133hgic6007h","serving.knative.dev/revisionUID":"sal200uwd5a389712303133hgic6007h","sidecarset_version":"1638496451","unique_id":"sal200uwd5a389712303133hgic6007h"}},"spec":{"containers":[{"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-service"},{"name":"IDG_CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"requests.cpu"}}},{"name":"IDG_MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"limits.memory"}}},{"name":"IDG_MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1Mi","resource":"requests.memory"}}},{"name":"IDG_CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"service","divisor":"1m","resource":"limits.cpu"}}},{"name":"IDG_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}},{"name":"IDG_CLUSTERUID","value":"aliyun-sh-prod"},{"name":"IDG_IMAGEURL","value":"harbor.oneitfarm.com/zhirenyun/go:1.13.15"},{"name":"IDG_UNIQUEID","value":"sal200uwd5a389712303133hgic6007h"},{"name":"IDG_SITEUID","value":"sal2"},{"name":"IDG_WEIGHT","value":"10"},{"name":"IDG_RUNTIME","value":"development"},{"name":"IDG_SERVICE_NAME","value":"移动端云测服务"},{"name":"IDG_APPID","value":"581a3008b44c49f08f1e8e7fb622f7d6"},{"name":"IDG_VERSION","value":"0.0.0"},{"name":"IDG_SERVICE_IMAGEURL","value":"harbor.oneitfarm.com/zhirenyun/go:1.13.15"},{"name":"ENVIRONMENT","value":"development"},{"name":"PHP_EXTENSIONS_ENABLE","value":"apcu,bcmath,swoole,gd,gmp"},{"name":"ENABLE_SSHD","value":"true"},{"name":"SSH_CONFIG","value":"SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="},{"name":"SSH_PRIVATE_KEY","value":"LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBBSUJBQUtDQVFFQXo4b0RLSndZMmg3QUZ6Z1N1aVFadEJpbjQzS1hONDdqcUVQbm8wRUFRWGtXZVpWTA0KK0Z5SG1tQTNySWpxdEgwd1dPNG5FN0FjYXd1NFFQTyt0cURhRVJVVHRLOHVNSXBZR1Ftc2tESXZpY1N0R0VJWQ0KdHdSZ1RGeE1QTXhiN3BYR2FEZFc1cUo3QjF0SVovcEw0VFNHTTlLWXg5Vm53b2xWTmZ1WnhMODFKTlMwdGUzMA0KVjZtK21qdGFFVkk1ZGVsNHdoanRldEE1aUlyLzFjc3RmL2hKM3lwR3BIOXNjY3Mvd2d3UHpkd3V2RXRZMm1XcA0KOHIwTytMTVcyMjJ0K1RuUEZxRHVrMHA2Wms5bXc4dlBTWTdFVm5Ma2RXeWw2YnkvWGk1dXQzdFFrQmFvQmVuWQ0KTG9hZGN0UVljR0pYMVVMYTZKdG4vSXVDSkdWY0JjY1NpbENDTndJREFRQUJBb0lCQUd5V3JLbm5VWkdEcW0wMw0KNzRsNVhqbGcvVFArNlltdVVjalltOUFVSXhjVU9hdVdXeHBTK01hemE4VHQxSUk0UGpEclhGNk1sWDFYcFpYRQ0KQzdHVFJBTFRXZlg5Nm95UmI5SzkzSUdLeUk4ZHlqdTRKd1JWOUNGVHhyK3JLSXY1bDdOVTRFUXRPMUF2NHhuNw0Ka3ZZQkpmVWxKSlNpTU5SWVFzQ3dXTDZhRWlMSldHWmtTdUZ1cWIxSVg3a01SaEl4UHRCM3hteXVYMW43cnlSaQ0KVUR5eTBZZ0lFNWhaUWMrU2Y2SjNsTHpJbzJYOEVhbEVvWm5yZHhEeXlQMlZ6dmlsRGVJVEhyK0ZmZTRFTk9EcA0KWTBXMS8wTDF1VmVsSFhvY244RzVDZzJ5dG9JNlZMc3drRTBrSFNubmExMW90djRZbk1RR1k2Y0x5bEdlazYwNg0KbFU3a0N4RUNnWUVBK0IyM2dSNVAybEEwUFh1a3k0WUJnOUlYYXd0NlExRGJNcjlpWWlHN0pZL0VRMXlRMWVBZA0KTEhxOE1jTlA1bFFMZWZ2WmY2dmtMa0FQNGZHc0o0UHRzT2J4ZjJHR3VWc0xxdzFDaDhQcTN4MUdRNVFjaFgrZA0KTzZ1d0QvZm5WNERuRnJnZ28zT2w2WnJMYVNzOE9weW02ck9Wc3R2Q3djWnJEeW9xVWZ5V002OENnWUVBMW1SQw0KTU5ZSDk5UVB5aXB5STdQanU4blFPdFRsU2RHdCs5MFBiaGxkNXM5SE1LZ1NncDdWUlZ2dTJEYzRwYnMzQURRdQ0Kd1ZJZVZTTGFqTE5LSHVTcmRCRzcrSC9TSTdMSkw5TGMvb3ZNSGVkeVJuRDY3OWVwNU4ySXlMUXFlemRaTWNCUg0KY1hFRWRZVWJCb1h5T3IxeHlENGwwRXVVc2ZJRmw1ME9DcThSMC9rQ2dZQUp2NmtwSXBiQ25pb2ZURTlpUzhhZA0KZGxERFBQVTExZVIyN3Z3Zm5QR3NmU1NaL1BZWDRURmtRUUpKOWtHYWJDenpRd2o5c2pSSitPeG0xVWNOV21xcA0KYTdtTFpycVRaOWRpaGlmYUM4R2J1SnU5SmdHazRTbTlZWGFPZWhBVjZST3JXZHEyY1dIUWR1dU5HMHpIaE1ZdQ0KTEpZeUs5NVFITXF5RXRjTTE1N1RNd0tCZ1FDZVVKemNTVURMRG1xMmhFK1M4OFRvcUNlL09mVXpaTVlRcGZZOQ0KL0RkdU9JUStkdTVzVEhQNjZ0OWVCTEV0R1NtTldmdG93SVlyb2pnM0RESmd5OFdjU1hoQUVjdVFsdmFmL1JzNg0KVU90aTdjVmlKUTM0ekkzbHRuM0tqOWlLOHAxSDh0ZHhhTjY5RlpTV1paVXhNVEh6aDRrTzNyRW9FaXQxQVFJYw0KZTVrenFRS0JnUURJbTU1azYxNXRkYWx3ZGpLWXlqcEVzbkhxSGtWYVVXRm9HZzcxUE8xYkxkRXpHNDgycjNCYg0KNWd3eVgvY2ZJdk1oTEcrY2lReG9VUHNSd2o2SHlHKzNFT09iQjQ2RlZ6M09nOGYrbGwvb2NzeTV6V2pCRDM2cw0KZmw1eERYV0RPRWpNdUgxMzJQaElaNzRQb3RnYmtSWkFkOFR3U21kNW50SHI1anNlTDhuMmpRPT0NCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"},{"name":"GATEWAY_HOST_SERVICE","value":"kong:http://127.0.0.1:9090"},{"name":"IDG_NAMESPACEUID","value":"namespace-deploy"},{"name":"MSP_LOG_REDIS_HOST","value":"redis-cluster-proxy-log.msp:6380"},{"name":"PVC_code-pvc_UNIQUE_ID","value":"sal20001d5a389712303133hgh7t00y8"},{"name":"MYSQL_DATABASE_DB1_NAME","value":"db8nkes8t88il9u9"},{"name":"MYSQL_DATABASE_DB1_PORT","value":"3306"},{"name":"MYSQL_DATABASE_DB1_HOST_WRITE","value":"rm-uf6k5be9i30fz7qp4.mysql.rds.aliyuncs.com"},{"name":"MYSQL_DATABASE_DB1_PASSWORD","value":"lblniiscxf1tahyl1oqf4d0dz2rj31ew"},{"name":"MYSQL_DATABASE_DB1_USERNAME","value":"db8nkes8t88il9u9"},{"name":"SSH_AUTHORIZED_KEYS","value":"c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFDNVkwYWlyeDJHdlp0YytqYVFNWjJwMTVycXNjT1Y3RHpYcHIwS1pwQVozb3hsMWNpQ1pzSExUczR3OC9iK2Znb0FUNExsTy82QVV0d0o3T3E4dTYzOTdDcnlBd1d1NlRNZ3hwS2doV1F6VUJLNlJ2QnhlU3NOVGN3NDlhVXVNYzZUd2FFcHRHMFZ2TUVTaFpOQkNRZ0FGZHBZUGVyV2dmMCtidk9WUmptVC9JSG9hcFRWb1A5SEJxeHpXWkVpOXVaZ2xMVTY2ZXN1TGhqNmZtUFMxemN0TDlINTEwMXNkb1ZWQXZaQndUOWFQbkNvRTN4NzAwNEZVSEhIYTZXbi9NaXhTZnFOMGJQUDh5M2dVVXB1cGNNdHFqS2VERDR2TnFYdW5qK2R6NjdHeVpCajhiM1dwOW5UaXdMOEE1NjJMcnYrUVFSWlBLUEt6M0pOZkZRR1VvMnYK"},{"name":"ENABLE_SSHD","value":"true"},{"name":"isMigrate","value":"0"},{"name":"isMigration","value":"0"},{"name":"MSP_OPEN_HEALTHCHECK","value":"false"},{"name":"IDG_HOST_8080","value":"ws-72aucpfsr1osq.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_GATEWAY_ADDR","value":"ws-72aucpfsr1osq.gw002.oneitfarm.com"},{"name":"IDG_SERVICE_HOST_NAME","value":"ws-72aucpfsr1osq-clusterip.ns-deploy"}],"image":"harbor.oneitfarm.com/zhirenyun/go:1.13.15","imagePullPolicy":"IfNotPresent","lifecycle":{"preStop":{"exec":{"command":["/bin/bash","-c","if [ ! -d \\"/sidecar\\" ]; then exit; fi;for (( i = 0; i \\u003c 5; i++ )); do if [ -f \\"/sidecar/offline.lock\\" ];then exit;fi; sleep 1;done;"]}}},"name":"service","resources":{"limits":{"cpu":"500m","memory":"256Mi"},"requests":{"cpu":"10m","memory":"128Mi"}},"volumeMounts":[{"mountPath":"/etc/my_init.d/dynamic-update-init.sh","name":"config-dynamic-update-extensions","subPath":"dynamic-update-init.sh"},{"mountPath":"/opt/ci123/www/html","name":"pvc-7d0c555e-6a74-4df2-92ec-5fcd0cb45cfe"},{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"},{"mountPath":"/sidecar","name":"empty-dir-sidecar"}]}],"imagePullSecrets":[{"name":"harbor-registry"}],"initContainers":[{"args":["-c","cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"],"command":["/bin/sh"],"env":[{"name":"CPU_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"requests.cpu"}}},{"name":"CPU_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1m","resource":"limits.cpu"}}},{"name":"MEM_LIMITS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"limits.memory"}}},{"name":"MEM_REQUESTS","valueFrom":{"resourceFieldRef":{"containerName":"php-dynamic-extensions","divisor":"1Mi","resource":"requests.memory"}}},{"name":"PODNAME","valueFrom":{"fieldRef":{"fieldPath":"metadata.name"}}},{"name":"PODIP","valueFrom":{"fieldRef":{"fieldPath":"status.podIP"}}},{"name":"NODENAME","valueFrom":{"fieldRef":{"fieldPath":"spec.nodeName"}}},{"name":"NODEIP","valueFrom":{"fieldRef":{"fieldPath":"status.hostIP"}}},{"name":"CONTAINERNAME","value":"$(PODNAME)-php-dynamic-extensions"}],"image":"harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1","name":"php-dynamic-extensions","resources":{"limits":{"cpu":"100m","memory":"64Mi"},"requests":{"cpu":"1m","memory":"1Mi"}},"volumeMounts":[{"mountPath":"/tmp/dynamic_extensions","name":"php-dynamic-extensions"}]}],"restartPolicy":"Always","volumes":[{"configMap":{"defaultMode":493,"name":"dynamic-update-init"},"name":"config-dynamic-update-extensions"},{"emptyDir":{},"name":"empty-dir-sidecar"},{"emptyDir":{},"name":"php-dynamic-extensions"},{"name":"pvc-7d0c555e-6a74-4df2-92ec-5fcd0cb45cfe","persistentVolumeClaim":{"claimName":"pvc-7d0c555e-6a74-4df2-92ec-5fcd0cb45cfe"}}]}}}}',
        "app.oam.dev/last-applied-time": "2023-03-13T05:51:37Z",
        "aries.image-policy.k8s.io/unique-id":
          "sal200uwd5a389712303133hgic6007h",
        "deployment.kubernetes.io/revision": "2",
        "msp-status": "running",
        "oam.aries.io/description": "移动端云测服务",
        "oam.dev/kubevela-version": "v1.3.10"
      }
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          "app.oam.dev/component": "ws-72aucpfsr1osq"
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {
            WORKER_IDG_UNIQUEID: "03421a704deae4856c364778ef6336b2",
            app: "ws-72aucpfsr1osq",
            "app.oam.dev/component": "ws-72aucpfsr1osq",
            "app.oam.dev/revision": "ws-72aucpfsr1osq-v2",
            deploy_type: "deployment",
            deployserver_appid: "581a3008b44c49f08f1e8e7fb622f7d6",
            deployserver_appversion: "0.0.0",
            deployserver_env: "production",
            deployserver_id: "1dc87804729999cda9e62f8e653a7534",
            deployserver_secret_cache: "false",
            deployserver_type: "deployment",
            parent_app: "ws-72aucpfsr1osq",
            resource_type: "kubevela",
            "serving.knative.dev/revision": "sal200uwd5a389712303133hgic6007h",
            "serving.knative.dev/revisionUID":
              "sal200uwd5a389712303133hgic6007h",
            sidecarset_version: "1638496451",
            unique_id: "sal200uwd5a389712303133hgic6007h"
          },
          annotations: {
            WORKER_IDG_TYPE_UNIQID:
              "Deployment_sal200uwd5a389712303133hgic6007h",
            "aries.image-policy.k8s.io/unique-id":
              "sal200uwd5a389712303133hgic6007h"
          }
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
              name: "empty-dir-sidecar",
              emptyDir: {}
            },
            {
              name: "php-dynamic-extensions",
              emptyDir: {}
            },
            {
              name: "pvc-7d0c555e-6a74-4df2-92ec-5fcd0cb45cfe",
              persistentVolumeClaim: {
                claimName: "pvc-7d0c555e-6a74-4df2-92ec-5fcd0cb45cfe"
              }
            }
          ],
          initContainers: [
            {
              name: "php-dynamic-extensions",
              image:
                "harbor.oneitfarm.com/zhirenyun/php:dynamic_extensions-1.0.1",
              command: ["/bin/sh"],
              args: [
                "-c",
                "cp -r /dynamic_extensions/* /tmp/dynamic_extensions/"
              ],
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
                }
              ],
              terminationMessagePath: "/dev/termination-log",
              terminationMessagePolicy: "File",
              imagePullPolicy: "IfNotPresent"
            }
          ],
          containers: [
            {
              name: "service",
              image: "harbor.oneitfarm.com/zhirenyun/go:1.13.15",
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
                  value: "harbor.oneitfarm.com/zhirenyun/go:1.13.15"
                },
                {
                  name: "IDG_UNIQUEID",
                  value: "sal200uwd5a389712303133hgic6007h"
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
                  value: "development"
                },
                {
                  name: "IDG_SERVICE_NAME",
                  value: "移动端云测服务"
                },
                {
                  name: "IDG_APPID",
                  value: "581a3008b44c49f08f1e8e7fb622f7d6"
                },
                {
                  name: "IDG_VERSION",
                  value: "0.0.0"
                },
                {
                  name: "IDG_SERVICE_IMAGEURL",
                  value: "harbor.oneitfarm.com/zhirenyun/go:1.13.15"
                },
                {
                  name: "ENVIRONMENT",
                  value: "development"
                },
                {
                  name: "PHP_EXTENSIONS_ENABLE",
                  value: "apcu,bcmath,swoole,gd,gmp"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
                },
                {
                  name: "ENABLE_SSHD",
                  value: "true"
                },
                {
                  name: "SSH_CONFIG",
                  value:
                    "SG9zdCBnaXRsYWIub25laXRmYXJtLmNvbQpQb3J0IDI5NjIyClN0cmljdEhvc3RLZXlDaGVja2luZyBubwpVc2VyIGdpdApJZGVudGl0eUZpbGUgfi8uc3NoL2lkX3JzYQ=="
                },
                {
                  name: "SSH_PRIVATE_KEY",
                  value:
                    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBBSUJBQUtDQVFFQXo4b0RLSndZMmg3QUZ6Z1N1aVFadEJpbjQzS1hONDdqcUVQbm8wRUFRWGtXZVpWTA0KK0Z5SG1tQTNySWpxdEgwd1dPNG5FN0FjYXd1NFFQTyt0cURhRVJVVHRLOHVNSXBZR1Ftc2tESXZpY1N0R0VJWQ0KdHdSZ1RGeE1QTXhiN3BYR2FEZFc1cUo3QjF0SVovcEw0VFNHTTlLWXg5Vm53b2xWTmZ1WnhMODFKTlMwdGUzMA0KVjZtK21qdGFFVkk1ZGVsNHdoanRldEE1aUlyLzFjc3RmL2hKM3lwR3BIOXNjY3Mvd2d3UHpkd3V2RXRZMm1XcA0KOHIwTytMTVcyMjJ0K1RuUEZxRHVrMHA2Wms5bXc4dlBTWTdFVm5Ma2RXeWw2YnkvWGk1dXQzdFFrQmFvQmVuWQ0KTG9hZGN0UVljR0pYMVVMYTZKdG4vSXVDSkdWY0JjY1NpbENDTndJREFRQUJBb0lCQUd5V3JLbm5VWkdEcW0wMw0KNzRsNVhqbGcvVFArNlltdVVjalltOUFVSXhjVU9hdVdXeHBTK01hemE4VHQxSUk0UGpEclhGNk1sWDFYcFpYRQ0KQzdHVFJBTFRXZlg5Nm95UmI5SzkzSUdLeUk4ZHlqdTRKd1JWOUNGVHhyK3JLSXY1bDdOVTRFUXRPMUF2NHhuNw0Ka3ZZQkpmVWxKSlNpTU5SWVFzQ3dXTDZhRWlMSldHWmtTdUZ1cWIxSVg3a01SaEl4UHRCM3hteXVYMW43cnlSaQ0KVUR5eTBZZ0lFNWhaUWMrU2Y2SjNsTHpJbzJYOEVhbEVvWm5yZHhEeXlQMlZ6dmlsRGVJVEhyK0ZmZTRFTk9EcA0KWTBXMS8wTDF1VmVsSFhvY244RzVDZzJ5dG9JNlZMc3drRTBrSFNubmExMW90djRZbk1RR1k2Y0x5bEdlazYwNg0KbFU3a0N4RUNnWUVBK0IyM2dSNVAybEEwUFh1a3k0WUJnOUlYYXd0NlExRGJNcjlpWWlHN0pZL0VRMXlRMWVBZA0KTEhxOE1jTlA1bFFMZWZ2WmY2dmtMa0FQNGZHc0o0UHRzT2J4ZjJHR3VWc0xxdzFDaDhQcTN4MUdRNVFjaFgrZA0KTzZ1d0QvZm5WNERuRnJnZ28zT2w2WnJMYVNzOE9weW02ck9Wc3R2Q3djWnJEeW9xVWZ5V002OENnWUVBMW1SQw0KTU5ZSDk5UVB5aXB5STdQanU4blFPdFRsU2RHdCs5MFBiaGxkNXM5SE1LZ1NncDdWUlZ2dTJEYzRwYnMzQURRdQ0Kd1ZJZVZTTGFqTE5LSHVTcmRCRzcrSC9TSTdMSkw5TGMvb3ZNSGVkeVJuRDY3OWVwNU4ySXlMUXFlemRaTWNCUg0KY1hFRWRZVWJCb1h5T3IxeHlENGwwRXVVc2ZJRmw1ME9DcThSMC9rQ2dZQUp2NmtwSXBiQ25pb2ZURTlpUzhhZA0KZGxERFBQVTExZVIyN3Z3Zm5QR3NmU1NaL1BZWDRURmtRUUpKOWtHYWJDenpRd2o5c2pSSitPeG0xVWNOV21xcA0KYTdtTFpycVRaOWRpaGlmYUM4R2J1SnU5SmdHazRTbTlZWGFPZWhBVjZST3JXZHEyY1dIUWR1dU5HMHpIaE1ZdQ0KTEpZeUs5NVFITXF5RXRjTTE1N1RNd0tCZ1FDZVVKemNTVURMRG1xMmhFK1M4OFRvcUNlL09mVXpaTVlRcGZZOQ0KL0RkdU9JUStkdTVzVEhQNjZ0OWVCTEV0R1NtTldmdG93SVlyb2pnM0RESmd5OFdjU1hoQUVjdVFsdmFmL1JzNg0KVU90aTdjVmlKUTM0ekkzbHRuM0tqOWlLOHAxSDh0ZHhhTjY5RlpTV1paVXhNVEh6aDRrTzNyRW9FaXQxQVFJYw0KZTVrenFRS0JnUURJbTU1azYxNXRkYWx3ZGpLWXlqcEVzbkhxSGtWYVVXRm9HZzcxUE8xYkxkRXpHNDgycjNCYg0KNWd3eVgvY2ZJdk1oTEcrY2lReG9VUHNSd2o2SHlHKzNFT09iQjQ2RlZ6M09nOGYrbGwvb2NzeTV6V2pCRDM2cw0KZmw1eERYV0RPRWpNdUgxMzJQaElaNzRQb3RnYmtSWkFkOFR3U21kNW50SHI1anNlTDhuMmpRPT0NCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"
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
                  name: "PVC_code-pvc_UNIQUE_ID",
                  value: "sal20001d5a389712303133hgh7t00y8"
                },
                {
                  name: "MYSQL_DATABASE_DB1_NAME",
                  value: "db8nkes8t88il9u9"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PORT",
                  value: "3306"
                },
                {
                  name: "MYSQL_DATABASE_DB1_HOST_WRITE",
                  value: "rm-uf6k5be9i30fz7qp4.mysql.rds.aliyuncs.com"
                },
                {
                  name: "MYSQL_DATABASE_DB1_PASSWORD",
                  value: "lblniiscxf1tahyl1oqf4d0dz2rj31ew"
                },
                {
                  name: "MYSQL_DATABASE_DB1_USERNAME",
                  value: "db8nkes8t88il9u9"
                },
                {
                  name: "SSH_AUTHORIZED_KEYS",
                  value:
                    "c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFDNVkwYWlyeDJHdlp0YytqYVFNWjJwMTVycXNjT1Y3RHpYcHIwS1pwQVozb3hsMWNpQ1pzSExUczR3OC9iK2Znb0FUNExsTy82QVV0d0o3T3E4dTYzOTdDcnlBd1d1NlRNZ3hwS2doV1F6VUJLNlJ2QnhlU3NOVGN3NDlhVXVNYzZUd2FFcHRHMFZ2TUVTaFpOQkNRZ0FGZHBZUGVyV2dmMCtidk9WUmptVC9JSG9hcFRWb1A5SEJxeHpXWkVpOXVaZ2xMVTY2ZXN1TGhqNmZtUFMxemN0TDlINTEwMXNkb1ZWQXZaQndUOWFQbkNvRTN4NzAwNEZVSEhIYTZXbi9NaXhTZnFOMGJQUDh5M2dVVXB1cGNNdHFqS2VERDR2TnFYdW5qK2R6NjdHeVpCajhiM1dwOW5UaXdMOEE1NjJMcnYrUVFSWlBLUEt6M0pOZkZRR1VvMnYK"
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
                  name: "MSP_OPEN_HEALTHCHECK",
                  value: "false"
                },
                {
                  name: "IDG_HOST_8080",
                  value: "ws-72aucpfsr1osq.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_GATEWAY_ADDR",
                  value: "ws-72aucpfsr1osq.gw002.oneitfarm.com"
                },
                {
                  name: "IDG_SERVICE_HOST_NAME",
                  value: "ws-72aucpfsr1osq-clusterip.ns-deploy"
                }
              ],
              resources: {
                limits: {
                  cpu: "500m",
                  memory: "256Mi"
                },
                requests: {
                  cpu: "10m",
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
                  name: "pvc-7d0c555e-6a74-4df2-92ec-5fcd0cb45cfe",
                  mountPath: "/opt/ci123/www/html"
                },
                {
                  name: "php-dynamic-extensions",
                  mountPath: "/tmp/dynamic_extensions"
                },
                {
                  name: "empty-dir-sidecar",
                  mountPath: "/sidecar"
                }
              ],
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
          securityContext: {},
          imagePullSecrets: [
            {
              name: "harbor-registry"
            }
          ],
          schedulerName: "default-scheduler"
        }
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxUnavailable: "25%",
          maxSurge: "25%"
        }
      },
      revisionHistoryLimit: 10,
      progressDeadlineSeconds: 600
    },
    status: {
      observedGeneration: 2,
      replicas: 1,
      updatedReplicas: 1,
      readyReplicas: 1,
      availableReplicas: 1,
      conditions: [
        {
          type: "Available",
          status: "True",
          lastUpdateTime: "2023-03-13T05:52:00Z",
          lastTransitionTime: "2023-03-13T05:52:00Z",
          reason: "MinimumReplicasAvailable",
          message: "Deployment has minimum availability."
        },
        {
          type: "Progressing",
          status: "True",
          lastUpdateTime: "2023-03-13T06:54:30Z",
          lastTransitionTime: "2023-03-13T05:51:37Z",
          reason: "NewReplicaSetAvailable",
          message:
            'ReplicaSet "ws-72aucpfsr1osq-989ffc5b8" has successfully progressed.'
        }
      ]
    },
    resourcebindingName: "",
    aggregatedStatus: null
  }
];
