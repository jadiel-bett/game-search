import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Props {
  color?: string;
  onClicked: () => void;
}

const Like = ({ onClicked, color }: Props) => {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
    onClicked();
  };

  if (status) {
    return <FaHeart color={color} size={20} onClick={handleClick}></FaHeart>;
  }
  return (
    <FaRegHeart color="black" size={20} onClick={handleClick}></FaRegHeart>
  );
};

export default Like;
