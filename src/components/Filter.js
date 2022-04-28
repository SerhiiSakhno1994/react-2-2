const Filter = ({ value, onChange }) => (
  <label>
    Фільтер за ім'ям <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
