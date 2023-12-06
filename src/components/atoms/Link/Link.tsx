import { LinkOptions, Link as RouterLink } from '@tanstack/react-router';
import clsx from 'clsx';

interface LinkProps extends LinkOptions {
  children: React.ReactNode;
}

function Link(props: LinkProps) {
  return (
    <RouterLink
      className={clsx('hover:font-bold')}
      activeProps={{
        className: 'font-bold',
      }}
      {...props}
    >
      {props.children}
    </RouterLink>
  );
}

export default Link;
