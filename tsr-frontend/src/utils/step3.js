export const STEP3_PREDICT = [
    {
        name: 'PRE_PROCESSING',
        url_endpoint: 'predict_preprocess',
        parameters: [
            {
                parameter_name: 'adjust_gamma',
                display_name: 'Adjust Gamma',
                sub_parameters: [
                    {
                        sub_parameter_name: 'gamma',
                        display_name: 'Gamma',
                        input_type: 'number',
                        default_value: 2,
                        min: 0,
                        max: 3

                    }
                ]
            },
            {
                parameter_name: 'CLAHE',
                display_name: 'CLAHE',
                sub_parameters: [
                    {
                        sub_parameter_name: 'coloured',
                        display_name: 'Coloured (y/n)',
                        input_type: 'text',
                        default_value: 'y',
                    }
                ]
            },
            {
                parameter_name: 'denoise',
                display_name: 'Denoise',
                sub_parameters: [
                    {
                        sub_parameter_name: 'h',
                        display_name: 'h',
                        input_type: 'number',
                        default_value: 10,
                    },
                    {
                        sub_parameter_name: 'hcolor',
                        display_name: 'h color',
                        input_type: 'number',
                        default_value: 10,
                    },
                    {
                        sub_parameter_name: 'templateWindowSize',
                        display_name: 'Template Window Size',
                        input_type: 'number',
                        default_value: 7,
                    },
                    {
                        sub_parameter_name: 'searchWindowSize',
                        display_name: 'Search Window Size',
                        input_type: 'number',
                        default_value: 21,
                    },
                ]
            },
            {
                parameter_name: 'binary_filter',
                display_name: 'Binary Filter',
                input_type: 'number',
                sub_parameters: []
            },
            {
                parameter_name: 'edge_filter',
                display_name: 'Edge Filter',
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
                models: ['Improved_Model', 'Baseline_Model'],
                model_values: ['Sakshee_GTSRB_classification.h5', 'yuvnish_tsr_model_v5.h5']
            }
        ],
        description: 'this step does so and so thing'
    }
]

//'adjust_gamma', 'CLAHE', 'denoise', 'binary_filter', 'edge_filter', ['normalize', 'standardize']

// [{'gamma': 2.0}, '{'coloured': y/n}', {'h': value, 'hcolor': value, templateWindowSize': value, 'searchWindowSize': value} , {},{},{}]