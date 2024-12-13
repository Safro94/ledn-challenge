import styled, { keyframes } from 'styled-components'

const skeletonSlide = keyframes`
    from {
      left: -100px;
    }
    to {
      left: calc(100% + 100px);
    }
  }`

export const SkeletonLine = styled.div`
  width: 100%;
  height: 8px;
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme }) => theme.palette.common.grey};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 100%;
    animation: ${skeletonSlide} 0.9s infinite ease-in-out;
    box-shadow: 0 0 80px 20px #fff;
  }
`
