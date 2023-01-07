import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddList from '../components/AddList';
import Menu from '../components/Menu';

const Home = () => {
  const [lists, setLists] = useState([]);
  const [update, setUpdate] = useState(false);

  const fetchLists = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/list', {
        method: 'GET', 
        headers: { 'Content-type': 'application/json' },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchLists().then((data) => setLists(data.allLists || []));
    setUpdate(false);
  }, [update]);


  return (
    <div 
      className="bg-orange-50 min-h-screen flex flex-col items-center"
    >
      <h3 className="text-amber-800 text-4xl font-bold mb-16 mt-40">
        Hello, Username
      </h3>
      <div className="grid grid-cols-3 gap-x-16 gap-y-8 mb-6">
        {lists.map((list) => (
          <div
            key={list._id}
            className="bg-emerald-700 text-white text-xl font-semibold 
            text-center pt-2 px-4 pb-10 rounded-md shadow-lg"
          >
            <Menu value={list._id} handleUpdate={() => setUpdate(!update)} />
            <Link to={`/list?id=${list._id}`}
              className="my-4 mx-12"
            >
              {list.title}
            </Link>
          </div>
        ))}
      </div>
      <AddList handleUpdate={() => setUpdate(true)} /> 
    </div>
  );
}

export default Home;