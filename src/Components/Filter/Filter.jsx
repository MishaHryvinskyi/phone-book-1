import { FilterStyled } from "./Filter.styled";

const Filter = ({ handleFilterChange, filter }) => {
    return (
        <FilterStyled> Пошук за іменем
            <input 
              type="text" 
              name="filter" 
              value={filter} 
              onChange={handleFilterChange}
            />
        </FilterStyled>
    )
}

export default Filter;