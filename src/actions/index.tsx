export const importList = (list: any) => {
  return {
    type: "ImportList",
    payload: { list },
  };
};

export const setInputValue = (value: any) => {
  return {
    type: "SetInputValue",
    payload: value,
  };
};

export const setFilter = (value: any) => {
  return {
    type: "SetFilter",
    payload: value,
  };
};

export const toggleStatus = (value: any) => {
  return {
    type: "ToggleStatus",
    payload: value,
  };
};
