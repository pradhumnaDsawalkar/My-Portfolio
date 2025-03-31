import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
  padding: 0 1rem; /* Added padding for better spacing on small screens */

  @media (max-width: 576px) {
    margin: 3rem 0; /* Reduce margin for small screens */
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Column layout for better stacking on small screens */
  justify-content: center;
  text-align: center;
  row-gap: 1rem;
  width: 100%;

  span {
    font-size: 1rem;
    font-weight: 400;
    word-break: break-word; /* Prevents text overflow on small screens */
  }

  @media (min-width: 576px) {
    flex-direction: row; /* Switch to row layout for medium screens */
    justify-content: space-around;

    span {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 768px) {
    row-gap: 1.5rem;
    
    span {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;
