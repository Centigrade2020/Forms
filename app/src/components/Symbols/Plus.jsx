const Plus = ({ fill, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${size}`}
    viewBox="0 0 24 24"
    width={`${size}`}
    fill={`${fill}`}
    className="Plus"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

export default Plus;
