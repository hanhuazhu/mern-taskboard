import { FaTimes } from "react-icons/fa";
import useVisibility from "../hooks/useVisibility";

const Button = (props) => {
  const { ref, isVisibile, setIsVisible } = useVisibility(false);

  const handleSubmit = async (e) => {
    await props.handleSubmit();
    setIsVisible(false);
    e.preventDefault();
  }

  return (
    <div>
      { isVisibile
        ? <form
          className="flex flex-col" 
          onSubmit={handleSubmit}
          ref={ref}
        >
          <textarea
            className={props.textClassName}
            value={props.value}
            onChange={props.handleChange}
          >
          </textarea>
          <div className="flex items-center mt-3 mb-3">
            <button
              className="bg-amber-200 text-white text-lg font-bold 
                py-1 px-2 rounded-lg"
              type="submit"
            >
              Save
            </button>
            <button
              className="text-amber-800 text-2xl ml-3"
              type="button"
              onClick={() => setIsVisible(false)}
            >
              <FaTimes />
            </button>
          </div>
        </form>
        : <button
          className={props.buttonClassName}
          type="button"
          onClick={() => setIsVisible(true)}
        >
          {props.children}
        </button>
      }
    </div>
  );
}

export default Button;