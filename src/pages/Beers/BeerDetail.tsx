import Card from '../../components/organisms/Card/Card';
import { useGetBeerById } from '../../hooks/query/beers/useBeers';
import { getIngredients } from '../../services/data/beers';
import BeerSkeletonLoading from './components/BeerSkeletonLoading';
import { useParams } from '@tanstack/react-router';
import { useMemo } from 'react';

function BeerDetail() {
  const params = useParams({});

  const { data: beer, isLoading } = useGetBeerById(params.beerId);

  const ingredientsString = useMemo(() => {
    const ingredients = beer ? getIngredients(beer.ingredients) : null;

    return ingredients ? `Ingredients: ${ingredients.hops.join(', ')} \n ${ingredients.malt.join(', ')}` : '';
  }, [beer]);

  return isLoading ? (
    <BeerSkeletonLoading />
  ) : beer ? (
    <Card
      title={beer.name}
      type={beer.tagline}
      body={beer.description}
      image={beer.image_url}
      imageTooltip={ingredientsString}
    />
  ) : (
    <div> No beers available</div>
  );

  return <div>BeerDetail </div>;
}

export default BeerDetail;
