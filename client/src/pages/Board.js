import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import List from '../components/List';
import {
  fetchAndGetList, 
  fetchAndPatchList, 
} from '../utils/api';

const Board = () => {
  const query = new URLSearchParams(useLocation().search);
  const listId = query.get('id');

  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    fetchAndPatchList(listId, {title: title})
      .then((data) => console.log(data));
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  useEffect(() => {
    fetchAndGetList(listId)
      .then((data) => setTitle(data.oneList.title || []));
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col 
      items-center">
      <Button
        buttonClassName="mt-40"
        textClassName="bg-neutral-100 font-semibold outline-none p-2 mt-40
          rounded-md"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={title}
      >
        <h4 
        className="text-3xl font-semibold mb-8 text-amber-800"
        >
          {title}
        </h4>
      </Button>
      <List value={listId} />
    </div>
  );
}

export default Board;