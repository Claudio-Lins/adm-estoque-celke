import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Menu } from "../../components/Menu";

import {
  Container,
  ConteudoTitulo,
  Titulo,
  BotaoAcao,
  ButtonSuccess,
  ButtonInfo,
  Form,
  Label,
  Input,
  Hr,
  AlertaDanger,
  AlertaSuccess
} from "../../styles/custom_adm";

export const Cadastrar = () => {
  const [produto, setProduto] = useState({
    nome: "",
    valor: "",
    quantidade: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) =>
    setProduto({ ...produto, [e.target.name]: e.target.value });

  const addProduto = async (e) => {
    e.preventDefault();
    // console.log("Nome: " + produto.nome);
    setStatus({
      //   type: "success",
      //   mensagem: "Produto cadastrado com sucesso!",
      // });
      type: "error",
      mensagem: "Erro: produto não cadastrado com sucesso!",
      });
    //   type: "redSuccess",
    //   mensagem: "Produto cadastrado com sucesso!",
    // });
  };

  return (
    <Container>
      <Menu />
      <ConteudoTitulo>
      <Titulo>Cadastrar</Titulo>
        <BotaoAcao>
          <Link to="/listar">
            <ButtonInfo type="button">Listar</ButtonInfo>
          </Link>{" "}
        </BotaoAcao>
      </ConteudoTitulo>

      {status.type === "error" ? (
        <AlertaDanger>{status.mensagem}</AlertaDanger>
        ) : (
          ""
          )}
      {status.type === "success" ? (
        <AlertaSuccess>{status.mensagem}</AlertaSuccess>
        ) : (
          ""
          )}
      {status.type === "redSuccess" ? (
        <Redirect
        to={{
          pathname: "/listar",
          state: {
            type: "success",
            mensagem: status.mensagem,
          }
        }}
        />
        ) : (
          ""
          )}

     <Hr/>
      <Form action="" onSubmit={addProduto}>
        <Label htmlFor="nome">Nome:</Label>
        <Input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          onChange={valueInput}
        />
        <br /> <br />
        <Label htmlFor="valor">Preço:</Label>
        <Input
          type="text"
          name="valor"
          placeholder="Preço do produto"
          onChange={valueInput}
        />
        <br /> <br />
        <Label htmlFor="quantidade">Quantidade:</Label>
        <Input
          type="number"
          name="quantidade"
          placeholder="Quantidade do produto"
          onChange={valueInput}
        />
        <br /> <br />
        <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
      </Form>
    </Container>
  );
};
