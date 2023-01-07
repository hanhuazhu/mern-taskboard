import useVisibility from "../hooks/useVisibility";
import { fetchAndDeleteList } from "../utils/api";

const Menu = (props) => {
  const { ref, isVisibile, setIsVisible } = useVisibility(false);

  const handleClick = () => {
    fetchAndDeleteList(props.value);
    props.handleUpdate();
  }

  return (
    <div className="flex justify-end ">
      <div 
        className=""
        ref={ref}
      >
        <button 
          className="inline-block"
          type="button"
          onClick={() => setIsVisible(!isVisibile)}
        >
          ...
        </button>
        { isVisibile &&
          <div 
            className="absolute bg-white text-black text-xs 
            p-2 z-10 divide-y divide-gray-100">
            <p>List Menu</p>
            <button 
              className="text-red-500"
              type="button" onClick={handleClick}
            >Delete List...</button>
          </div> 
        }
      </div>
    </div>
  );
}

export default Menu;