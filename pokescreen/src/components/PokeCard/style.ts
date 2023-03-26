import styled from "styled-components";

export const ContainerCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: 1rem;
  gap: 1.5rem;
  height: 75%;

  li {
    border-radius: 10px;
    width: 20rem;
    height: 16rem;
    box-shadow: var(--shadow-1);
    img {
      width: 12rem;
      height: 12rem;
    }
    p {
      color: var(--red-0);
      font-size: 1.5rem;
    }

    @media (max-width: 1300px) {
      width: 17rem;
      height: 11rem;

      img {
        width: 8rem;
        height: 8rem;
      }
    }
  }

  li:hover {
    transform: scale(1.08);
    transition: 0.5s;
  }
`;
