import React, {useState} from "react";

function TableOption({
  showTableOption,
  createTable,
  currentNode,  
  setCurrentNode,
  setCreateTable,
  nodeCount,
  setNodeCount
}) {

  const [nodeHover, setNodeHover] = useState([0, 0])

  const handelMouseMove = (i, i2) => {
    if(i+1 ===  nodeCount[0]){
       setNodeCount([nodeCount[0]+1, nodeCount[1]])
    }
    if(i2+1 ===  nodeCount[1]){
       setNodeCount([nodeCount[0], nodeCount[1]+1 ])
    }  
     setNodeHover([i, i2])
  }


  const handelClick = (i, i2) => {
    setCurrentNode([i, i2])
    setCreateTable(true)
    
  }

  return (
    <div
      className={showTableOption && !createTable ? "d-block mt-5" : "d-none"}
    >
      {Array(nodeCount[0])
        .fill(Array(nodeCount[1]).fill(0)) // 5x5 0 array
        .map((e, i) => (
          <div className="row-node">
            {e.map((e2, i2) => (
              <div
                className={
                  "single-node border border-secondary text-danger " +
                  (currentNode[0] >= i && currentNode[1] >= i2
                    ? "border-danger border-4 "
                    : " ") + //border all selected nodes
                  (nodeHover[0] >= i && nodeHover[1] >= i2
                    ? "bg-secondary "
                    : " ") //background color all hovered nodes
                }
                onMouseOver={() =>handelMouseMove(i, i2)}
                onClick={() => handelClick(i, i2)}
              ></div>
            ))}
          </div>
        ))}
        <h3>{(nodeHover[0] + 1)} x  {(nodeHover[1] + 1)}</h3>
      {/* <h3>selected {(currentNode[0] + 1)} * {(currentNode[1] + 1)} nodes</h3>
      <h3>
        Now coordinates{" "}
        {"(" + (currentNode[0] + 1) + ";" + (currentNode[1] + 1) + ")"}
      </h3> */}
      {/* <button
        className="btn btn-outline-primary mb-5"
        onClick={() => setCreateTable(true)}
      >
        Create Table
      </button> */}
    </div>
  );
}

export default TableOption;
