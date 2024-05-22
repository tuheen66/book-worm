/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getReadBooks } from "../../utilities/utilities";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const PagesToRead = () => {

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
      const storedReadBooks = getReadBooks();
      setReadBooks(storedReadBooks);
    }, []);
  
    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
      },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
      }, ${y + height}
      Z`;
    };
  
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
  
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <ResponsiveContainer width="95%" height={400}>
      <BarChart
        className="mx-auto mt-8"
        width={0}
        height={0}
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"                
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    );
};

export default PagesToRead;