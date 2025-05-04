
const Filter = ({ handleFilterChange, filter }) => {
    return (
        <label> Пошук за іменем
            <input 
              type="text" 
              name="filter" 
              value={filter} 
              onChange={handleFilterChange}
            />
        </label>
    )
}

export default Filter;