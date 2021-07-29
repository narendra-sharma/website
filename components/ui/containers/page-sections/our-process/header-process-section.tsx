import styled from "styled-components";
import {BaseFlexContainer} from "../../../../_utility/utility";

export type HeaderProcessProps = {
    header: string;
    description: string;
    backgroundImage?: any; 
    scrumBoardImage?:any// or ?
}

const HeaderText = styled.h3`
  color: white;
  font-size: 2rem;
  padding-left: 2.5rem;
  font-weight: 400;
`;


export const HeaderProcessSection = ({
                                header,
                                description,
                                backgroundImage,
                                scrumBoardImage,
                            }: HeaderProcessProps) => {
    let headTitle=header.split(' ');
    let desc=description.split('.');
    const HeaderProcessImage = () => {
        return <div className="processHeaderImage">
            <img
            alt="technology background"
            src={backgroundImage}
            width="100%"
        />
        </div>
    }
    const Title = () => {
        return (
        <HeaderText className="header_title">
            {headTitle.map((val,i)=>{
                if(i==0){
                    return(<span key={i} className="processTitleFirst pb-1">{val}</span>)
                }else{
                    return(<span key={i}>{' '+val}</span>)
                }
                            })}
        </HeaderText>);
    }
    const Description = () => {
        return (
        <p  className="paragraph">
            {desc.map((val,i)=>{
                if(i==0){
                    return(<span key={i} className="processDescFirst">{val+'.'}</span>)
                }else if(i==(desc.length-1)){
                    return(<span key={i}>{val}</span>)
                } else{
                    return(<span key={i}>{val+'.'}</span>)
                }
            })}
        </p>);
    }
    const Scrumboard = () => {
        return (
          <img
            alt="Scrumboard Image"
            src={scrumBoardImage}
            className="scrumboard_image"
            />
        );
    }

    return (
        <BaseFlexContainer className="headerContainer">
            <HeaderProcessImage/>          
            <Title/>            
            <div className="row"> 
                <div className="col-lg-5 col-md-12">                             
                  <Description/>
                </div>               
                <div className="col-lg-7 col-md-12">
                  <Scrumboard/>
                </div>
            </div>
        </BaseFlexContainer>
    );
}