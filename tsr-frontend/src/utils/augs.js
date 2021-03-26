export const DEFAULT_OPTIONS = [
    {
        name: 'CLAHE',
        parameters: [
            {
                parameter_name: 'clip_limit',
                display_name: 'Clip Limit',
                type: 'int',
                input_type: 'number',
                default_value: 14,
                min: 1,
                max: 100,
                value: null
            },
            {
                parameter_name: 'tile_grid_x',
                display_name: 'Tile Grid X',
                type: 'int',
                input_type: 'number',
                default_value: 8,
                min: 1,
                max: 100,
                value: null
            },
            {
                parameter_name: 'tile_grid_y',
                display_name: 'Tile Grid Y',
                type: 'int',
                input_type: 'number',
                default_value: 8,
                min: 1,
                max: 100,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'Cutout',
        parameters: [
            {
                parameter_name: 'num_holes',
                display_name: 'Number of Holes',
                type: 'int',
                input_type: 'number',
                default_value: 8,
                min: 1,
                max: 100,
                value: null
            },
            {
                parameter_name: 'max_h_size',
                display_name: 'Max h size',
                type: 'int',
                input_type: 'number',
                default_value: 8,
                min: 1,
                max: 100,
                value: null
            },
            {
                parameter_name: 'max_w_size',
                display_name: 'Max w size',
                type: 'int',
                input_type: 'number',
                default_value: 8,
                min: 1,
                max: 100,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'GaussNoise',
        parameters: [
            {
                parameter_name: 'var_limit_x',
                display_name: 'Variance Limit X',
                type: 'int',
                input_type: 'number',
                default_value: 10,
                min: 0,
                max: 500,
                value: null
            },
            {
                parameter_name: 'var_limit_y',
                display_name: 'Variance Limit Y',
                type: 'int',
                input_type: 'number',
                default_value: 10,
                min: 0,
                max: 500,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'HueSaturationValue',
        parameters: [
            {
                parameter_name: 'hue_shift_limit',
                display_name: 'Hue Shift Limit',
                type: 'int',
                input_type: 'number',
                default_value: -20,
                min: -100,
                max: 100,
                value: null
            },
            {
                parameter_name: 'sat_shift_limit',
                display_name: 'Saturation Shift Limit',
                type: 'int',
                input_type: 'number',
                default_value: -30,
                min: -100,
                max: 100,
                value: null
            },
            {
                parameter_name: 'val_shift_limit',
                display_name: 'Value Shift Limit',
                type: 'int',
                input_type: 'number',
                default_value: -20,
                min: -100,
                max: 100,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'Blur',
        parameters: [
            {
                parameter_name: 'blur_limit',
                display_name: 'Blur Limit',
                type: 'int',
                input_type: 'number',
                default_value: 7,
                min: 3,
                max: 100,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'ChannelShuffle',
        parameters: [
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'GridDistortion',
        parameters: [
            {
                parameter_name: 'num_steps',
                display_name: 'Number of Steps',
                type: 'int',
                input_type: 'number',
                default_value: 5,
                min: 1,
                max: 15,
                value: null
            },
            {
                parameter_name: 'distort_limit',
                display_name: 'Distort Limit',
                type: 'float',
                input_type: 'number',
                default_value: -0.3,
                min: -2,
                max: 2,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'MedianBlur',
        parameters: [
            {
                parameter_name: 'blur_limit',
                display_name: 'Blur Limit',
                type: 'int',
                input_type: 'number',
                default_value: 7,
                min: 3,
                max: 100,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'Normalize',
        parameters: [
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'PadIfNeeded',
        parameters: [
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'RandomBrightness',
        parameters: [
            {
                parameter_name: 'limit',
                display_name: 'limit',
                type: 'float',
                input_type: 'number',
                default_value: -0.2,
                min: -1,
                max: 1,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 1,
                max: 0,
                value: null
            }
        ]
    },
    {
        name: 'RandomBrightnessContrast',
        parameters: [
            {
                parameter_name: 'brightness_limit',
                display_name: 'Brightness Limit',
                type: 'float',
                input_type: 'number',
                default_value: -0.2,
                min: -1,
                max: 1,
                value: null
            },
            {
                parameter_name: 'contrast_limit',
                display_name: 'Contrast Limit',
                type: 'float',
                input_type: 'number',
                default_value: -0.2,
                min: -1,
                max: 1,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'RandomContrast',
        parameters: [
            {
                parameter_name: 'limit',
                display_name: 'limit',
                type: 'float',
                input_type: 'number',
                default_value: -0.2,
                min: -1,
                max: 1,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'ToGray',
        parameters: [
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'ShiftScaleRotate',
        parameters: [
            {
                parameter_name: 'shift_limit',
                display_name: 'Shift Limit',
                type: 'float',
                input_type: 'number',
                default_value: -0.06,
                min: -1,
                max: 1,
                value: null
            },
            {
                parameter_name: 'rotate_limit',
                display_name: 'Rotate Limit',
                type: 'int',
                input_type: 'number',
                default_value: -90,
                min: -360,
                max: 360,
                value: null
            },
            {
                parameter_name: 'prob',
                display_name: 'Probability',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'add_rain',
        parameters: [
            {
                parameter_name: 'rain_type',
                display_name: 'Rain Type',
                type: 'string',
                input_type: 'text',
                default_value: 'heavy',
            }
        ]
    },
    {
        name: 'add_snow',
        parameters: [
            {
                parameter_name: 'snow_coeff',
                display_name: 'Snow Coefficient',
                type: 'float',
                input_type: 'number',
                default_value: 0.3,
                min: 0,
                max: 1,
                value: null
            }
        ]
    },
    {
        name: 'add_shadow',
        parameters: [
            {
                parameter_name: 'no_of_shadows',
                display_name: 'No of Shadows',
                type: 'int',
                input_type: 'number',
                default_value: 1,
                min: 0,
                max: 3,
                value: null
            },
            {
                parameter_name: 'shadow_dimension',
                display_name: 'Shadow Dimension',
                type: 'int',
                input_type: 'number',
                default_value: 5,
                min: 3,
                max: 10,
                value: null
            },
        ]
    },
    {
        name: 'darken',
        parameters: [
            {
                parameter_name: 'darkness_coeff',
                display_name: 'Darkness Coefficient',
                type: 'float',
                input_type: 'number',
                default_value: 0.7,
                min: 0,
                max: 1,
                value: null
            }
        ]
    }
]