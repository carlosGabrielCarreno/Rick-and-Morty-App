import { v4 as uuidv4 } from 'uuid';
import { Character } from '../views/Character';
import { useCounter, useFetch } from '../hooks';
import { SetButton } from '../views/SetButton';
import { Loading } from '../views/Loading';

export const Characters = () => {
  const { counter, decrement, increment } = useCounter();
  const { REACT_APP_API_CALL } = process.env;
  const { data, isLoading } = useFetch(REACT_APP_API_CALL + '?page=' + counter);

  const handleNextPage = (e) => {
    e.preventDefault();
    counter < 42 && increment();
  };

  const handleBackPage = (e) => {
    e.preventDefault();
    counter > 1 && decrement();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex content-center justify-evenly">
            <SetButton handlePage={handleNextPage} nameButon={'Next'} />
            <SetButton handlePage={handleBackPage} nameButon={'Back'} />
          </div>
          <div className="grid gap-4 grid-cols-3 grid-rows-3 m-8 animate__animated animate__slideInLeft">
            {data.results?.map((character) => (
              <Character key={uuidv4()} {...character} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
