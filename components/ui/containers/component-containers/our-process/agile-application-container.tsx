import React from 'react';
import styled from "styled-components";
import { BaseFlexContainer } from "../../../../_utility/utility";
import Arrow from "../../../../../public/assets/icons/Arrow.svg";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export type AgileProps = {
    step: string,
    label: string,
    image: string,
    list: any,
    description:string
}

const HeaderText = styled.h3`
    color: #FFFFFF;
    font-weight:400;
    font-size: 18px;
    line-height: 21px;
`;
const Description = styled.p`
    color: #FFFFFF;
    font-weight:400;
    font-size: 20px;
    line-height: 30px;
`;

function processImage(image: any) {
    return (
        <img
            alt="technology background"
            src={image}
            className="developementStepImg"
            width="100%"
        />);
}

export const AgileContainer = ({
    step,
    label,
    image,
    list,
    description
}: AgileProps) => {
    console.log(list,description)
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    ) => {
        setSelectedIndex(index);
    };    
    return (
        <BaseFlexContainer className="d-flex py-3">
            <div className="row">
                <div className="col-lg-5 col-md-12 my-3" style={{ padding: "20px 10px 20px 0px" }}>
                    {processImage(image)}
                </div>
                <div className="col-lg-3 col-md-12 my-3">
                    <List className="list mx-2" component="nav" aria-label="main mailbox folders">
                    {list.map((process: any, i: any) => (
                    <ListItem button key={i} selected={selectedIndex === i}
                    onClick={(event) => handleListItemClick(event,i)} >
                        <ListItemText primary={process} />
                    </ListItem>
                    ))}
                    </List>
                </div>
                <div className="col-lg-4 col-md-12 my-3">
                    <Description className="mx-4 mb-2" contentEditable='true' dangerouslySetInnerHTML={{ __html: description }}>
                    </Description>
                    <button className="learnMoreBtn d-flex align-items-center mx-4 mt-4">
                        <span className="mx-1">LEARN MORE</span>
                        <img src={Arrow} className="mx-1"/>
                    </button>
                </div>
            </div>
        </BaseFlexContainer>
    );
}