export default function Box({ as, className, children, ...props }) {
  const Tag = as || 'div';
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
