import NextLink from 'next/link';

export default function Link(props) {
  return (
    <NextLink passHref href={props.href}>
        <a>
            {props.children}
        </a>
    </NextLink>
    );
}