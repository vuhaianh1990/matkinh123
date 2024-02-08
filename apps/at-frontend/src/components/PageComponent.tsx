interface Props {
  children: React.ReactNode;
}
export default function PageComponent({ children }: Props) {
  return <p>{children}</p>;
}
