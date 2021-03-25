import React, { useState } from 'react';

import { DESIGN_DATA } from '../../../../../utils/designData';
import SidebarItem from '../../../../Sidebar/Sidebar';

import './Design.css';

function Design() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  // const [data, setData] = useState(null);

  const [dynamicInput, setDynamicInput] = useState(<div></div>);

  // let dynamicInput = <div></div>;

  const handleClick = (e, index) => {
    e.preventDefault();
    // generateInputFeilds(DESIGN_DATA[index]);
    // setData(DESIGN_DATA[index]);
    setSelectedOptionIndex(index);
    // generateInputFeilds();
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
                        value={data.parameters.filters}
                        placeholder={data.parameters.filters}
                      ></input>
                      <hr />
                      <label for="kernel_size"></label>

                      <select name="kernel_size" id="kernel_size">
                        {data.parameters.kernel_size.map((size) => {
                          return <option value={size}>{size}</option>;
                        })}
                      </select>

                      <hr />
                      <label for="strides">Strides</label>
                      <select name="strides" id="strides">
                        {data.parameters.strides.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />
                      <label htmlFor="padding"></label>

                      <select name="padding" id="padding">
                        {data.parameters.padding.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />

                      <label htmlFor="activation-function"></label>

                      <select
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
                      <label htmlFor="poolsize"></label>

                      <select name="poolsize" id="poolsize">
                        {data.parameters.poolsize.map((size) => {
                          return <option value={size}>{size}</option>;
                        })}
                      </select>
                      <hr />
                      <label htmlFor="strides">Strides</label>
                      <select name="strides" id="strides">
                        {data.parameters.strides.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>

                      <hr />
                      <label htmlFor="padding"></label>

                      <select name="padding" id="padding">
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
                      <label htmlFor="units"></label>

                      <input
                        name="units"
                        value={data.parameters.units}
                        placeholder={data.parameters.units}
                      ></input>
                      <hr />
                      <label htmlFor="activation_function">
                        activation_function
                      </label>
                      <select
                        name="activation_function"
                        id="activation_function"
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
                      <label htmlFor="dropoutRate">dropoutRate</label>
                      <select name="dropoutRate" id="dropoutRate">
                        {data.parameters.dropoutRate.map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>
                    </div>
                  );
                }
              }
            })}
            <div className="add-btn">ADD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
