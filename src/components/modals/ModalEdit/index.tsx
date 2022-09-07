import { Container, Form } from "./style";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { schemaModal } from "../../../schema/modalEdit";
import { UserContext, Instrument } from "../../../contexts/ApiContext";

export const ModalEditInstrument = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Instrument>({
    resolver: yupResolver(schemaModal),
  });

  const { handleEditInstrument, setModalEdit } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Editar Instrumento</h1>{" "}
          <button onClick={() => setModalEdit(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEditInstrument)}>
          <label htmlFor="title">Nome do instrumento</label>
          <input
            placeholder="Insira o nome do instrumento"
            id="title"
            type="text"
            {...register("title")}
          />
          <span>{errors.title?.message}</span>
          <label htmlFor="description">Descreva o instrumento</label>
          <textarea
            placeholder="Insira a descrição"
            id="description"
            {...register("description")}
          ></textarea>
          <span>{errors.description?.message}</span>
          <label htmlFor="img">Imagem do instrumento</label>
          <input
            placeholder="Insira o link da imagem"
            id="img"
            type="text"
            {...register("img")}
          />
          <span>{errors.img?.message}</span>
          <label htmlFor="minPrice">Valor mínimo do lance</label>
          <input
            placeholder="Insira o valor mínimo"
            id="minPrice"
            type="number"
            {...register("minPrice")}
          />
          <span>{errors.minPrice?.message}</span>
          <label htmlFor="category">Categoria do instrumento</label>
          <select {...register("category")} id="category">
            <option value="Teclas">Teclas</option>
            <option value="Percussão">Percussão</option>
            <option value="Sopro">Sopro</option>
            <option value="Corda">Corda</option>
          </select>

          <div>
            <button className="buttonSave">Salvar</button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
