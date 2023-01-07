const Task = (props) => {
  const { title } = props.value;

  const handleClick = () => {
    props.setTask(props.value);
    props.setVisibility(true);
  }

  return (
    <div 
      className="bg-emerald-700 text-white text-2xl font-semibold w-64
        text-center px-6 py-4 rounded-md shadow-lg" 
      onClick={handleClick}
    >
      <h3>{title}</h3>
    </div>    
  );
}

export default Task;