import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle =
    "w-8 h-8 border cursor-pointer rounded-lg text-center justify-center text-xl font-bold hover:text-blue-500";
  return (
    <div className="flex my-10 items-center gap-2">
      <div onClick={decreaseFunc} className={buttonStyle}>
        -
      </div>
      <div className="text-lg md:text-xl">{cardProduct.quantity}</div>
      <div onClick={increaseFunc} className={buttonStyle}>
        +
      </div>
    </div>
  );
};

export default Counter;
