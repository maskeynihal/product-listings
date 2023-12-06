import { LinkOptions, Link as RouterLink } from '@tanstack/react-router';
import clsx from 'clsx';

interface LinkProps extends LinkOptions {
  children: React.ReactNode;
  className: string;
}

function Link(props: LinkProps) {
  return (
    <RouterLink
      activeProps={{
        className: 'font-bold',
      }}
      {...props}
      className={clsx('hover:font-bold', props.className)}
    >
      {props.children}
    </RouterLink>
  );
}

export default Link;
