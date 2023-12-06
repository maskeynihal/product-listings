import SkeletonLoading from '@/components/atoms/SkeletonLoading/SkeletonLoading';
import Card from '@/components/organisms/Card/Card';
import { useGetBeerById } from '@/hooks/query/beers/useBeers';
import { getIngredients } from '@/services/data/beers';
import { useParams } from '@tanstack/react-router';
import { useMemo } from 'react';

function BeerDetail() {
  //@ts-expect-error Type for usePrams
  const params = useParams({});

  //@ts-expect-error Type for route params
  const { data: beer, isLoading } = useGetBeerById(params.beerId);

  const ingredientsString = useMemo(() => {
    const ingredients = beer ? getIngredients(beer.ingredients) : null;

    return ingredients ? `Ingredients: ${ingredients.hops.join(', ')} \n ${ingredients.malt.join(', ')}` : '';
  }, [beer]);

  if (isLoading) {
    return <SkeletonLoading />;
  }

  if (beer) {
    return (
      <Card
        title={beer.name}
        type={beer.tagline}
        body={beer.description}
        image={beer.image_url}
        imageTooltip={ingredientsString}
      />
    );
  }

  return <div> No beers available</div>;
}

export default BeerDetail;
