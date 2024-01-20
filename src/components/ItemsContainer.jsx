import styled from "styled-components";

const Container = styled.section`
  width: 92%;
  min-width: 220px;
  max-width: 380px;
  height: 80px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  justify-self: end;
  margin-bottom: 0px;



  
  @media (max-width: 768px){
    justify-self: center;
    align-self: flex-end;        
    margin-right: 0px;   
    margin: 10px;
    min-width: 140px;  
    height: 40px;
  }
`;

const ItemBox = styled.div`
    width: 84px;
    height: 84px;
    display: grid;
    place-content: center;     
    transition: transform 0.3s ease;
    border-radius: 100px;
  background-color: #FFFFFF;


    &:hover {
        transform: scale(1.10); /* Efecto de crecer al pasar el mouse por encima */  
        transition: transform 0.3s ease;  
    }

    @media (max-width: 768px){
        width: 24px;
        height: 24px;        
    }
`;

const Anchor  = styled.a`
  width: 38px;
  height: 38px;
  display: grid;
  place-content: center;
  background-repeat: no-repeat;
  background-size: contain;

     @media (max-width: 768px){
        width: 20px;
        height: 20px;        
    }
`;

const ItemsContainer = ({ arrayItems, columns, rows, justifySelf, alignSelf }) => {
    return(
        <Container style={{ 
            gridColumn: `${columns[0]} / ${columns[1]}`, 
            gridRow: `${rows[0]} / ${rows[1]}`,            
            justifySelf: `${justifySelf}`,
            alignSelf: `${alignSelf}`
            }}
        >
            {arrayItems.map((link, index) => (
                <ItemBox key={index}>
                    <Anchor                         
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={
                            {
                                backgroundImage: `url(${link.pathImage})`
                            }}
                    ></Anchor>
                </ItemBox>
            ))}
        </Container>
    );
}

export { ItemsContainer }