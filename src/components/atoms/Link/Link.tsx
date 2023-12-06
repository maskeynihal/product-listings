import clsx from '@/lib/clsx';
import { LinkOptions, Link as RouterLink } from '@tanstack/react-router';

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
