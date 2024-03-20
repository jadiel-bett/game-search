import { useState } from "react";
import { styled } from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? "blue" : "none")}}
`;

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [activeIndex, setActive] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items here!</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === activeIndex}
            key={item}
            onClick={() => {
              setActive(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
