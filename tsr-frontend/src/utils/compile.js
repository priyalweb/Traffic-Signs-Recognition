export const COMPILE_OPTIONS = [
    {
        name: 'SGD',
        parameters: [
            {
                parameter_name: 'learning_rate',
                type: 'float',
                input_type: 'number',
                default_value: 0.01,
                value: null
            },
            {
                parameter_name: 'Momentum',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'Decay',
                type: 'float',
                input_type: 'number',
                default_value: 0.01,
                value: null
            },
        ]
    },
    {
        name: 'RMSprop',
        parameters: [
            {
                parameter_name: 'learning_rate',
                type: 'float',
                input_type: 'number',
                default_value: 0.0001,
                value: null
            },
            {
                parameter_name: 'Momentum',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'RHO_value',
                type: 'float',
                input_type: 'number',
                default_value: 0.9,
                value: null
            },
            {
                parameter_name: 'Epsilon_value',
                type: 'float',
                input_type: 'number',
                default_value: Math.pow(Math.E, -7).toFixed(5),
                value: null
            },
        ]
    },
    {
        name: 'Adam',
        parameters: [
            {
                parameter_name: 'learning_rate',
                type: 'float',
                input_type: 'number',
                default_value: 0.001,
                value: null
            },
            {
                parameter_name: 'Beta1',
                type: 'float',
                input_type: 'number',
                default_value: 0.9,
                value: null
            },
            {
                parameter_name: 'Beta2',
                type: 'float',
                input_type: 'number',
                default_value: 0.99,
                value: null
            },
            {
                parameter_name: 'Epsilon',
                type: 'float',
                input_type: 'number',
                default_value: Math.pow(Math.E, -7).toFixed(5),
                value: null
            },
        ]
    },

]