export const STEP3_PREDICT = [
    {
        name: 'PRE_PROCESSING',
        url_endpoint: 'predict_preprocess',
        parameters: [
            {
                parameter_name: 'a',
                input_type: 'number',
                default_value: 0
            },
            {
                parameter_name: 'b',
                input_type: 'number',
                default_value: 0
            }
        ],
        description: 'this step does so and so thing'
    },
    {
        name: 'SELECT_MODEL',
        url_endpoint: 'predict',
        parameters: [
            {
                parameter_name: 'model',
                input_type: 'select',
                models: ['Sakshee_GTSRB_classification.h5', 'yuvnish_tsr_model_v5.h5']
            }
        ],
        description: 'this step does so and so thing'
    }
]