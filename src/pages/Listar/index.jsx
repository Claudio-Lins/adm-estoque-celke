import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu";
import {
  Container,
  ConteudoTitulo,
  Titulo,
  BotaoAcao,
  ButtonSuccess,
  Table,
  ButtonPrimary,
  ButtonWarning,
  ButtonDanger,
  AlertaSuccess
} from "../../styles/custom_adm";

export const Listar = () => {
  const { state } = useLocation();

  const [data, setData] = useState([]);

  const [status] = useState({
    type: state ? state.type : "Vazio",
    mensagem: state ? state.mensagem : "Vazio",
  });

  const listarProdutos = (async) => {
    let valores = [
      {
        id: 3,
        nome: "Monitor",
        valor: 620.61,
        quantidade: 15,
      },
      {
        id: 2,
        nome: "Teclado",
        valor: 120.47,
        quantidade: 25,
      },
      {
        id: 1,
        nome: "Mouse",
        valor: 52.47,
        quantidade: 43,
      },
    ];
    setData(valores);
  };

  useEffect(() => {
    listarProdutos();
  }, []);

  const apagarProduto = async (idProduto) => {
    // console.log(idProduto);
    alert('Apagar Produto: ' + idProduto);
  };

  return (
    <Container>
      <Menu />
      <ConteudoTitulo>
        <Titulo>Listar</Titulo>
        <BotaoAcao>
          <Link to="/cadastrar">
            <ButtonSuccess type="button">Cadastrar</ButtonSuccess>
          </Link>
        </BotaoAcao>
      </ConteudoTitulo>
      {status.type === "success" ? (
        <AlertaSuccess>{status.mensagem}</AlertaSuccess>
      ) : (
        ""
      )}
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.valor}</td>
              <td>{produto.quantidade}</td>
              <td>
                <Link to={"/visualizar/" + produto.id}>
                  <ButtonPrimary type="button">Visualizar</ButtonPrimary>
                </Link>{" "}
                <Link to={"/editar/" + produto.id}>
                  <ButtonWarning type="button">Editar</ButtonWarning>
                </Link>{" "}
                <Link to={"#"}>
                  <ButtonDanger
                    type="button"
                    onClick={() => apagarProduto(produto.id)}
                  >
                    Apagar
                  </ButtonDanger>
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
