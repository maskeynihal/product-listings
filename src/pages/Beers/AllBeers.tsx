import Card from '../../components/organisms/Card/Card';
import { useBeers } from '../../hooks/query/beers/useBeers';
import { Beer } from '../../services/apis/beers';
import { getIngredients } from '../../services/data/beers';
import BeerSkeletonLoading from './components/BeerSkeletonLoading';

interface BeersListProps {
  beers: Array<Beer>;
}

function BeersList({ beers }: BeersListProps) {
  return beers.map((beer) => {
    const ingredients = getIngredients(beer.ingredients);

    const ingredientsString = `Ingredients: ${ingredients.hops.join(', ')} \n ${ingredients.malt.join(', ')}`;

    return (
      <Card
        title={beer.name}
        type={beer.tagline}
        body={beer.description}
        image={beer.image_url}
        imageTooltip={ingredientsString}
      />
    );
  });
}

function AllBeers() {
  const { data: beers, isLoading } = useBeers();

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      {isLoading ? (
        Array.from(Array(10).keys()).map((value) => <BeerSkeletonLoading key={value} />)
      ) : beers ? (
        <BeersList beers={beers} />
      ) : (
        <div> No beers available</div>
      )}
    </div>
  );
}

export default AllBeers;
