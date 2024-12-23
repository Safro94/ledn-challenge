import { SVGProps } from 'react'

export const AlertCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <g data-name='Layer 2'>
      <g data-name='alert-circle'>
        <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z' />
        <circle cx={12} cy={16} r={1} />
        <path d='M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' />
      </g>
    </g>
  </svg>
)
