interface props {
  label: string,
  options?: {
    title: string, value: string | number
  }[],
  value: string | number,
}

export const Button = function (props:props) {
  return <button>Test
  </button>;
};

export const label = (label: string) => (
  <label>
    {label}
  </label>
);

export const Select = (props:props) =>(
  <select>
    <option>1</option>
    <option>2</option>
  </select>
);


export const Input = function ({ one, two, three }) {
  return <input value={one} />;
};

export const CheckBox = function () {
  return <input type="checkbox" />
}