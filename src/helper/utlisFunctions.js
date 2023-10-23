export function deepCopy(obj) { 
    const result = {}; 
    if (typeof obj !== "object" ||  
        typeof obj === undefined ||  
        obj === null ||  
        Array.isArray(obj) ||  
        typeof obj == "function") { 
        return obj; 
    } 
    const keys = Object.keys(obj); 
    for (let key in keys) { 
        result[keys[key]] = deepCopy(obj[keys[key]]) 
    } 
    return result; 
  } 

export  const updateChildValuesByParentLabel = (data, isSelectedCheckBox, updateValue,isisSelectedCheckBoxIsMatch) => {
    if (data.label === isSelectedCheckBox.label||isisSelectedCheckBoxIsMatch===true) {
      data.value=updateValue
      if (data.child) {
        data.child.forEach((child) => {
          child.value = updateValue;
          updateChildValuesByParentLabel(child, child.label, updateValue,isisSelectedCheckBoxIsMatch=true); // Recursively update child's children
        });
        data.value = updateValue; 
      }
    } else if (data.child) {
      data.child.forEach((child) => {
        updateChildValuesByParentLabel(child, isSelectedCheckBox, updateValue,isisSelectedCheckBoxIsMatch);
      });
    }
    return data; // Return the updated data
  };

  export function setParentValue(node) {
    if (node?.child && node?.child?.length > 0) {
      let allChildrenTrue = true;
      for (const child of node?.child) {
        setParentValue(child); 
        allChildrenTrue = allChildrenTrue && child?.value;
      }
      node.value = allChildrenTrue;
    }
    return node; 
  }