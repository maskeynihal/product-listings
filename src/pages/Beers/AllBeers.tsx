import SkeletonLoading from '@/components/atoms/SkeletonLoading/SkeletonLoading';
import Card from '@/components/organisms/Card/Card';
import { useBeers } from '@/hooks/query/beers/useBeers';
import { beerDetail } from '@/routes/routes';
import { Beer } from '@/services/apis/beers';
import { getIngredients } from '@/services/data/beers';
import { Link } from '@tanstack/react-router';
import { SlArrowDown } from 'react-icons/sl';

interface BeersListProps {
  beers: Array<Beer>;
}

function BeersList({ beers }: BeersListProps) {
  return beers.map((beer) => {
    const ingredients = getIngredients(beer.ingredients);

    const ingredientsString = `Ingredients: ${ingredients.hops.join(', ')} \n ${ingredients.malt.join(', ')}`;

    return (
      <Link
        //@ts-expect-error Type for routes
        to={beerDetail.to}
        params={{
          //@ts-expect-error Type for parms
          beerId: beer.id,
        }}
        key={beer.id}
      >
        <Card
          title={beer.name}
          type={beer.tagline}
          body={beer.description}
          image={beer.image_url}
          imageTooltip={ingredientsString}
        />
      </Link>
    );
  });
}

function AllBeers() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useBeers({
    pageSize: 10,
  });

  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {isLoading ? (
          Array.from(Array(10).keys()).map((value) => <SkeletonLoading key={value} />)
        ) : data ? (
          data.pages.map((group) => {
            return (
              <BeersList
                beers={group.data}
                key={group.meta.page}
              />
            );
          })
        ) : (
          <div> No beers available</div>
        )}
      </div>

      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="flex items-center"
        >
          <SlArrowDown />
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
    </>
  );
}

export default AllBeers;
