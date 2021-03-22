export const DEFAULT_OPTIONS = [
    {
        name: 'CLAHE',
        parameters: [
            {
                parameter_name: 'clip_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'tile_grid_x',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'tile_grid_y',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'Cutout',
        parameters: [
            {
                parameter_name: 'num_holes',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'max_h_size',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'max_w_size',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'GaussNoise',
        parameters: [
            {
                parameter_name: 'var_limit_x',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'var_limit_y',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'HueSaturationValue',
        parameters: [
            {
                parameter_name: 'hue_shift_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'sat_shift_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'val_shift_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'Blur',
        parameters: [
            {
                parameter_name: 'blur_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'ChannelShuffle',
        parameters: [
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'GridDistortion',
        parameters: [
            {
                parameter_name: 'num_steps',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'distort_limit',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'MedianBlur',
        parameters: [
            {
                parameter_name: 'blur_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'Normalize',
        parameters: [
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'PadIfNeeded',
        parameters: [
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'RandomBrightness',
        parameters: [
            {
                parameter_name: 'limit',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'RandomBrightnessContrast',
        parameters: [
            {
                parameter_name: 'brightness_limit',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'contrast_limit',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'RandomContrast',
        parameters: [
            {
                parameter_name: 'limit',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'ToGray',
        parameters: [
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'ShiftScaleRotate',
        parameters: [
            {
                parameter_name: 'shift_limit',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'rotate_limit',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'prob',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'add_rain',
        parameters: [
            {
                parameter_name: 'rain_type',
                type: 'string',
                input_type: 'text',
                default_value: null,

            }
        ]
    },
    {
        name: 'add_snow',
        parameters: [
            {
                parameter_name: 'snow_coeff',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    },
    {
        name: 'add_shadow',
        parameters: [
            {
                parameter_name: 'no_of_shadows',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
            {
                parameter_name: 'shadow_dimension',
                type: 'int',
                input_type: 'number',
                default_value: 0,
                value: null
            },
        ]
    },
    {
        name: 'darken',
        parameters: [
            {
                parameter_name: 'darkness_coeff',
                type: 'float',
                input_type: 'number',
                default_value: 0,
                value: null
            }
        ]
    }
]