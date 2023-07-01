import { SSTConfig } from "sst";
import { Api } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "backend",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "go1.x",
    });
    app.stack(function Stack({ stack }) {
      const api = new Api(stack, "api", {
        routes: {
          "GET /notes": "functions/lambda/list.go",
          "GET /notes/{id}": "functions/lambda/get.go",
          "PUT /notes/{id}": "functions/lambda/update.go",
        },
      });
      stack.addOutputs({
        ApiEndpoint: api.url,
      });
    });
  },
} satisfies SSTConfig;
