import React from "react";
import { Table, Tag } from "antd";
import useWindowDimensions from "./UseWindowDimensions";

const TableIngredient = ({ extIngredient }) => {
  const { height, width } = useWindowDimensions();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Measures",
      dataIndex: "measures",
      key: "measures",
    },
    {
      title: "Meta",
      dataIndex: "meta",
      key: "meta",
      render: (metas) => (
        <>
          {metas.map((meta) => {
            let color = meta.length > 5 ? "geekblue" : "green";
            if (meta === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={meta}>
                {meta.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      responsive: ["sm"],
    },

    {
      title: "Additional",
      dataIndex: "additional",
      key: "additional",
    },
  ];
  const getData = (extIngredient) => {
    let dataSource = [];
    extIngredient.forEach((element) => {
      dataSource.push({
        key: element.id,
        name: element.name,
        measures: `${element.amount} ${element.unit}`,
        meta: element.meta,
        additional: element.original,
      });
    });
    return dataSource;
  };

  return (
    <Table
      pagination={{ position: ["topRight"] }}
      style={{ width: "100%" }}
      columns={columns}
      dataSource={getData(extIngredient)}
      size="small"
    />
  );
  // return <h1>table</h1>;
};

export default TableIngredient;
