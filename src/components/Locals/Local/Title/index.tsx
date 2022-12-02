import classes from "./style.module.css";

export interface ITitleProps {
  title: string;
  className?: string;
}
export const Title = ({ title, className = "" }: ITitleProps) => {
  const [initTitle, number, phrase] = title.split(",");
  const finalTitle = [initTitle, number].join(",") + ",";
  return (
    <h3 className={`${classes.premise__title} ${className}`}>
      {finalTitle}
      <br />
      {phrase}
    </h3>
  );
};
