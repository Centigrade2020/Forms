const selectStyle = {
  container: (base) => ({
    ...base,
    width: "140px",
    color: "#66fcf1",
    margin: "0px",
    padding: "0px",
  }),
  control: () => ({
    width: "inherit",
    padding: "5px",
    borderRadius: "0px",
    backgroundColor: "#28333f",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#66fcf1",
    transition: "border 200ms ease-in-out",
  }),
  valueContainer: (base) => ({
    ...base,
    color: "#66fcf1",
    fontSize: "12px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "black",
  }),
  menu: (base) => ({
    ...base,
    width: "150px",
    borderRadius: "0px",
    backgroundColor: "#28333f",
  }),
  menuList: (base) => ({ ...base, width: "inherit", padding: "0px" }),
  option: (base, state) => {
    var color = state.isSelected ? "#66fcf1" : "#c5c6c7";
    var backgroundColor = state.isSelected ? "#1b232c" : "#28333f";
    return {
      ...base,
      width: "inherit",
      fontSize: "12px",
      padding: "10px",
      backgroundColor,
      color,
    };
  },
  singleValue: (base) => ({
    ...base,
    color: "#c5c6c7",
  }),
};
export default selectStyle;
