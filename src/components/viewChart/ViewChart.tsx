import './viewChart.css';

interface ViewProps {
    name: string;
    time: number;
    width: number;
    ml: number;
}

const ViewChart = (props: ViewProps) => {
    const {name, time, width, ml} = props;
    return(
        <div className="wraperString">
          <div className="lineName">{name}</div>
          <div className="wrapperLine">
            <div className="line" style={{width: `${width}%`, marginLeft: `${ml}%`}}>{`${time}`}</div>
          </div>
        </div>
      )
};

export default ViewChart;