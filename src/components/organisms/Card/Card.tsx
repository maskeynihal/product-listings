import { Tooltip } from 'react-tooltip';

interface CardProps {
  title: string;
  type: string;
  body: string;
  image: string;
  imageTooltip: string;
}

function Card(props: CardProps) {
  const { title, type, body, image, imageTooltip } = props;

  return (
    <div className="flex flex-row shadow-md p-4 hover:bg-blue-200 hover:cursor-pointer gap-4 w-full">
      <div className="flex w-24 max-w-24 min-w-24">
        <img
          alt={title}
          src={image}
          className="object-contain w-full"
          data-tooltip-id={`${title}-image-tooltip`}
        />
      </div>
      <div className="flex justify-center flex-col ">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-base text-yellow-400 font-medium">{type}</p>

        <p className="text-base">{body}</p>
      </div>

      <Tooltip id={`${title}-image-tooltip`}>{imageTooltip}</Tooltip>
    </div>
  );
}

export default Card;
