import { Link } from "react-router-dom";

interface props {
  name: string;
  size?: string;
  ath?: string;
  smsize?: string;
}
const Button = ({ name, size, ath, smsize }: props) => {
  return (
    <div>
      <div
        className={`bg-primary hover:bg-primary/90 duration-300 ease-in-out text-dark py-4 px-6 w-fit rounded-lg font-semibold capitalize flex flex-col sm:flex-row sm:${smsize} md:${size}`}
      >
        {name} {ath}
      </div>
    </div>
  );
};

export default Button;
