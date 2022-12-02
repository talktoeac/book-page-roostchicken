import classes from "./style.module.css";

export interface IImageProps {
  img: string;
  title: string;
  className?: string;
}
export const Image = ({ img, title, className = "" }: IImageProps) => {
  return (
    <div className={`${classes.premise__img} ${className}`}>
      <img data-src={img} src={img} alt={title} style={{ width: "100%" }} />
    </div>
  );
};
