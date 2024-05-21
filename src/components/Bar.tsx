const Bar = ({height}: {height: number}) => {

    return (
      <div 
      style={{
        height: `${2 * height}px`,
        width: '5px',
        marginRight: '1px',
        backgroundColor: "gray",
      }}
      className="bar"
      />
    )
  }
  
export default Bar;