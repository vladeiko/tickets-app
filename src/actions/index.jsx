export const importList = (list) => {
  return {
    type: "ImportList",
    payload: { list },
  };
};

export const setInputValue = (value) => {
  return {
    type: "SetInputValue",
    payload: value,
  };
};

export const setFilter = (value) => {
  return {
    type: "SetFilter",
    payload: value,
  };
};

export const toggleStatus = (value) => {
  return {
    type: "ToggleStatus",
    payload: value,
  };
};
