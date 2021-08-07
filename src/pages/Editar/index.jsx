import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu";

import {
  Container,
  ConteudoTitulo,
  Titulo,
  BotaoAcao,
  ButtonSuccess,
  ButtonPrimary,
  ButtonInfo,
  Form,
  Label,
  Input,
  Hr
} from "../../styles/custom_adm";

export const Editar = (props) => {

  const[id] = useState(props.match.params.id)
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const editProduto = async e => {
    e.preventDefault()
    // console.log('Nome: ' + quantidade)
    alert('Nome: ' + nome)
  }

  useEffect(() => {
    const getProduto = async () => {
      setNome('Mouse');
      setValor(52.47);
      setQuantidade(43);
    }
    getProduto();
  },[id]);

  return (
    <Container>
      <Menu />
      <ConteudoTitulo>
      <Titulo>Editar</Titulo>
        <BotaoAcao>
          <Link to="/listar">
            <ButtonInfo type="button">Listar</ButtonInfo>
          </Link>{" "}
          <Link to={"/visualizar/" + id}>
            <ButtonPrimary type="button">Visualizar</ButtonPrimary>
          </Link>{" "}
        </BotaoAcao>
      </ConteudoTitulo>
      <Hr />
      <Form onSubmit={editProduto}>
        <Label htmlFor="nome">Nome:</Label>
        <Input type="text" name="nome" value={nome} placeholder="Nome do produto" onChange={e => setNome(e.target.value)}/>
        <Label htmlFor="valor">Preço:</Label>
        <Input type="text" name="valor" value={valor} placeholder="Preço do produto" onChange={e => setValor(e.target.value)}/>
        <Label htmlFor="quantidade">Quantidade:</Label>
        <Input type="number" name="quantidade" value={quantidade} placeholder="Quantidade do produto" onChange={e => setQuantidade(e.target.value)}/>

        <ButtonSuccess type='submit'>Salvar</ButtonSuccess>
      </Form>
    </Container>
  );
};
