import React, { useState, useEffect } from 'react';

import { DESIGN_DATA } from '../../../../../utils/designData';
import SidebarItem from '../../../../Sidebar/Sidebar';

import './Design.css';

function Design() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [containerKeyArray, setContainerKeyArray] = useState([]);
  const [containerValueArray, setContainerValueArray] = useState([]);
  const [conv2DArray, setConv2DArray] = useState([]);
  const [maxPool2DArray, setMaxPool2DArray] = useState([]);
  const [flattenArray, setFlattenArray] = useState([]);
  const [denseArray, setDenseArray] = useState([]);
  const [batchNormalisationArray, setbatchNormalisationArray] = useState([]);
  const [dropOutArray, setDropOutArray] = useState([]);

  // handling con2d inputs
  // const [conv2dFilterInput, setConv2dFilterInput] = useState(0);
  // const [conv2dKernelSize, setConv2dKernelSize] = useState(1);
  // const [conv2dStrides, setconv2dStrides] = useState(1);
  // const [conv2dPadding, setConv2dPadding] = useState('same');
  // const [conv2dActivationFunc, setConv2dActivationFunc] = useState('none');

  const [conv2dstate, setConv2dState] = useState({
    conv2dFilterInput: 0,
    conv2dKernelSize: 1,
    conv2dStrides: 1,
    conv2dPadding: 'same',
    conv2dActivationFunc: 'none',
  });

  // handling maxpool2d inputs

  const [maxPool2dstate, setMaxPool2dState] = useState({
    maxPool2dPoolSize: 2,
    maxPool2dStrides: 1,
    maxPool2dPadding: 'same',
  });

  // handling flatten inputs

  // handling Dense inputs
  const [denseState, setDenseState] = useState({
    denseUnits: 0,
    denseActivationFunction: 'none',
  });

  // handling batchnormalisation inputs

  // handling dropout inputs

  const [dropOutRateState, setDropOutRateState] = useState(0);

  const handleClick = (e, index) => {
    e.preventDefault();
    setSelectedOptionIndex(index);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const key = DESIGN_DATA[selectedOptionIndex].name;
    setContainerKeyArray([...containerKeyArray, key]);

    switch (key) {
      case 'Conv2D':
        setConv2DArray([
          conv2dstate.conv2dFilterInput,
          conv2dstate.conv2dKernelSize,
          conv2dstate.conv2dStrides,
          conv2dstate.conv2dPadding,
          conv2dstate.conv2dActivationFunc,
        ]);
        setContainerValueArray([...containerValueArray, conv2DArray]);
      case 'MaxPool2D':
        setMaxPool2DArray([
          maxPool2dstate.maxPool2dPoolSize,
          maxPool2dstate.maxPool2dStrides,
          maxPool2dstate.maxPool2dPadding,
        ]);

        setContainerValueArray([...containerValueArray, maxPool2DArray]);
      case 'Flatten':
        setContainerValueArray([...containerValueArray, []]);
      case 'Dense':
        setDenseArray([
          denseState.denseUnits,
          denseState.denseActivationFunction,
        ]);
        setContainerValueArray([...containerValueArray, denseArray]);
      case 'BatchNormalisation':
        setContainerValueArray([...containerValueArray, []]);
      case 'DropOut':
        setDropOutArray([dropOutRateState]);
        setContainerValueArray([...containerValueArray, dropOutArray]);
    }
  };

  useEffect(() => {
    console.log(containerKeyArray);
    console.log(containerValueArray);
  }, [containerKeyArray, containerValueArray]);

  // conv2d

  const conv2DfilterChangeHandler = (e) => {
    setConv2dState({ ...conv2dstate, conv2dFilterInput: e.target.value });
  };

  const handleConv2DKernelSize = (e) => {
    setConv2dState({ ...conv2dstate, conv2dKernelSize: e.target.value });
  };

  const handleConv2DStrides = (e) => {
    setConv2dState({ ...conv2dstate, conv2dStrides: e.target.value });
  };

  const handleConv2DPadding = (e) => {
    setConv2dState({ ...conv2dstate, conv2dPadding: e.target.value });
  };

  const handleConve2DActivationFunc = (e) => {
    setConv2dState({ ...conv2dstate, conv2dActivationFunc: e.target.value });
  };

  // MaxPool2d handling
  const handleMaxPool2DPoolSize = (e) => {
    setMaxPool2dState({
      ...maxPool2dstate,
      maxPool2dPoolSize: e.target.value,
    });
  };

  const handleMaxPool2DStrides = (e) => {
    setMaxPool2dState({
      ...maxPool2dstate,
      maxPool2dStrides: e.target.value,
    });
  };

  const handleMaxPool2DPadding = (e) => {
    setMaxPool2dState({
      ...maxPool2dstate,
      maxPool2dPadding: e.target.value,
    });
  };

  //Dense Handling
  const handleDenseUnits = (e) => {
    setDenseState({
      ...denseState,
      denseUnits: e.target.value,
    });
  };

  const handleDenseActivationFunc = (e) => {
    setDenseState({
      ...denseState,
      denseActivationFunction: e.target.value,
    });
  };

  //Handling Dropout

  const handleDropOutRate = (e) => {
    setDropOutRateState(e.target.value);
  };

  return (
    <div className="design">
      Design
      <div>
        <div className="design-container">
          <div className="design-list-container">
            {DESIGN_DATA.map((augmentation, index) => {
              return (
                <div
                  className="design-list"
                  onClick={(e) => handleClick(e, index)}
                >
                  {augmentation.name}
                </div>
                // <SidebarItem
                //   key={index}
                //   name={augmentation.name}
                //   active={index === selectedOptionIndex}
                //   handleClick={() => setSelectedOptionIndex(index)}
                // />
              );
            })}
          </div>

          <div className="design-inputs">
            {DESIGN_DATA.map((data, index) => {
              if (index === selectedOptionIndex) {
                if (DESIGN_DATA[index].name == 'Conv2D') {
                  return (
                    <div>
                      <label htmlFor="filters">Filters</label>
                      <input
                        name="filters"
                        value={conv2dstate.conv2dFilterInput}
                        onChange={(e) => conv2DfilterChangeHandler(e)}
                        placeholder={data.parameters.filters}
                      ></input>
                      <hr />
                      <label for="kernel_size">Kernel size</label>

                      <select
                        value={conv2dstate.conv2dKernelSize}
                        onChange={(e) => handleConv2DKernelSize(e)}
                        name="kernel_size"
                        id="kernel_size"
                      >
                        {data.parameters.kernel_size.map((size) => {
                          return <option value={size}>{size}</option>;
                        })}
                      </select>

                      <hr />
                      <label for="strides">Strides</label>
                      <select
                        onChange={(e) => handleConv2DStrides(e)}
                        value={conv2dstate.conv2dStrides}
                        name="strides"
                        id="strides"
                      >
                        {data.parameters.strides.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />
                      <label htmlFor="padding">Padding</label>

                      <select
                        onChange={(e) => handleConv2DPadding(e)}
                        value={conv2dstate.conv2dPadding}
                        name="padding"
                        id="padding"
                      >
                        {data.parameters.padding.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />

                      <label htmlFor="activation-function">
                        Activation Function
                      </label>

                      <select
                        onChange={(e) => handleConve2DActivationFunc(e)}
                        value={conv2dstate.conv2dActivationFunc}
                        name="activation-function"
                        id="activation-function"
                      >
                        {data.parameters.activation_function.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>
                    </div>
                  );
                } else if (DESIGN_DATA[index].name == 'MaxPool2D') {
                  return (
                    <div>
                      <label htmlFor="poolsize">Poolsize</label>

                      <select
                        value={maxPool2dstate.maxPool2dPoolSize}
                        onChange={(e) => handleMaxPool2DPoolSize(e)}
                        name="poolsize"
                        id="poolsize"
                      >
                        {data.parameters.poolsize.map((size) => {
                          return <option value={size}>{size}</option>;
                        })}
                      </select>
                      <hr />
                      <label htmlFor="strides">Strides</label>
                      <select
                        value={maxPool2dstate.maxPool2dStrides}
                        onChange={(e) => handleMaxPool2DStrides(e)}
                        name="strides"
                        id="strides"
                      >
                        {data.parameters.strides.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />
                      <label htmlFor="padding">Padding</label>

                      <select
                        value={maxPool2dstate.maxPool2dPadding}
                        onChange={(e) => handleMaxPool2DPadding(e)}
                        name="padding"
                        id="padding"
                      >
                        {data.parameters.padding.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>
                    </div>
                  );
                } else if (DESIGN_DATA[index].name == 'Flatten') {
                  return <div>Flatten</div>;
                } else if (DESIGN_DATA[index].name == 'Dense') {
                  return (
                    <div>
                      <label htmlFor="units">Units</label>

                      <input
                        name="units"
                        onChange={(e) => handleDenseUnits(e)}
                        value={denseState.denseUnits}
                        placeholder={data.parameters.units}
                      ></input>
                      <hr />
                      <label htmlFor="activation_function">
                        Activation function
                      </label>
                      <select
                        name="activation_function"
                        id="activation_function"
                        value={denseState.denseActivationFunction}
                        onChange={(e) => {
                          handleDenseActivationFunc(e);
                        }}
                      >
                        {data.parameters.activation_function.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />
                    </div>
                  );
                } else if (DESIGN_DATA[index].name == 'BatchNormalisation') {
                  return <div>BatchNormalisation</div>;
                } else if (DESIGN_DATA[index].name == 'DropOut') {
                  return (
                    <div>
                      <label htmlFor="dropoutRate">DropoutRate</label>
                      <select
                        value={dropOutRateState}
                        onChange={(e) => handleDropOutRate(e)}
                        name="dropoutRate"
                        id="dropoutRate"
                      >
                        {data.parameters.dropoutRate.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>
                    </div>
                  );
                }
              }
            })}
            <div className="add-btn" onClick={(e) => handleAddClick(e)}>
              ADD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
