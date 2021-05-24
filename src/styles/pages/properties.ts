import styled from 'styled-components';

export const PropertyDetails = styled.div`
  width: 100%;
  padding: 2rem 12rem;
  font-family: ubuntu;
  display: flex; 

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  .locale {
    width: 25rem;

    @media only screen and (max-width: 1200px) {
        width: 15rem;
    }

    img {
        border-radius: 1rem;
    }

    @media only screen and (max-width: 1200px) {
        img {
            width: 200px;
        }
    }

    h2, p, a {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    p {
       color: #363636;
    }

    a {
        color: #e93f3d;
        font-weight: 600;
    }
  }

  .description {
    padding: 0 2rem;

    p {
        margin-top: 0.5rem;
        color: #363636;
    }

    .status {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.1rem solid #c0c0c0;
        padding-bottom: 0.5rem;

        p {
            font-weight: 600;
        }

        .ball {
            display: flex;
            align-items: center;

            .green-ball {
                background-color: #03BB85;
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
            }

            p {
                color: #03BB85 !important;
                margin-top: 0 !important;
                margin-left: 0.4rem;
            }
        }
    } 

    .cards {
        display: flex;
        gap: 1.5rem;
        padding-top: 1.5rem;

        @media only screen and (max-width: 1000px) {
            flex-direction: column;
        }

        .card-item {
            width: 15.5rem;
            height: 6.5rem;
            border: 0.05rem solid #c0c0c0;
            border-radius: 0.7rem;
            padding: 1rem;
            color: #666666;

            h2 {
                font-size: 1.2rem;
            }

            .card-item-value{
                display: flex;

                img {
                    width: 40px;
                    height: 40px;
                }

                h3 {
                    font-size: 2.2rem;
                    margin-left: 1rem;
                    font-weight: 500;
                }
            }            
        }  
    }
  }
`;

export const Featured = styled.div`
    .headline{ 
        border-bottom: 0.1rem solid #c0c0c0;
        padding-bottom: 0.5rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .dots {
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 1000px) {
            flex-direction: column;
        }

        .dot-group {
            display: flex;
            justify-content: center;
            align-items: center;
            
            .dot {
                background-color: #363636;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
            }

            p {
                margin-top: 0;
                color: #363636;
                font-size: 1.3rem;
                margin-left: 0.4rem;
            }

        }
    }

    .roles {
        .line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.5rem;

            @media only screen and (max-width: 1000px) {
                flex-direction: column;
            }

            p {
                width: 20rem;
            }
        }

        a {
            color: #e93f3d;
            text-decoration: none;
            font-weight: 500;
        }
    }

    .comodities {
        .dot-group {
            p {
                font-size: 1rem !important;
            }
        }
            
    }

    .yes, .not {
        background-color: #03BB85;
        border-radius: 0.3rem;
        padding: 0.12rem 0.6rem;
        color: #FFFFFF;
        margin-left: 0.3rem;
    }

    .not {
        background-color: #e93f3d;
    }
`;