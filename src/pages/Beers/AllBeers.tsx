import Card from '../../components/organisms/Card/Card';

function AllBeers() {
  const beer = {
    title: 'Bara',
    type: 'Hasyx',
    body: 'Odio exercitationem vel quis et sed qui.',
    image: 'https://images.punkapi.com/v2/192.png',
  };

  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="basis-1/1">
          <Card
            title={beer.title}
            type={beer.type}
            body={beer.body}
            image={beer.image}
          />
        </div>
        <div className="basis-1/1">
          <Card
            title={beer.title}
            type={beer.type}
            body={beer.body}
            image={beer.image}
          />
        </div>
        <div className="basis-1/1">
          <Card
            title={beer.title}
            type={beer.type}
            body={beer.body}
            image={beer.image}
          />
        </div>
        <div className="basis-1/1">
          <Card
            title={beer.title}
            type={beer.type}
            body={beer.body}
            image={beer.image}
          />
        </div>
        <div className="basis-1/1">
          <Card
            title={beer.title}
            type={beer.type}
            body={beer.body}
            image={beer.image}
          />
        </div>
        <div className="basis-1/1">
          <Card
            title={beer.title}
            type={beer.type}
            body={beer.body}
            image={beer.image}
          />
        </div>
      </div>
    </>
  );
}

export default AllBeers;
