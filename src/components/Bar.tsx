import "./Bar.css"

interface BarProps {
    height: number;
    selected?: boolean;
}

const Bar = ({height, selected=false}: BarProps) => {

    return (
      <div 
        style={{
            height: `${2 * height}px`,
            width: '5px',
            marginRight: '1px',
            backgroundColor: selected ? "red" : "gray",
        }}
        className="bar"
      />
    )
  }
  
export default Bar;