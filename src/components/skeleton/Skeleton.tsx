import { SkeletonLine } from './Skeleton.styles'

export const SKELETON_TEST_ID = 'skeleton'

export const Skeleton = () => {
  return <SkeletonLine data-testid={SKELETON_TEST_ID} />
}
