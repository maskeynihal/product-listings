import Card from '../../components/organisms/Card/Card';
import { useBeers } from '../../hooks/query/beers/useBeers';
import BeerSkeletonLoading from './components/BeerSkeletonLoading';

function AllBeers() {
  const { data: beers, isLoading } = useBeers();

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      {isLoading
        ? Array.from(Array(10).keys()).map((value) => <BeerSkeletonLoading key={value} />)
        : beers?.map((beer) => (
            <Card
              title={beer.name}
              type={beer.tagline}
              body={beer.description}
              image={beer.image_url}
            />
          ))}
    </div>
  );
}

export default AllBeers;
