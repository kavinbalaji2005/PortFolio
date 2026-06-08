/**
 * MagneticButton — disabled cursor attraction globally.
 * Returns children in a static wrapper element to maintain code compatibility.
 */
export default function MagneticButton({
  children,
  className = "",
  strength,
  radius,
  as,
  ...props
}) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
