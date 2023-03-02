import { inject } from "@loopback/core";
import { post, requestBody, RequestBodyObject, response, ResponseObject } from "@loopback/rest";
import { cpdConfig } from "../config";
import { Inference, Predictions } from "../services";

interface PredictionsPayload {
  fields: string[],
  values: (string | number)[][]
}

/**
 * OpenAPI body for predictions
 */
const PREDICTIONS_BODY: RequestBodyObject = {
  description: 'Predictions Body',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: {
          type: 'object',
          title: 'PredictionsBody',
          properties: {
            fields: {
              type: 'array',
              example: [
                "ID",
                "LONGDISTANCE",
                "INTERNATIONAL",
                "LOCAL",
                "DROPPED",
                "PAYMETHOD",
                "LOCALBILLTYPE",
                "LONGDISTANCEBILLTYPE",
                "USAGE",
                "RATEPLAN",
                "GENDER",
                "STATUS",
                "CHILDREN",
                "ESTINCOME",
                "CAROWNER",
                "AGE"
              ]
            },
            values: {
              type: 'array',
              items: {
                type: 'array',
                example: [
                  1,
                  28,
                  0,
                  60,
                  0,
                  "Auto",
                  "FreeLocal",
                  "Standard",
                  89,
                  4,
                  "F",
                  "M",
                  1,
                  23000,
                  "N",
                  45
                ]
              }
            },
          },
        }
      },
    },
  },
};

/**
 * OpenAPI response for predictions
 */
const PREDICTIONS_RES: ResponseObject = {
  description: 'Predictions Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PredictionsResponse',
        properties: {
          predictions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                fields: {
                  type: 'array',
                  example: [
                    "ID",
                    "LONGDISTANCE",
                    "INTERNATIONAL",
                    "LOCAL",
                    "DROPPED",
                    "PAYMETHOD",
                    "LOCALBILLTYPE",
                    "LONGDISTANCEBILLTYPE",
                    "USAGE",
                    "RATEPLAN",
                    "GENDER",
                    "STATUS",
                    "CHILDREN",
                    "ESTINCOME",
                    "CAROWNER",
                    "AGE",
                    "PAYMETHOD_IX",
                    "LOCALBILLTYPE_IX",
                    "LONGDISTANCEBILLTYPE_IX",
                    "GENDER_IX",
                    "STATUS_IX",
                    "CAROWNER_IX",
                    "features",
                    "rawPrediction",
                    "probability",
                    "prediction",
                    "predictedLabel"
                  ]
                },
                values: {
                  type: 'array',
                  example: [
                    [
                      1,
                      28,
                      0,
                      60,
                      0,
                      "Auto",
                      "FreeLocal",
                      "Standard",
                      89,
                      4,
                      "F",
                      "M",
                      1,
                      23000,
                      "N",
                      45,
                      1,
                      1,
                      0,
                      0,
                      0,
                      0,
                      [
                        1,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        28,
                        0,
                        60,
                        0,
                        89,
                        4,
                        1,
                        23000,
                        45
                      ],
                      [
                        11.993535999524404,
                        8.006464000475596
                      ],
                      [
                        0.5996767999762203,
                        0.4003232000237798
                      ],
                      0,
                      "F"
                    ]
                  ]
                }
              }
            }
          },
        },
      },
    },
  },
};

export class InferenceController {
  constructor(
    @inject('services.Inference')
    protected inferenceService: Inference,
  ) { }

  @post('/inference/predictions')
  @response(200, PREDICTIONS_RES)
  async getPredictions(
    @requestBody(PREDICTIONS_BODY) payload: Array<PredictionsPayload>,
  ): Promise<Predictions> {
    const token: string = (await this.inferenceService.getToken(cpdConfig.username, cpdConfig.password)).token;
    return this.inferenceService.getPredictions(cpdConfig.model, cpdConfig.version ?? (new Date()).toISOString().split('T')[0], payload, token);
  }

}
