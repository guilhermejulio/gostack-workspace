import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/33285441?s=460&u=4946b8ab2f6cb7fe3de6a91939c055326c55fd74&v=4"
            alt="Guilherme Julio"
          />

          <div>
            <strong>guilhermejulio/gostack-exercicios</strong>
            <p>
              Repositório dos exercícios desenvolvidos durante o Bootcamp
              GoStack #14
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/33285441?s=460&u=4946b8ab2f6cb7fe3de6a91939c055326c55fd74&v=4"
            alt="Guilherme Julio"
          />

          <div>
            <strong>guilhermejulio/gostack-exercicios</strong>
            <p>
              Repositório dos exercícios desenvolvidos durante o Bootcamp
              GoStack #14
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/33285441?s=460&u=4946b8ab2f6cb7fe3de6a91939c055326c55fd74&v=4"
            alt="Guilherme Julio"
          />

          <div>
            <strong>guilhermejulio/gostack-exercicios</strong>
            <p>
              Repositório dos exercícios desenvolvidos durante o Bootcamp
              GoStack #14
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
