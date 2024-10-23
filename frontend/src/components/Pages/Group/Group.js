import React, {useState} from "react";
import Container from "../../core/Container/Container";
import NewGroup from "./NewGroup/NewGroup";

const Group = () => {
  const [groupList, setGroupList] = useState([]);

  const onAddGroup = (newGroup) => {
    setGroupList(prevGroups => prevGroups.concat(newGroup))
  };

  return (
    <div>
      <Container>
        <h1>Groups</h1>
        <NewGroup onAddGroup={onAddGroup} />
        <ul>
            {groupList.map(item=>{
                return (<li>{item.name}</li>);
            })}
        </ul>
      </Container>
    </div>
  );
};

export default Group;
