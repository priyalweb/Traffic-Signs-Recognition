export const STEP3_PREDICT = [
    {
        name: 'PRE_PROCESSING',
        url_endpoint: 'predict_preprocess',
        parameters: [
            {
                parameter_name: 'adjust_gamma',
                sub_parameters: [
                    {
                        sub_parameter_name: 'gamma',
                        input_type: 'number',
                    }
                ]
            },
            {
                parameter_name: 'CLAHE',
                sub_parameters: [
                    {
                        sub_parameter_name: 'coloured',
                        input_type: 'text'
                    }
                ]
            },
            {
                parameter_name: 'denoise',
                sub_parameters: [
                    {
                        sub_parameter_name: 'h',
                        input_type: 'number'
                    },
                    {
                        sub_parameter_name: 'hcolor',
                        input_type: 'number'
                    },
                    {
                        sub_parameter_name: 'templateWindowSize',
                        input_type: 'number'
                    },
                    {
                        sub_parameter_name: 'searchWindowSize',
                        input_type: 'number'
                    },
                ]
            },
            {
                parameter_name: 'binary_filter',
                input_type: 'number',
                sub_parameters: []
            },
            {
                parameter_name: 'edge_filter',
                input_type: 'number',
                sub_parameters: []
            },
            // {
            //     parameter_name: 'normalize',
            //     input_type: 'number',
            //     sub_parameters: []
            // },
            // {
            //     parameter_name: 'standardize',
            //     input_type: 'number',
            //     sub_parameters: []
            // },
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

//'adjust_gamma', 'CLAHE', 'denoise', 'binary_filter', 'edge_filter', ['normalize', 'standardize']

// [{'gamma': 2.0}, '{'coloured': y/n}', {'h': value, 'hcolor': value, templateWindowSize': value, 'searchWindowSize': value} , {},{},{}]