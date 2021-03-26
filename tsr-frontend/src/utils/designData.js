export const DESIGN_DATA = [
    {
        name: 'Conv2D',
        parameters: {
            filters: 0,
            kernel_size: [1, 3, 5, 7],
            strides: [1, 2, 3, 4, 5],
            padding: ['same', 'valid'],
            activation_function: ['none', 'relu'],
        },
    },
    {
        name: 'MaxPool2D',
        parameters: {
            poolsize: [2, 3, 4, 5],
            strides: [1, 2, 3, 4, 5],
            padding: ['same', 'valid'],
        },
    },
    {
        name: 'Flatten',
        parameters: {},
    },
    {
        name: 'Dense',
        parameters: {
            units: 0,
            activation_function: ['none', 'relu', 'softmax'],
        },
    },
    {
        name: 'BatchNormalization',
        parameters: {},
    },
    {
        name: 'DropOut',
        parameters: {
            dropoutRate: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        },
    },
];