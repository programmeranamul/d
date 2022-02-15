import "./App.css";
import { useState } from "react";
import TableOption from "./component/TableOption";
import Table from "./component/Table";

function App() {
  const [nodeHover, setNodeHover] = useState([0, 0]);
  const [currentNode, setCurrentNode] = useState([0, 0]);
  const [showTableOption, setShowTableOption] = useState(false);
  const [createTable, setCreateTable] = useState(false);

  return (
    <div className="App">
      <div className={!showTableOption && !createTable ? "d-block" : "d-none"}>
        <button
          className="btn btn-outline-primary mb-5"
          onClick={() => setShowTableOption(true)}
        >
          Click Here
        </button>
      </div>
      <TableOption
        showTableOption={showTableOption}
        createTable={createTable}
        currentNode={currentNode}
        nodeHover={nodeHover}
        setNodeHover={setNodeHover}
        setCurrentNode={setCurrentNode}
        setCreateTable={setCreateTable}
      />
      <Table createTable={createTable} currentNode={currentNode} />
    </div>
  );
}

export default App;
