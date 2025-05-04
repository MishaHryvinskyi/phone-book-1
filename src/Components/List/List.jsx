import { ListContainer, Item } from "./List.styled";

const List = ({ visibleBooks, deleteContact }) => {

    return (
        <ListContainer>
            {visibleBooks.map(({ id, name, number }) => (
                <Item key={id}> 
                <p><span>name:</span> {name}</p>
                <p><span>number:</span> {number}</p>
                <button onClick={() => deleteContact(id)} type="button">Видалити</button>
                </Item>
            ))}
        </ListContainer> 
    )
}

export default List;