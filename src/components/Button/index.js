// 1 - importe o useDispatch
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/users/thunks.js";
import { useState } from "react";

const Button = () => {
  // 2 - atribuindo a variável
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleClick = () => {
    setComment("");
  };

  // 3 - importe o seu thunk

  // 4 - dentro do seu componente faça o dispatch do thunk, passando o comentário
  return (
    <div className="button">
      <input
        placeholder="Digite algum comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addCommentThunk(comment));
          handleClick();
        }}
      >
        Novo comentário
      </button>
    </div>
  );
};

export default Button;
