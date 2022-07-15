import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
} from "recharts";
import styled from "styled-components";
//change to new data names if use later
const Chart = (props) => {
  const colors = ["black", "maroon", "gray", "silver", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua","white"];
  
  const dataPrep = (data) => {
    const processed = [];
    if(data.clicks.length>0){
      for (let j = 0; j < data.clicks[0].length; j++) {
        const add = {};
        add.time = j;
        for (let i = 0; i < data.clicks.length; i++) {
          add[data.messages[i]] = data.clicks[i][j];
        }
        processed.push(add);
      }
    }


    return processed;
  };

  return (
    <StyledChart>
      <div className="wrapper">
        <ResponsiveContainer width="99%" aspect={3}>
          <LineChart data={dataPrep(props.data)} margin={{ right: 300 }}>
            <CartesianGrid />
            <XAxis dataKey="time" interval={"preserveStartEnd"}>
              <Label value="Days" offset={5} position="insideBottom" />
            </XAxis>
            <YAxis
              label={{ value: "Shares", angle: -90, position: "insideLeft" }}
            />
            <Legend verticalAlign="top" height={36} />
            {props.data.messages.map((message, index) => {
              return (
                // MAKE UNIQUE KEY LATER
                <Line
                  key={index}
                  dataKey={message}
                  stroke={colors[index]}//Math.floor(Math.random()*colors.length)
                  activeDot={{ r: 3 }}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </StyledChart>
  );
};

const StyledChart = styled.section`
  .wrapper {
    // box-shadow: 20px 8px 20px grey;
    -webkit-transition: box-shadow 0.2s ease-in;
    display: block;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .wrapper:hover {
    box-shadow: 30px 8px 30px grey;
    -webkit-transition: box-shadow 0.2s ease-in;
  }
`;

export default Chart;