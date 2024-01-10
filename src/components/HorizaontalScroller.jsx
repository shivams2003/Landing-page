import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const TestScroll = () => {
  const elementWrapperRef = useRef();
  const horizontalSectionRef = useRef();

  const [horizontalSecLength, setHorizontalSecLength] = useState("");
  const [distanceFromTop, setDistanceFromTop] = useState("");
  const [scrollDistance, setScrollDistance] = useState("");
  const [elementWrapperTansform, setElementWrapperTransform] = useState("");

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const horizontalLength = elementWrapperRef.current.scrollWidth;
    setHorizontalSecLength(`${horizontalLength}`);
    const distFromTop = horizontalSectionRef.current.offsetTop;
    setDistanceFromTop(distFromTop);
    const scrollDis = distFromTop + horizontalLength - windowWidth;
    setScrollDistance(scrollDis);
  }, []);

  window.onscroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= distanceFromTop && scrollTop <= scrollDistance) {
      setElementWrapperTransform(scrollTop - distanceFromTop);
    }
  };

  return (
    <HorizontalSection
      ref={horizontalSectionRef}
      horizontalSecLength={horizontalSecLength}
    >
      <StickyWrapper>
        <ElementWrapper
          ref={elementWrapperRef}
          elementWrapperTansform={elementWrapperTansform}
        >
          <FillerDiv>1</FillerDiv>
          <FillerDiv>2</FillerDiv>
          <FillerDiv>3</FillerDiv>
          <FillerDiv>4</FillerDiv>
          <FillerDiv>5</FillerDiv>
          <FillerDiv>6</FillerDiv>
          <FillerDiv>7</FillerDiv>
          <FillerDiv>8</FillerDiv>
          <FillerDiv>9</FillerDiv>
        </ElementWrapper>
      </StickyWrapper>
    </HorizontalSection>
  );
};

export default TestScroll;

const HorizontalSection = styled.section`
  padding: 2rem 0;
  background-color: pink;
  height: ${({ horizontalSecLength }) => `${horizontalSecLength}px`};
`;
const StickyWrapper = styled.div`
  padding: 0 2rem;
  width: 100%;
  overflow: hidden;
  position: sticky;
  top: 200px;
`;

const ElementWrapper = styled.div`
  position: relative;
  display: flex;
  transform: ${({ elementWrapperTansform }) =>
    `translateX(-${elementWrapperTansform}px)`};
`;

const FillerDiv = styled.div`
  width: 500px;
  height: 300px;
  background-color: purple;
  margin: 0 20px 0 0;
  flex-shrink: 0;
`;
