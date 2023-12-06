import Card from '../../components/organisms/Card/Card';
import { useMyBeers } from '../../hooks/query/my-beers/useMyBeers';
import BeerSkeletonLoading from '../Beers/components/BeerSkeletonLoading';

function MyBeers() {
  const { data: beers, isLoading } = useMyBeers();

  if (!isLoading && !beers?.length) {
    return (
      <div className="bg-gray-200 h-screen grid place-items-center">
        <div className="text-center">
          <div> Nothing to see yet </div>

          <div>
            <button className="text-blue-700 hover:underline">Click here</button>
            <span className="pl-2">to add your first beer</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      {isLoading
        ? Array.from(Array(10).keys()).map((value) => <BeerSkeletonLoading key={value} />)
        : beers?.map((beer) => {
            return (
              <Card
                title={beer.name}
                type={beer.genre}
                body={beer.description}
                image={beer.imageUrl}
              />
            );
          })}
    </div>
  );
}

export default MyBeers;