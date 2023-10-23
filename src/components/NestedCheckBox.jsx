import React from 'react';
import CheckBox from './Checkbox';
import './../App.css';

function NestedCheckBox({ data,handleCheckBoxClick }) {
    return (
        <div className="App">
            <div className='App1'>
            <CheckBox
                name={data?.name}
                id={data?.name}
                label={data?.label}
                value={data?.value}
                onClick={(value)=>{
                    handleCheckBoxClick(value,data);
                }}
            />
            </div>
            {data.child.map((item, index) => {
                return (
                    <div key={index}>
                        {item?.child && item?.child?.length > 0 ? (
                            <NestedCheckBox  data={item} handleCheckBoxClick={handleCheckBoxClick} />
                        ) : (
                            
                            <CheckBox
                                name={item?.name}
                                id={item?.name}
                                label={item?.label}
                                value={item?.value}
                                classname="marginleft"
                                onClick={(value) => {
                                    handleCheckBoxClick(value,item,index);
                                }}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default React.memo(NestedCheckBox);


