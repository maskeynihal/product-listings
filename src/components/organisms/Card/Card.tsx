import { Tooltip } from 'react-tooltip';

interface CardProps {
  title: string;
  type: string;
  body: string;
  image: string;
  imageTooltip?: string;
}

function Card(props: CardProps) {
  const { title, type, body, image, imageTooltip } = props;

  return (
    <div className="flex flex-row shadow-md p-4 hover:bg-blue-200 hover:cursor-pointer gap-4 w-full h-full">
      <div className="flex w-24 max-w-24 min-w-24 items-center basis-2/12">
        <img
          alt={title}
          src={image}
          className="object-contain w-24 h-24"
          data-tooltip-id={`${title}-image-tooltip`}
        />
      </div>
      <div className="flex justify-center flex-col basis-10/12">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-base text-yellow-400 font-medium">{type}</p>

        <p className="text-base">{body}</p>
      </div>

      <Tooltip id={`${title}-image-tooltip`}>{imageTooltip}</Tooltip>
    </div>
  );
}

export default Card;
