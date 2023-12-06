interface CardProps {
  title: string;
  type: string;
  body: string;
  image: string;
}

function Card(props: CardProps) {
  const { title, type, body, image } = props;

  return (
    <div className="flex flex-row shadow-md p-4 hover:bg-blue-200 hover:cursor-pointer gap-4 w-full">
      <div className="flex w-24 max-w-24 min-w-24">
        <img
          alt={title}
          src={image}
          className="object-contain w-full"
        />
      </div>
      <div className="flex justify-center flex-col ">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-base text-yellow-400 font-medium">{type}</p>

        <p className="text-base">{body}</p>
      </div>
    </div>
  );
}

export default Card;
