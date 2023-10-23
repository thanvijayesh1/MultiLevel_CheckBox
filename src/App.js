import './App.css';
import { useState, useCallback } from 'react'; 
import { data } from './constants';
import NestedCheckBox from './components/NestedCheckBox';
import { deepCopy, updateChildValuesByParentLabel, setParentValue } from './utils';

function App() {
  const [checkBoxConfig, setCheckBoxConfig] = useState(data);

  const updateValueCheckBox = useCallback((value, child) => {
    const updatedData = deepCopy(updateChildValuesByParentLabel(checkBoxConfig, child, value, false));
    setCheckBoxConfig(deepCopy(setParentValue(updatedData)));
  }, [checkBoxConfig]); 

  return (
    <div className="App">
      <NestedCheckBox
        data={checkBoxConfig}
        handleCheckBoxClick={updateValueCheckBox}
      />
    </div>
  );
}

export default App;
